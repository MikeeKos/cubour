import { motion, AnimatePresence } from "framer-motion";

const reflectorSVG = (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    className="w-[68.7rem] absolute fill-pageMenu left-24 -top-7"
    animate={{
      rotate: [0, 5],
      x: [30, 0],
      y: [0, 20],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 8.2,
    }}
  >
    <rect width="100%" height="100%" fill="rgba(255,255,255,0)"></rect>
    <g transform="translate(47.779 46.592) scale(.0978)">
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        d="M143.157 116.859v18.233c0 14.623-11.855 26.479-26.478 26.479-14.623 0-26.479-11.855-26.479-26.479V90.057c-25.448-9.834-54.731.941-67.451 25.759l-.001.001c-13.602 26.537-3.115 59.076 23.422 72.678l87.438 44.817 49.258-96.1-39.709-20.353z"
        transform="translate(-124.341 41.471) scale(2.7613) translate(-99.83 -159.877)"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        d="M271.077 163.582a16.851 16.851 0 00-12.454-8.985l-59.656-9.131-49.255 96.099 42.245 43.098a16.85 16.85 0 0027.03-4.11L271.07 178.94a16.85 16.85 0 00.007-15.358z"
        transform="translate(183.516 200.839) scale(2.7613) translate(-211.318 -217.592)"
      ></path>
      <path
        style={{ isCustomFont: "none", fontFileUrl: "none" }}
        d="M116.678 148.332c7.312 0 13.239-5.928 13.239-13.239V13.239C129.917 5.928 123.99 0 116.678 0c-7.312 0-13.239 5.928-13.239 13.239v121.854c0 7.311 5.927 13.239 13.239 13.239z"
        transform="translate(-77.816 -195.206) scale(2.7613) translate(-116.678 -74.166)"
      ></path>
    </g>
    <path
      style={{ isCustomFont: "none", fontFileUrl: "none" }}
      d="M0 0l2-4h88L55 63 0 0"
      transform="translate(520.219 387.67) scale(9.958) translate(-45 -29.5)"
      vectorEffect="non-scaling-stroke"
    ></path>
  </motion.svg>
);

const desktopReflectorSVG = (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3.75 -47 93.75 47"
    className="w-[90rem] absolute fill-pageMenu"
  >
    <path d="M0 0h4c1 0 1-1 0-1H1v-43l3-3H3l-3 3v43h-3c-1 0-1 1 0 1h3m5-42l2-2-2-2c-1-1-3 1-2 2l2 2m3-2l-3 3v1l4-4H8m-3 5L34 0h56v-26L10-44l-5 5"></path>
  </motion.svg>
);

