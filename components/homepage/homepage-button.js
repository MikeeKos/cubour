import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const loadingSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="w-full h-full fill-page3"
    viewBox="0 0 16 16"
  >
    <g className="fill-page3" fill="#000" fillRule="evenodd" clipRule="evenodd">
      <path
        className="fill-page3"
        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
        opacity="0.2"
      ></path>
      <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
    </g>
  </svg>
);

function HomepageButton(props) {
  const [showLoading, setShowLoading] = useState(false);

  const loadingHandler = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  };

  return (
    <div className="row-span-1">
      <div className="w-full h-full flex items-center justify-center relative">
        {showLoading && (
          <div className="w-full h-full absolute flex justify-end items-center me-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.5 },
                rotate: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="h-[60%] sm:h-full aspect-square"
            >
              {loadingSVG}
            </motion.div>
          </div>
        )}

        <motion.div
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="hover:cursor-pointer py-7 md:py-0 relative w-[70%] sm:w-[55%] h-[70%] border-4 border-pageMenu md:border-page4 hover:border-pageMenu rounded-xl flex items-center justify-center bg-page2 hover:bg-page4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <Link
            href={`/${props.link}`}
            className="absolute w-full h-full flex items-center justify-center"
            onClick={loadingHandler}
          >
            <span className="absolute z-20 font-extrabold text-2xl sm:text-3xl tracking-wider text-pageMenu">
              {props.text}
            </span>
            <span className="absolute bottom-[8px] md:bottom-[9px] font-extrabold text-2xl sm:text-3xl tracking-wider text-page1">
              {props.text}
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HomepageButton;
