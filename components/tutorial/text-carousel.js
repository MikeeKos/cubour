"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Image from "next/image";
import Title from "./carousel/title";
import Teleport from "./carousel/teleport";
import Unlock from "./carousel/unlock";
import Flashing from "./carousel/flashing";
import Special from "./carousel/special";

function TextCarousel({ count }) {
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  const prev = tuple[0];

  const direction = count > prev ? "increasing" : "decreasing";

  const textElements = [
    <Title />,
    <Teleport />,
    <Unlock />,
    <Flashing />,
    <Special />,
  ];

  return (
    <div className="w-full h-full md:border-4 md:border-pageMenu bg-page2">
      <div className="relative text-4xl text-pageMenu w-full h-full">
        <div className="flex justify-center w-full h-full">
          <div
            ref={ref}
            className="relative flex w-full h-full items-center justify-center overflow-hidden"
          >
            <AnimatePresence custom={{ direction, width }}>
              <motion.div
                key={count}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={{ direction, width }}
                className="absolute z-40 flex justify-center items-center w-full h-full"
              >
                <div className="w-full h-full relative">
                  {textElements[count]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }) => ({
    x: direction === "increasing" ? width : -width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction === "increasing" ? -width : width,
  }),
};

export default TextCarousel;
