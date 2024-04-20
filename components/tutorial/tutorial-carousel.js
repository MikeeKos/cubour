"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Image from "next/image";
import {
  primaryLeafSVG,
  secondaryLeafSVG,
  nextLeafSVG,
  commonLeafSVG,
  lastLeafSVG,
} from "../../SVG/homepage";

function TutorialCarousel({ count, firstObj }) {
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  const prev = tuple[0];

  const direction = count > prev ? "increasing" : "decreasing";

  return (
    <div className="w-full h-full md:border-4 md:border-pageMenu">
      <div className="relative text-4xl text-pageMenu w-full h-full">
        <div className="flex justify-center w-full h-full">
          <div
            ref={ref}
            className="relative flex w-full h-full bg-page1 items-center justify-center overflow-hidden"
          >
            <div className="w-full h-full absolute">
              <Image
                src={"/bigreflector.png"}
                alt="Image"
                placeholder="blur"
                height={3400}
                width={5500}
                blurDataURL={"/bigreflector.png"}
                className="w-full h-full object-cover absolute hue-rotate-[-30deg] saturate-[1.2] object-right brightness-105"
              />
            </div>
            <div className="w-[50%] h-full z-10 absolute left-0 top-20">
              {primaryLeafSVG}
              {secondaryLeafSVG}
              {nextLeafSVG}
              {commonLeafSVG}
              {lastLeafSVG}
            </div>
            <AnimatePresence custom={{ direction, width }}>
              <motion.div
                key={count}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={{ direction, width }}
                className="absolute z-50 flex justify-center items-center w-full h-full"
              >
                <div className="w-full h-full relative">
                  <div className="w-full h-full">
                    <div className="w-[50%] md:w-full lg:w-[50%] h-full grid grid-rows-6">
                      <div className="row-span-2"></div>
                      <div className="row-span-4 p-4 md:p-28 flex items-center justify-center">
                        <div className="h-full aspect-square bg-pageMenu shadow-[rgba(0,_0,_0,_0.2)_0px_30px_60px]">
                          <Image
                            src={firstObj[count]}
                            alt="Image"
                            placeholder="blur"
                            height={600}
                            width={600}
                            blurDataURL={firstObj[count]}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <span>{firstObj[count]}</span> */}
                  </div>
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

export default TutorialCarousel;
