import React from "react";
import { motion } from "framer-motion";

function Logout({profileIsHovered}) {
  return (
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
}

export default Logout;
