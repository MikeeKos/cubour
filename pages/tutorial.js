"use client";

import TutorialPage from "../components/tutorial/tutorial";
import React from "react";
import Head from "next/head";

function Turorial() {
  return (
    <React.Fragment>
      <Head>
        <title>Cubour - Profile</title>
        <meta
          name="description"
          content="How to play the game? Description of all types of blocks and their functions."
        />
      </Head>
      <TutorialPage />
    </React.Fragment>
  );
}

export default Turorial;
