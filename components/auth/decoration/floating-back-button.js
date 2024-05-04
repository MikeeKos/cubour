import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function FloatingBackButton(props) {
  return (
    <React.Fragment>
      <motion.div
        animate={{
          y: [0, 10],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          type: "tween",
          duration: 1,
        }}
        className="border-4 border-pageMenu mt-5 ml-5 mr-5 right-0 md:left-0 absolute w-24 h-24 md:w-36 md:h-36 bg-page3 rounded-full z-50 shadow-xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 10],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          type: "tween",
          duration: 1,
          delay: 0.5,
        }}
        className="border-4 border-pageMenu mt-5 ml-5 mr-5 right-2 top-2 md:left-2 absolute w-24 h-24 md:w-36 md:h-36 bg-page2 rounded-full z-50 shadow-xl md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex items-center justify-center"
      >
        <Link
          href={"/"}
          className="flex flex-col items-center hover:scale-110 duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-8 h-8 md:w-12 md:h-12 fill-pageMenu"
          >
            <path
              fillRule="evenodd"
              d="M4.297 3.293L.59 7l3.707 3.707a1 1 0 001.414-1.414L4.418 8h7.086a1.5 1.5 0 010 3h-1.5a1 1 0 100 2h1.5a3.5 3.5 0 100-7H4.418l1.293-1.293a1 1 0 10-1.414-1.414z"
            ></path>
          </svg>
          <span className="font-page font-extrabold text-pageMenu text-base md:text-lg border-pageMenu duration-150">
            menu
          </span>
        </Link>
      </motion.div>
    </React.Fragment>
  );
}

export default FloatingBackButton;
