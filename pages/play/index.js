import SelectLevels from "../../components/levels/select-levels";
import React from "react";
import mongoose from "mongoose";
import { connectDatabase } from "../../helpers/db-util";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Seed from "../../models/Seed";
import User from "../../models/User";
import Head from "next/head";

function Play(props) {
  console.log(props.seeds);

  return (
    <React.Fragment>
      <Head>
        <title>Cubour - Select Level</title>
        <meta
          name="description"
          content="Choose the level you want to play. Good luck!"
        />
      </Head>
      <SelectLevels seeds={props.seeds} levelCompleted={props.levelCompleted} />
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth",
  //       permanent: false,
  //     },
  //   };
  // }

  let userEmail;
  if (session) {
    userEmail = session.user.email;
  } else {
    userEmail = "";
  }
  // const { params } = context;
  // const seedId = params.seedId;
  // console.log("here is seedId");

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  let levelCompleted;

  try {
    const seeds = await Seed.find({ level: { $ne: "unverified" } });
    const thisUser = await User.findOne({ email: userEmail });

    if (!thisUser) {
      levelCompleted = "notLoggedIn";
    } else {
      levelCompleted = thisUser.levelCompleted;
    }

    // if (!thisUser) {
    //   mongoose.connection.close();
    //   return {
    //     notFound: true,
    //   };
    // }

    function simplifyDocuments(docs) {
      return docs.map((doc) => ({
        id: doc._id.toString(),
        level: doc.level,
      }));
    }

    const simplifiedSeeds = simplifyDocuments(seeds);

    if (!seeds) {
      mongoose.connection.close();
      return {
        notFound: true,
      };
    }

    mongoose.connection.close();
    return {
      props: {
        seeds: JSON.parse(JSON.stringify(simplifiedSeeds)),
        levelCompleted: JSON.parse(JSON.stringify(levelCompleted)),
      },
    };
  } catch (error) {
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default Play;
