import SelectLevels from "../../components/levels/select-levels";
import React from "react";
import mongoose from "mongoose";
import { connectDatabase } from "../../helpers/db-util";
import Seed from "../../models/Seed";

function Play(props) {
  console.log(props.seeds);

  return (
    <React.Fragment>
      <SelectLevels seeds={props.seeds}/>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
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

  try {
    const seeds = await Seed.find({ level: { $ne: "unverified" } });

    function simplifyDocuments(docs) {
      return docs.map(doc => ({
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
