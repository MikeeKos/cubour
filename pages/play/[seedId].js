//  http://localhost:3000/play/65eb3d702560a50a726979e6

import React from "react";
// import MainGame from "../../components/play/main-game";
import PlayPage from "../../components/play/play-page";
import mongoose from "mongoose";
import { connectDatabase } from "../../helpers/db-util";
import Seed from "../../models/Seed";

function Play(props) {
  return (
    <React.Fragment>
      {/* <MainGame /> */}
      <PlayPage seed={props.seed} />
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const seedId = params.seedId;
  console.log("here is seedId");

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  try {
    const seed = await Seed.findById(seedId);

    if (!seed) {
      mongoose.connection.close();
      return {
        notFound: true,
      };
    }

    mongoose.connection.close();
    return {
      props: {
        seed: JSON.parse(JSON.stringify(seed.seed)),
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
