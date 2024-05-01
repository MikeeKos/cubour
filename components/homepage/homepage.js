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
import Podium from "../leaderboard/podium";
import SideAction from "../ui/side-action";

//md - 768
//max 720

function Homepage() {
  const [ref, { height, width }] = useMeasure();
  const [profileIsHovered, setProfileIsHovered] = useState(false);
  const [profileRedirectIsHovered, setProfileRedirectIsHovered] =
    useState(false);
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

  const profileSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-8 h-8 md:w-12 md:h-12"
    >
      <g>
        <g fill="none" fillRule="evenodd" strokeWidth="0.14">
          <g fill="#000" transform="translate(-140 -2159)">
            <g transform="translate(56 160)">
              <motion.path
                className="fill-pageMenu"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                initial={{ pathLength: 1 }}
                animate={{ pathLength: profileRedirectIsHovered ? [0, 1] : 1 }}
                transition={{ duration: 1.2 }}
                d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"
              ></motion.path>
            </g>
          </g>
        </g>
      </g>
    </svg>
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

  const profileBlock = (
    <div>
      <motion.span
        onMouseEnter={() => setProfileRedirectIsHovered(true)}
        onMouseLeave={() => setProfileRedirectIsHovered(false)}
        initial={{ scale: 1 }}
        whileHover={{
          scale: [1, 1.01, 1],
          x: -5,
          y: -5,
        }}
        className="absolute -top-[6rem] -right-[6rem] w-[12rem] h-[12rem] md:-top-[10rem] md:-right-[10rem] md:w-[20rem] md:h-[20rem] bg-page2 md:bg-page3 rounded-full z-30 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
      >
        <Link
          href={session ? "/profile" : "/auth"}
          className="absolute left-8 bottom-7 md:left-20 md:bottom-16 flex flex-col items-center hover:cursor-pointer"
        >
          <div>{profileSVG}</div>
          <span
            className={`font-page font-extrabold text-pageMenu text-base md:text-lg border-pageMenu ${
              profileRedirectIsHovered
                ? "border-b-2 md:border-b-4 duration-150"
                : ""
            }`}
          >
            profile
          </span>
        </Link>
      </motion.span>
      <AnimatePresence>
        {profileRedirectIsHovered && (
          <div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="absolute -top-[8rem] -right-[8rem] w-[16rem] h-[16rem] md:-top-[13.5rem] md:-right-[13.5rem] md:w-[26rem] md:h-[26rem] bg-page5 rounded-full z-20 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            ></motion.span>

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="absolute -top-[10rem] -right-[10rem] w-[20rem] h-[20rem] md:-top-[15.2rem] md:-right-[15.2rem] md:w-[30rem] md:h-[30rem] bg-page4 md:bg-page2 rounded-full z-10 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
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
        <div className="absolute w-[24rem] h-[22rem] z-20 right-40 bottom-24 -rotate-12 opacity-0 lg:opacity-100 rounded-2xl">
          <div className="w-full h-full bg-page2 animate-levitate mix-blend-difference rounded-2xl">
            <Podium level={"X"} leaderboard={[]} />
          </div>
        </div>
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
        {session && (<div>{profileBlock}</div>)}
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
