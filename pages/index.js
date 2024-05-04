import React from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import Homepage from "../components/homepage/homepage";
import Head from "next/head";

//md - 768

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Cubour</title>
        <meta
          name="description"
          content="Welcome to the Cubour. Compete with other players. Try to complete all levels and achieve the best times possible"
        />
      </Head>
      <Homepage />
    </React.Fragment>
  );
}
