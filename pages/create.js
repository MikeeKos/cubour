import React from "react";
import Create from "../components/create/create";
import Head from "next/head";

function CreateMap() {
  return (
    <React.Fragment>
      <Head>
        <title>Cubour - Create Map</title>
        <meta
          name="description"
          content="Create your own map using all the blocks available in the game. Set the map size and time"
        />
      </Head>
      <Create />
    </React.Fragment>
  );
}

export default CreateMap;
