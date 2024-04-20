"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { cubourSVG } from "../../SVG/homepage";
import { timerSVG } from "../../SVG/game-grid";
import { rightSVG } from "../../SVG/arrows";

function TextCarousel({ count }) {
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  const prev = tuple[0];

  const direction = count > prev ? "increasing" : "decreasing";

  const textElements = [
    <div className="w-full h-full bg-page2 relative">
      <div className="w-full h-[5rem] md:h-[7rem] absolute bg-pageMenu mt-2 shadow-[rgba(0,_0,_0,_0.1)_0px_30px_90px]">
        <div className="w-full h-full flex items-center justify-center flex-row scale-50 md:scale-[32%] lg:scale-[45%]">
          {cubourSVG}
        </div>
      </div>
      <div className="w-full h-full absolute grid grid-cols-12">
        <div className="col-span-2 bg-page2"></div>
        <div className="col-span-8"></div>
        <div className="col-span-2 bg-page2"></div>
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full mt-24 md:mt-32 flex justify-center">
          <div className="w-[86%] h-[60%]">
            <div className="font-page text-xs sm:text-base md:text-lg text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
              Your task is to navigate the pawn to the finish as quickly as
              possible. Touching any border ends the game. Time running out also
              ends the game. Each element is designed to slow you down as much
              as possible.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute opacity-0 lg:opacity-100">
        <div className="absolute right-20 bottom-5 lg:bottom-6 animate-scale-swing-rotate">
          <div className="scale-150">{timerSVG}</div>
        </div>
      </div>
    </div>,
    <div className="w-full h-full bg-page3 md:bg-page4">
      <div className="w-full h-[30%]">
        <div className="w-full h-full flex justify-center items-center gap-4">
          <svg
            className="w-12 h-12 fill-pageMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -40 40 47.5"
          >
            <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-6v-34h4v34H0m13-5v-16h4v16h-4m23 5v-28h4v28h-4m-9-3v-10h4v10h-4"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 fill-pageMenu"
          >
            <path
              fill="#0F0F0F"
              className="fill-pageMenu"
              d="M16.315 16.668a1 1 0 101.415 1.414l4.665-4.665a2 2 0 000-2.829L17.727 5.92a1 1 0 10-1.415 1.414L19.978 11H2a1 1 0 100 2h17.983l-3.668 3.668z"
            ></path>
          </svg>
          <svg
            className="w-12 h-12 fill-pageMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32.834 40 40.33"
          >
            <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-9c16-11 14-21 5-21 5-5 11-3 13 3S7-15 11-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21-5-5-11-3-13 3s11 12 8 18h10"></path>
          </svg>
        </div>
      </div>
      <div className="w-full h-[70%] flex justify-center">
        <div className="w-[80%] h-[90%]">
          <div className="w-full h-full font-page text-2xl font-extrabold tracking-wide">
            hello
          </div>
        </div>
      </div>
    </div>,
    <div className="w-full h-full bg-page2"></div>,
    <div className="w-full h-full bg-page3 md:bg-page4"></div>,
    <div className="w-full h-full bg-page2"></div>,
    <div className="w-full h-full bg-page3 md:bg-page4"></div>,
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
                className="absolute z-50 flex justify-center items-center w-full h-full"
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
