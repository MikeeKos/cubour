import React from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import Homepage from "../components/homepage/homepage";

//md - 768

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <Homepage />
      </main>
    </React.Fragment>
  );
}