const cubourSVG = (
  <div className="w-full h-[15rem]">
    <div className="w-full h-full flex items-center justify-center flex-row mix-blend-difference mt-7">
      <motion.span
        animate={{
          rotate: [5, -5],
          y: [-5, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
        }}
        className="text-page2 font-extrabold text-7xl sm:text-8xl md:text-9xl tracking-wider"
      >
        Cub
      </motion.span>
      <span>
        <motion.svg
          animate={{
            rotate: [0, 360],
            y: [0, -10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-[3.7rem] sm:w-[4.5rem] md:w-[6rem] fill-page4 mt-2"
        >
          <motion.path
            className="stroke-page2"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M11.223 2.432c.284-.158.425-.237.575-.267a1 1 0 01.403 0c.15.03.292.11.576.267l7.4 4.11c.3.167.45.25.558.369a1 1 0 01.215.364c.05.153.05.324.05.667v8.117c0 .342 0 .514-.05.666a.999.999 0 01-.215.364c-.109.119-.258.202-.558.368l-7.4 4.111c-.284.158-.425.237-.575.268a.998.998 0 01-.403 0c-.15-.031-.292-.11-.576-.268l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 01-.215-.364C3 16.573 3 16.401 3 16.06V7.942c0-.343 0-.514.05-.667a1 1 0 01.215-.364c.109-.119.258-.202.558-.368l7.4-4.111z"
          ></motion.path>
        </motion.svg>
      </span>
      <motion.span
        animate={{
          rotate: [-10, 10],
          y: [0, 15],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
        }}
        className="text-page2 font-extrabold text-7xl sm:text-8xl md:text-9xl tracking-wider"
      >
        ur
      </motion.span>
    </div>
  </div>
);

const primaryLeafSVG = (
  <motion.svg
    animate={{
      rotate: [20, -20, 5, -100, 15, -20],
      y: [-600, 600],
      x: [10, 50, 0, 100, 300],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 8.2,
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-20 absolute fill-page4"
  >
    <path d="M21.929 2.926a1 1 0 00-.851-.855c-.342-.05-8.4-1.114-13.744 4.232A9.092 9.092 0 005.385 17.2l-3.052 3.053a1 1 0 001.415 1.414L6.8 18.615a9.825 9.825 0 004.261 1.014 9.194 9.194 0 006.639-2.963 13.853 13.853 0 002.985-4.523 1 1 0 00-.216-1.091L18.414 9H20.8a1 1 0 00.988-.844 19.743 19.743 0 00.141-5.23zM19.921 7H16a1 1 0 00-.707 1.707l3.273 3.273a11.683 11.683 0 01-2.283 3.272A7.064 7.064 0 018.3 17.114l4.4-4.4a1 1 0 10-1.418-1.414l-4.4 4.4a7.064 7.064 0 011.866-7.983c3.733-3.733 9.233-3.84 11.263-3.73A18.954 18.954 0 0119.921 7z"></path>
  </motion.svg>
);

const secondaryLeafSVG = (
  <motion.svg
    animate={{
      rotate: [50, 20, -15, 100, 150, -50],
      y: [-600, 700],
      x: [20, 60, 10, 70, 200],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 10.7,
      delay: 7,
    }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-20 absolute"
  >
    <g>
      <g>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="stroke-page5"
          d="M6.83 17.08c7.07 4.243 12.727-1.414 12.02-12.02C8.244 4.353 2.587 10.01 6.83 17.08zm0 0c-.001 0 0 0 0 0zm0 0L5 18.91m1.83-1.828l3.827-3.829"
        ></path>
      </g>
    </g>
  </motion.svg>
);

const nextLeafSVG = (
  <motion.svg
    animate={{
      rotate: [-20, 20, 15, -50, 15],
      y: [-700, 900],
      x: [100, 20, 60, 10, 200, 100, 50, 30],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 15.5,
      delay: 2.5,
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-20 absolute fill-page2"
  >
    <path d="M21.929 2.926a1 1 0 00-.851-.855c-.342-.05-8.4-1.114-13.744 4.232A9.092 9.092 0 005.385 17.2l-3.052 3.053a1 1 0 001.415 1.414L6.8 18.615a9.825 9.825 0 004.261 1.014 9.194 9.194 0 006.639-2.963 13.853 13.853 0 002.985-4.523 1 1 0 00-.216-1.091L18.414 9H20.8a1 1 0 00.988-.844 19.743 19.743 0 00.141-5.23zM19.921 7H16a1 1 0 00-.707 1.707l3.273 3.273a11.683 11.683 0 01-2.283 3.272A7.064 7.064 0 018.3 17.114l4.4-4.4a1 1 0 10-1.418-1.414l-4.4 4.4a7.064 7.064 0 011.866-7.983c3.733-3.733 9.233-3.84 11.263-3.73A18.954 18.954 0 0119.921 7z"></path>
  </motion.svg>
);

const commonLeafSVG = (
  <motion.svg
    animate={{
      rotate: [50, 100, 150, -20],
      y: [-560, 950],
      x: [120, 10, 70, 50, 20, 50],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 17.7,
      delay: 4,
    }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-20 absolute"
  >
    <g>
      <g>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="stroke-page4"
          d="M6.83 17.08c7.07 4.243 12.727-1.414 12.02-12.02C8.244 4.353 2.587 10.01 6.83 17.08zm0 0c-.001 0 0 0 0 0zm0 0L5 18.91m1.83-1.828l3.827-3.829"
        ></path>
      </g>
    </g>
  </motion.svg>
);

const lastLeafSVG = (
  <motion.svg
    animate={{
      rotate: [-20, 20, -5, 100, -15, 200],
      y: [-600, 700],
      x: [10, 0, 100, -10],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 19.2,
      delay: 1,
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-20 absolute fill-page3"
  >
    <path d="M21.929 2.926a1 1 0 00-.851-.855c-.342-.05-8.4-1.114-13.744 4.232A9.092 9.092 0 005.385 17.2l-3.052 3.053a1 1 0 001.415 1.414L6.8 18.615a9.825 9.825 0 004.261 1.014 9.194 9.194 0 006.639-2.963 13.853 13.853 0 002.985-4.523 1 1 0 00-.216-1.091L18.414 9H20.8a1 1 0 00.988-.844 19.743 19.743 0 00.141-5.23zM19.921 7H16a1 1 0 00-.707 1.707l3.273 3.273a11.683 11.683 0 01-2.283 3.272A7.064 7.064 0 018.3 17.114l4.4-4.4a1 1 0 10-1.418-1.414l-4.4 4.4a7.064 7.064 0 011.866-7.983c3.733-3.733 9.233-3.84 11.263-3.73A18.954 18.954 0 0119.921 7z"></path>
  </motion.svg>
);

export { reflectorSVG, desktopReflectorSVG, cubourSVG, primaryLeafSVG, secondaryLeafSVG, nextLeafSVG, commonLeafSVG, lastLeafSVG };
