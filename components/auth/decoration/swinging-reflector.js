import React from "react";
import { motion } from "framer-motion";

function SwingingReflector({ height }) {
  return (
    <React.Fragment>
      <div
        className={`w-full ${
          height < 710 ? "h-[44rem]" : "h-full"
        } absolute flex justify-center bg-page1 overflow-hidden`}
      >
        <motion.svg
          animate={{
            rotate: [-5, 5],
            y: [-5, 5],
            x: [-150, -100],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-266 0 544 228"
          className="absolute -top-[48rem] w-[160rem] h-[160rem] fill-pageMenu"
        >
          <path d="M0 0h11v5c0 5 6 4 6 10H-6c0-6 6-5 6-10V0m17 17c0 1 0 1 2 2H-8c2-1 2-1 2-2h23m3 4l5 5h-39l5-5h29m7 7l251 200h-544L-16 28h43"></path>
        </motion.svg>
      </div>
    </React.Fragment>
  );
}

export default SwingingReflector;
