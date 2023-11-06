import React from "react";
import { motion } from "framer-motion";

// hover:scale-105 duration-150 hover:cursor-pointer active:scale-95

function HomepageButton(props) {
  return (
    <div className="row-span-1">
      <div className="w-full h-full flex items-center justify-center hover:cursor-pointer mix-blend-multiply">
        <motion.div
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="relative w-[70%] sm:w-[55%] h-[70%] border-4 border-page4 hover:border-pageMenu rounded-xl flex items-center justify-center bg-page2 hover:bg-page4 duration-100 shadow-2xl"
        >
          <span className="absolute z-20 font-extrabold text-2xl sm:text-3xl tracking-wider text-pageMenu">
            {props.text}
          </span>
          <span className="absolute bottom-[9px] font-extrabold text-2xl sm:text-3xl tracking-wider text-page1">
            {props.text}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default HomepageButton;
