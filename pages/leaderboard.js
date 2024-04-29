import React from "react";
import Seed from "../models/Seed";
import LeaderboardPage from "../components/leaderboard/leaderboard";
import { connectDatabase } from "../helpers/db-util";
import mongoose from "mongoose";

function Leaderboard(props) {
  return (
    <React.Fragment>
      <LeaderboardPage seeds={props.seeds}/>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  try {
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

export default Leaderboard;
