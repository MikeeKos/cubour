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
import Head from "next/head";

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
        <Head>
          <title>Cubour - User Panel</title>
          <meta
            name="description"
            content="User Panel. Check your progress and records"
          />
        </Head>
        <ProfilePanel
          user={props.sessionObject}
          username={props.username}
          email={props.email}
          levelCompleted={props.levelCompleted}
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

    const seeds = await Seed.find({ level: { $ne: "unverified" } }).populate(
      "leaderboard"
    );
    if (!seeds) {
      mongoose.connection.close();
      return {
        notFound: true,
      };
    }

    mongoose.connection.close();
    return {
      props: {
        sessionObject: JSON.parse(JSON.stringify(session)),
        username: JSON.parse(JSON.stringify(thisUser.username)),
        email: JSON.parse(JSON.stringify(thisUser.email)),
        levelCompleted: JSON.parse(JSON.stringify(thisUser.levelCompleted)),
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

export default ProfilePage;
