// import React, { useContext, useEffect, useState } from "react";
// import Block from "../block";
// import SpecialBlockContext from "../../../../store/special-block-context";
// import GameContext from "../../../../store/game-context";

// function CircleSpecial(props) {
//   const currentSpecialGame = `${props.i}-${props.j}`;
//   const specialBlockCtx = useContext(SpecialBlockContext);
//   const gameCtx = useContext(GameContext);
//   const [shouldBeVisible, setShouldBeVisible] = useState(true);
//   const [arrIndex, setArrIndex] = useState(0);
//   const [pressedKey, setPressedKey] = useState("");

//   const checkValidInput = (direction) => {
//     if (arrowsArray[arrIndex] === direction) {
//       const nextIndex = (arrIndex + 1) % arrowsArray.length;
//       setArrIndex(nextIndex);
//       if (
//         nextIndex === 0 &&
//         arrIndex + 1 === arrowsArray.length &&
//         props.isSelected
//       ) {
//         specialBlockCtx.setCompletedSpecialGames((prev) => [
//           ...prev,
//           currentSpecialGame,
//         ]);
//         specialBlockCtx.setSpecialMode(false);
//       }
//     } else {
//       gameCtx.setIsGameOver(true);
//     }
//   };

//   useEffect(() => {
//     if (!specialBlockCtx.specialMode) {
//       return;
//     }

//     if (!props.isSelected) {
//       return;
//     }

