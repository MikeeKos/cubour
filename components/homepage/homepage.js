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
import Profile from "./animated-icons/profile";
import Logout from "./animated-icons/logout";
import Account from "./animated-icons/account";

function Homepage() {
  const [ref, { height, width }] = useMeasure();
  const [profileIsHovered, setProfileIsHovered] = useState(false);
  const [profileRedirectIsHovered, setProfileRedirectIsHovered] =
    useState(false);
  const { data: session, status } = useSession();

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
          <div>
            {session ? (
              <div>
                <Logout profileIsHovered={profileIsHovered} />
              </div>
            ) : (
              <div>
                <Profile profileIsHovered={profileIsHovered} />
              </div>
            )}
          </div>
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
          <div>
            <Account profileRedirectIsHovered={profileRedirectIsHovered} />
          </div>
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
        {session && <div>{profileBlock}</div>}
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
