import React from "react";
import PlayPage from "../../components/play/play-page";
import mongoose from "mongoose";
import { connectDatabase } from "../../helpers/db-util";
import Seed from "../../models/Seed";
import Head from "next/head";

function Play(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Cubour - LVL {props.seed.level}</title>
        <meta name="description" content="Good luck!" />
      </Head>
      <PlayPage seed={props.seed} />
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const seedId = params.seedId;

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
        seed: JSON.parse(JSON.stringify(seed)),
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