//     const handleKeyDown = (e) => {
//       let key = "";
//       switch (e.key) {
//         case "ArrowUp":
//         case "w":
//           key = "up";
//           checkValidInput("up");
//           gameCtx.setKeyPressedCount();
//           break;
//         case "ArrowDown":
//         case "s":
//           key = "down";
//           checkValidInput("down");
//           gameCtx.setKeyPressedCount();
//           break;
//         case "ArrowLeft":
//         case "a":
//           key = "left";
//           checkValidInput("left");
//           gameCtx.setKeyPressedCount();
//           break;
//         case "ArrowRight":
//         case "d":
//           key = "right";
//           checkValidInput("right");
//           gameCtx.setKeyPressedCount();
//           break;
//         default:
//           return;
//       }
//       setPressedKey(key);
//       const timeoutId = setTimeout(() => setPressedKey(""), 100);
//       return () => clearTimeout(timeoutId);
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [
//     specialBlockCtx.specialMode,
//     arrIndex,
//     gameCtx.keyPressedCount,
//     pressedKey,
//     setPressedKey,
//   ]);

//   const arrowsArray = [
//     "up",
//     "right",
//     "down",
//     "left",
//     "up",
//     "right",
//     "down",
//     "left",
//     "up",
//     "right",
//   ];

//   const giftSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="w-full h-full"
//     >
//       <path
//         className="fill-pageMenu"
//         fill="#0F1729"
//         fillRule="evenodd"
//         d="M10.762 1.526A3.625 3.625 0 006.438 7c-.437 0-.769.003-1.064.05a4 4 0 00-3.325 3.324C2 10.687 2 11.04 2 11.517v.15c0 .305 0 .567.037.802A3 3 0 004 14.83v1.383c0 .819 0 1.494.046 2.044.047.571.149 1.096.404 1.588a4 4 0 001.706 1.706c.492.255 1.017.357 1.588.404.55.046 1.225.046 2.044.046h4.424c.819 0 1.494 0 2.044-.046.572-.047 1.096-.149 1.588-.404a4 4 0 001.706-1.706c.255-.492.357-1.017.404-1.588.046-.55.046-1.225.046-2.044V14.83a3 3 0 001.963-2.36c.037-.235.037-.497.037-.802v-.15c0-.476 0-.83-.05-1.143a4 4 0 00-3.324-3.325C18.33 7.003 17.999 7 17.562 7a3.62 3.62 0 00.618-2.832A3.625 3.625 0 0012 2.375a3.626 3.626 0 00-1.238-.85zM11 9H6.6c-.596 0-.777.003-.913.025a2 2 0 00-1.662 1.662c-.022.136-.025.317-.025.913 0 .41.003.498.012.556a1 1 0 00.832.832c.058.009.146.012.556.012H11V9zm2 4V9h4.4c.596 0 .777.003.913.025a2 2 0 011.662 1.662c.022.136.025.317.025.913 0 .41-.003.498-.012.556a1 1 0 01-.831.832c-.059.009-.147.012-.557.012H13zm-2 2H6v1.17c0 .871 0 1.463.039 1.92.037.446.104.673.186.832a2 2 0 00.853.853c.159.082.386.15.832.186C8.367 20 8.959 20 9.83 20H11v-5zm2 5v-5h5v1.17c0 .871 0 1.463-.039 1.92-.037.446-.104.673-.186.832a2 2 0 01-.853.853c-.159.082-.386.15-.831.186-.458.038-1.05.039-1.92.039H13zm1.625-13.5H13V4.875A1.625 1.625 0 1114.625 6.5zm-3.899-2.528c.179.267.274.582.274.903V6.5H9.375a1.625 1.625 0 111.351-2.528z"
//         clipRule="evenodd"
//       ></path>
//     </svg>
//   );

//   const rightSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="w-full h-full"
//     >
//       <path
//         className="stroke-pageMenu"
//         stroke="#000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M6 12h12m0 0l-5-5m5 5l-5 5"
//       ></path>
//     </svg>
//   );

//   const leftSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="w-full h-full"
//     >
//       <path
//         className="stroke-pageMenu"
//         stroke="#000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M6 12h12M6 12l5-5m-5 5l5 5"
//       ></path>
//     </svg>
//   );

//   const upSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="w-full h-full"
//     >
//       <path
//         className="stroke-pageMenu"
//         stroke="#000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M12 6v12m0-12l-5 5m5-5l5 5"
//       ></path>
//     </svg>
//   );

//   const downSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       className="w-full h-full"
//     >
//       <path
//         className="stroke-pageMenu"
//         stroke="#000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M12 6v12m0 0l-5-5m5 5l5-5"
//       ></path>
//     </svg>
//   );

//   function renderArrowSVG(arrow) {
//     if (props.isSelected) {
//       switch (arrow) {
//         case "right":
//           return <div className="col-span-1 row-span-1">{rightSVG}</div>;
//         case "left":
//           return <div className="col-span-1 row-span-1">{leftSVG}</div>;
//         case "up":
//           return <div className="col-span-1 row-span-1">{upSVG}</div>;
//         case "down":
//           return <div className="col-span-1 row-span-1">{downSVG}</div>;
//         default:
//           return null;
//       }
//     }
//   }

//   function renderArrow(arrow, svg) {
//     const scaleClass = pressedKey === arrow ? "scale-75" : "scale-90";
//     const animationClass = `transition-transform duration-100 transform ${scaleClass}`;
//     return (
//       <div
//         className={`${animationClass} h-[100%] aspect-square bg-pageButton border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.3)_0px_7px_22px] rounded-lg`}
//       >
//         {svg}
//       </div>
//     );
//   }

//   const game = (
//     <div className="w-full h-full bg-pageMenu">
//       <div className="w-full h-full">
//         <div className="w-full h-[30%] bg-pageMenu px-3 pt-3 md:px-5 md:pt-5">
//           <div className="relative w-full h-full bg-page2 p-1 md:p-1 lg:p-2 overflow-hidden flex items-center justify-center">
//             <div className="absolute z-50 w-full h-full grid grid-cols-10 grid-rows-1">
//               {arrowsArray.map((arrow, index) => (
//                 <React.Fragment key={index}>
//                   {renderArrowSVG(arrow)}
//                 </React.Fragment>
//               ))}
//             </div>
//             <div className="absolute w-full h-full grid grid-cols-10 grid-rows-1 opacity-50">
//               {arrowsArray.map((_, index) => {
//                 if (index == arrIndex) {
//                   return (
//                     <div
//                       key={index}
//                       className="col-span-1 row-span-1 bg-page3"
//                     ></div>
//                   );
//                 } else {
//                   return (
//                     <div key={index} className="col-span-1 row-span-1"></div>
//                   );
//                 }
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[70%] bg-pageMenu p-3 md:p-5">
//           <div className="w-full h-full bg-page2 grid grid-rows-2 py-[5%]">
//             <div className="row-span-1 flex justify-center">
//               {renderArrow("up", upSVG)}
//             </div>
//             <div className="row-span-1 flex justify-center">
//               {renderArrow("left", leftSVG)}
//               {renderArrow("down", downSVG)}
//               {renderArrow("right", rightSVG)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const isCompleted =
//     specialBlockCtx.completedSpecialGames.includes(currentSpecialGame);

//   useEffect(() => {
//     if (props.isSelected) {
//       if (isCompleted) {
//         specialBlockCtx.setSpecialMode(false);
//       } else {
//         specialBlockCtx.setSpecialMode(true);
//         specialBlockCtx.setGameComponent(game);
//       }
//       setShouldBeVisible(false);
//     } else {
//       setShouldBeVisible(true);
//     }
//   }, [gameCtx.pointPosition, gameCtx.keyPressedCount]);

//   const design = isCompleted ? (
//     <div>{shouldBeVisible && <div></div>}</div>
//   ) : (
//     <div>{shouldBeVisible && <div>{giftSVG}</div>}</div>
//   );

//   return <Block {...props} styleChange={design}></Block>;
// }

// export default CircleSpecial;

import React, { useState } from "react";
import UniversalSpecial from "./universal-special";
import { rightSVG, leftSVG, upSVG, downSVG } from "../../../../SVG/arrows";

function CircleSpecial(props) {
  const arrowsArray = [
    "up",
    "right",
    "down",
    "left",
    "up",
    "right",
    "down",
    "left",
    "up",
    "right",
  ];

  const [pressedKey, setPressedKey] = useState("");

  const pressedKeyFunc = (data) => {
    setPressedKey(data);
  };

  function renderArrow(arrow, svg) {
    const scaleClass = pressedKey === arrow ? "scale-[70%]" : "scale-90";
    const animationClass = `transition-transform duration-100 transform ${scaleClass}`;
    return (
      <div
        className={`${animationClass} h-[100%] aspect-square bg-pageButton border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.3)_0px_7px_22px] rounded-lg`}
      >
        {svg}
      </div>
    );
  }

  const arrowStyle = (
    <div className="w-full h-full bg-page2 grid grid-rows-2 py-[5%]">
      <div className="row-span-1 flex justify-center">
        {renderArrow("up", upSVG)}
      </div>
      <div className="row-span-1 flex justify-center">
        {renderArrow("left", leftSVG)}
        {renderArrow("down", downSVG)}
        {renderArrow("right", rightSVG)}
      </div>
    </div>
  );

  return (
    <UniversalSpecial
      {...props}
      arrowsArray={arrowsArray}
      arrowStyle={arrowStyle}
      func={pressedKeyFunc}
    ></UniversalSpecial>
  );
}

export default CircleSpecial;
