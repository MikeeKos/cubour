import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { connectDatabase } from "../../helpers/db-util";
import mongoose from "mongoose";
import User from "../../models/User";
import Seed from "../../models/Seed";
import ProfilePanel from "../../components/profile/profile";

function ProfilePage(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [router, status]);

  if (status === "loading") {
    return (
      <React.Fragment>
        <div>
          <div className="w-full h-screen border-2 border-pageMenu flex items-center justify-center bg-pageMenu shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]">
            <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-page1 font-extrabold tracking-wide text-center overflow-hidden p-5">
              loading...
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (status === "authenticated") {
    return (
      <React.Fragment>
        <ProfilePanel
          user={props.sessionObject}
          username={props.username}
          email={props.email}
          currentLevel={props.currentLevel}
          seeds={props.seeds}
        />
      </React.Fragment>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const userEmail = session.user.email;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  try {
    const thisUser = await User.findOne({ email: userEmail });
    console.log("This user")
    console.log(thisUser);

    const seeds = await Seed.find({ level: { $ne: "unverified" } }).populate("leaderboard");
    if (!seeds) {
      mongoose.connection.close();
      return {
        notFound: true,
      };
    }
    console.log(seeds);


    mongoose.connection.close();
    return {
      props: {
        // lakes: JSON.parse(JSON.stringify(userLakes)),
        sessionObject: JSON.parse(JSON.stringify(session)),
        username: JSON.parse(JSON.stringify(thisUser.username)),
        email: JSON.parse(JSON.stringify(thisUser.email)),
        currentLevel: JSON.parse(JSON.stringify(thisUser.currentLevel)),
        seeds: JSON.parse(JSON.stringify(seeds)),
      },
    };
  } catch (error) {
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}


// export async function getServerSideProps(context) {
//   // const { params } = context;
//   // const seedId = params.seedId;
//   // console.log("here is seedId");

//   let client;
//   try {
//     client = await connectDatabase();
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }

//   try {
//     const seeds = await Seed.find({ level: { $ne: "unverified" } });

//     function simplifyDocuments(docs) {
//       return docs.map(doc => ({
//         id: doc._id.toString(),
//         level: doc.level,
//       }));
//     }

//     const simplifiedSeeds = simplifyDocuments(seeds);

//     if (!seeds) {
//       mongoose.connection.close();
//       return {
//         notFound: true,
//       };
//     }

//     mongoose.connection.close();
//     return {
//       props: {
//         seeds: JSON.parse(JSON.stringify(simplifiedSeeds)),
//       },
//     };
//   } catch (error) {
//     mongoose.connection.close();
//     return {
//       notFound: true,
//     };
//   }
// }

export default ProfilePage;
