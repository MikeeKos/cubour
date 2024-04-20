import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
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
  const { data: session, status } = useSession();

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

  const logout = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-12 h-12 md:w-16 md:h-16"
      >
        <g>
          <g>
            <motion.path
              className="stroke-pageMenu"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              initial={{ pathLength: 1 }}
              animate={{ pathLength: profileIsHovered ? [0, 1] : 1 }}
              transition={{ duration: 1.2 }}
              d="M12 15l3-3m0 0l-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 01-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 01-.874-.874C9 18.48 9 17.92 9 16.8v-.05"
            ></motion.path>
          </g>
        </g>
      </svg>
    </div>
  );

  const linkHandler = () => {
    if (session) {
      signOut();
    }
  };

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
          href={session ? "/" : "/auth"}
          className="absolute left-14 top-10 md:left-24 md:top-20 flex flex-col items-center hover:cursor-pointer"
          onClick={linkHandler}
        >
          <div>{session ? <div>{logout}</div> : <div>{profile}</div>}</div>
          <span
            className={`font-page font-extrabold text-pageMenu text-base md:text-lg border-pageMenu ${
              profileIsHovered ? "border-b-2 md:border-b-4 duration-150" : ""
            }`}
          >
            {session ? "logout" : "log in"}
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
        <div className="w-full h-[15rem]">
          <div className="w-full h-full flex items-center justify-center flex-row mix-blend-difference mt-7">
            {cubourSVG}
          </div>
        </div>
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
            <HomepageButton text={"leaderboard"} link={"leaderboard"} />
            <HomepageButton text={"create map"} link={"create"} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
