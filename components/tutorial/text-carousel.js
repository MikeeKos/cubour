"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { cubourSVG } from "../../SVG/homepage";
import { timerSVG } from "../../SVG/game-grid";
import { upSVG, downSVG, rightSVG, leftSVG, giftSVG } from "../../SVG/arrows";
import Image from "next/image";

function TextCarousel({ count }) {
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  const prev = tuple[0];

  const direction = count > prev ? "increasing" : "decreasing";

  const flashingBlockSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-[90%] h-[90%]"
    >
      <path
        className="fill-page1"
        fill="#000"
        fillRule="evenodd"
        d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

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
      <div className="w-full h-[40%] md:h-[30%]">
        <div className="w-full h-full flex justify-center items-center gap-4">
          <svg
            className="w-14 h-14 md:w-16 md:h-16 fill-pageMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -40 40 47.5"
          >
            <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-6v-34h4v34H0m13-5v-16h4v16h-4m23 5v-28h4v28h-4m-9-3v-10h4v10h-4"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-14 h-14 md:w-16 md:h-16 fill-pageMenu"
          >
            <path
              fill="#0F0F0F"
              className="fill-pageMenu"
              d="M16.315 16.668a1 1 0 101.415 1.414l4.665-4.665a2 2 0 000-2.829L17.727 5.92a1 1 0 10-1.415 1.414L19.978 11H2a1 1 0 100 2h17.983l-3.668 3.668z"
            ></path>
          </svg>
          <svg
            className="w-14 h-14 md:w-16 md:h-16 fill-pageMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32.834 40 40.33"
          >
            <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-9c16-11 14-21 5-21 5-5 11-3 13 3S7-15 11-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21-5-5-11-3-13 3s11 12 8 18h10"></path>
          </svg>
        </div>
      </div>
      <div className="w-full h-[70%] flex justify-center">
        <div className="w-[80%] h-[90%]">
          <div className="w-full h-full font-page text-2xl font-extrabold tracking-wide relative">
            <div className="w-full h-[75%] md:h-full absolute bg-page2 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px]">
              <Image
                src={"/teleport.jpg"}
                alt="Image"
                placeholder="blur"
                height={568}
                width={854}
                blurDataURL={"/teleport.jpg"}
                className="w-full h-full object-cover absolute hue-rotate-[-20deg] saturate-[1.2] object-right brightness-[10%] opacity-95"
              />
            </div>
            <div className="w-full h-full absolute flex items-start mt-7 md:mt-0 md:items-center text-center">
              <div className="font-page text-xs sm:text-base md:text-lg text-page2 font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
                <span className="bg-page1 text-pageMenu">teleportation block</span> -
                instantly moves a pawn from the entry portal to the exit portal.
                It can be used multiple times.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="w-full h-full bg-page2 relative">
      <div className="w-full h-full absolute flex items-end justify-end">
        <div className="w-[50%] h-[25%] md:h-[20%] lg:h-[25%] bg-page4 rounded-ss-2xl pl-6 border-t-4 border-l-4 border-pageMenu ">
          <div className="w-full h-full font-page font-extrabold flex items-center justify-center -rotate-12 animate-scale-swing-rotate text-2xl md:text-xl lg:text-3xl">
            1...2...3...
          </div>
        </div>
      </div>
      <div className="w-full h-[30%] flex items-center justify-center">
        <div className="font-page text-xl sm:text-4xl md:text-xl lg:text-3xl text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
          Unlock block
        </div>
        <div className="">
          <svg
            className="w-10 h-10 md:w-12 md:h-12 ml-2 bg-pageMenu rounded-md p-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="stroke-page1"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M12 14.5v2m-5-6.471C7.471 10 8.053 10 8.8 10h6.4c.747 0 1.329 0 1.8.029m-10 0c-.588.036-1.006.117-1.362.298a3 3 0 00-1.311 1.311C4 12.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 21 7.12 21 8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311c-.356-.181-.774-.262-1.362-.298m-10 0V8a5 5 0 0110 0v2.029"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full h-[70%] flex justify-center">
        <div className="w-[80%] h-full font-page text-xs sm:text-base md:text-lg text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
          Enter the square specified number of times with a pawn to unlock the
          passage. Once unlocked, the passage remains open. Pay attention to
          which passage is being opened.
        </div>
      </div>
    </div>,
    <div className="w-full h-full bg-page3 md:bg-page4">
      <div className="w-full h-[30%] flex items-center justify-center">
        <div className="font-page text-xl sm:text-4xl md:text-xl lg:text-3xl text-page1 font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7 bg-pageMenu p-3">
          flasing block
        </div>
      </div>
      <div className="w-full h-[70%]">
        <div className="w-full h-full grid grid-rows-4">
          <div className="row-span-1 mx-4 flex flex-row">
            <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
              {flashingBlockSVG}
            </div>
            <div className="w-full h-full flex items-center">
              <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                {" "}
                - block that flashes every{" "}
                <span className="text-page1 underline">500</span> milliseconds
              </div>
            </div>
          </div>
          <div className="row-span-1 mx-4 flex flex-row">
            <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
              {flashingBlockSVG}
            </div>
            <div className="w-full h-full flex items-center">
              <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                {" "}
                - block that flashes every{" "}
                <span className="text-page1 underline">750</span> milliseconds
              </div>
            </div>
          </div>
          <div className="row-span-1 mx-4 flex flex-row">
            <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
              {flashingBlockSVG}
            </div>
            <div className="w-full h-full flex items-center">
              <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                {" "}
                - block that flashes every{" "}
                <span className="text-page1 underline">1000</span> milliseconds
              </div>
            </div>
          </div>
          <div className="row-span-1 mx-4 flex flex-row">
            <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
              {flashingBlockSVG}
            </div>
            <div className="w-full h-full flex items-center">
              <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                {" "}
                - block that flashes every{" "}
                <span className="text-page1 underline">1250</span> milliseconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="w-full h-full bg-page2">
      <div className="w-full h-[20%] flex items-center justify-center mt-1 md:mt-0">
        <div className="flex justify-center items-center flex-row font-page text-xl sm:text-4xl md:text-xl lg:text-3xl text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7 bg-page1 p-1 md:p-3">
          <div>special blocks</div>
          <div className="w-10 h-10 md:w-12 md:h-12 ml-2 bg-page4">{giftSVG}</div>
        </div>
      </div>
      <div className="w-full h-[80%]">
        <div className="w-full h-[20%] font-page font-extrabold text-xs sm:text-sm lg:text-lg pt-2 md:pt-0 lg:pt-2 text-center">
          After stepping on this block, you must successfully complete the
          mini-game
        </div>
        <div className="w-full h-[80%]">
          <div className="w-full h-full grid grid-cols-3">
            <div className="col-span-1 p-2">
              <div className="w-full h-full bg-pageMenu">
                <div className="w-full h-0 opacity-0 md:opacity-100 md:h-[40%] relative">
                  <div className="w-full h-full absolute text-page1 font-page font-extrabold text-center text-sm mt-1 md:mt-2 tracking-wide">
                    Mini-game: circle around the arrows
                  </div>
                  {/* Mini-game: alternate clicking up and down */}
                </div>
                <div className="w-full h-full md:h-[60%] flex justify-center items-center relative">
                  <div className="absolute w-[60%] sm:h-[80%] sm:w-auto aspect-square md:w-[80%] md:h-auto bg-page2 p-1 animate-pulse">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full h-[70%] grid grid-cols-3 grid-rows-2">
                        <div className="col-span-3 row-span-1">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-1/3 h-full border-2 border-pageMenu bg-page3">
                              {upSVG}
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                          {leftSVG}
                        </div>
                        <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                          {downSVG}
                        </div>
                        <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                          {rightSVG}
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[90%] grid grid-cols-1 grid-rows-2">
                      <div className="col-span-1 row-span-1 flex justify-center">
                        <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                          {upSVG}
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-center">
                        <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                          {downSVG}
                        </div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-2">
              <div className="w-full h-full bg-pageMenu">
                <div className="w-full h-0 opacity-0 md:opacity-100 md:h-[40%] relative">
                  <div className="w-full h-full absolute text-page1 font-page font-extrabold text-center text-sm mt-1 md:mt-2 tracking-wide">
                    Mini-game: alternate clicking up and down
                  </div>
                  {/* Mini-game: circle around the arrows on the keyboard */}
                </div>
                <div className="w-full h-full md:h-[60%] flex justify-center items-center relative">
                  <div className="absolute w-[60%] sm:h-[80%] sm:w-auto aspect-square md:w-[80%] md:h-auto bg-page2 p-1 animate-pulse">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full h-[90%] grid grid-cols-1 grid-rows-2">
                        <div className="col-span-1 row-span-1 flex justify-center">
                          <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                            {upSVG}
                          </div>
                        </div>
                        <div className="col-span-1 row-span-1 flex justify-center">
                          <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                            {downSVG}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-2">
              <div className="w-full h-full bg-pageMenu">
                <div className="w-full h-0 opacity-0 md:opacity-100 md:h-[40%] relative">
                  <div className="w-full h-full absolute text-page1 font-page font-extrabold text-center text-sm mt-1 md:mt-2 tracking-wide">
                    Mini-Game: alternate clicking right and left
                  </div>
                  {/* Mini-game: circle around the arrows on the keyboard */}
                  {/* Mini-game: alternate clicking up and down */}
                </div>
                <div className="w-full h-full md:h-[60%] flex justify-center items-center relative">
                  <div className="absolute w-[60%] sm:h-[80%] sm:w-auto aspect-square md:w-[80%] md:h-auto bg-page2 p-1 animate-pulse">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full h-1/2 bg-pageMenu grid grid-cols-2 grid-rows-1">
                        <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                          {leftSVG}
                        </div>
                        <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                          {rightSVG}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
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
