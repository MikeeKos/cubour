import React from "react";
import { motion } from "framer-motion";

function Profile({ profileIsHovered }) {
  return (
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
}

export default Profile;
