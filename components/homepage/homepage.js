import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence } from "framer-motion";
import HomepageButton from "./homepage-button";
import {
  reflectorSVG,
  desktopReflectorSVG,
  cubourSVG,
  primaryLeafSVG,
  secondaryLeafSVG,
  nextLeafSVG,
  commonLeafSVG,
  lastLeafSVG,
} from "../../SVG/homepage";
import Link from "next/link";

//md - 768
//max 720

function Homepage() {
  const [ref, { height, width }] = useMeasure();
  const [profileIsHovered, setProfileIsHovered] = useState(false);

  const profile = (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-12 h-12 md:w-16 md:h-16"
        >
          <g
            stroke="#383434"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <motion.path
              initial={{ pathLength: 1 }}
              animate={{ pathLength: profileIsHovered ? [0, 1] : 1 }}
              transition={{ duration: 1.2 }}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></motion.path>
          </g>
        </svg>
      </div>
    </div>
  );

  const auth = (
    <div>
      <motion.span
        onMouseEnter={() => setProfileIsHovered(true)}
        onMouseLeave={() => setProfileIsHovered(false)}
        initial={{ scale: 1 }}
        whileHover={{
          scale: [1, 1.01, 1],
          x: -5,
          y: -5,
        }}
        className="absolute -bottom-[8rem] -right-[8rem] w-[16rem] h-[16rem] md:-bottom-[12rem] md:-right-[12rem] md:w-[24rem] md:h-[24rem] bg-page3 md:bg-page2 rounded-full z-30 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
      >
        <Link
          href={"/auth"}
          className="absolute left-14 top-10 md:left-24 md:top-20 flex flex-col items-center hover:cursor-pointer"
        >
          <div>{profile}</div>
          <span
            className={`font-page font-extrabold text-pageMenu text-base md:text-lg border-pageMenu ${
              profileIsHovered ? "border-b-2 md:border-b-4 duration-150" : ""
            }`}
          >
            log in
          </span>
        </Link>
      </motion.span>
      <AnimatePresence>
        {profileIsHovered && (
          <div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="absolute -bottom-[10rem] -right-[10rem] w-[20rem] h-[20rem] md:-bottom-[15rem] md:-right-[15rem] md:w-[30rem] md:h-[30rem] bg-page4 md:bg-page3 rounded-full z-20 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            ></motion.span>

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="absolute -bottom-[12rem] -right-[12rem] w-[24rem] h-[24rem] md:-bottom-[17.5rem] md:-right-[17.5rem] md:w-[35rem] md:h-[35rem] bg-page2 md:bg-page4 rounded-full z-10 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            ></motion.span>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <React.Fragment>
      <main
        ref={ref}
        className="relative font-page w-screen min-h-screen bg-page1 overflow-hidden"
      >
        <div className="absolute w-full h-full z-10 mix-blend-difference">
          <div className="flex justify-end">
            <div className="h-[49rem] w-[10rem] md:w-[20rem]">
              {primaryLeafSVG}
              {secondaryLeafSVG}
              {nextLeafSVG}
              {commonLeafSVG}
              {lastLeafSVG}
            </div>
          </div>
        </div>
        {width <= 768 && reflectorSVG}
        {width > 768 && desktopReflectorSVG}
        {cubourSVG}
        {primaryLeafSVG}
        {secondaryLeafSVG}
        {nextLeafSVG}
        {commonLeafSVG}
        {lastLeafSVG}
        {auth}
        <div className="relative inline-block w-full md:w-2/3 lg:w-1/2 min-h-[20rem] md:min-h-[25rem]">
          <div className="absolute w-full h-full grid grid-rows-4 z-50">
            <HomepageButton text={"play"} link={"play"} />
            <HomepageButton text={"tutorial"} link={"tutorial"} />
            <HomepageButton text={"leaderboard"} link={"create"} />
            <HomepageButton text={"create map"} link={"create"} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
