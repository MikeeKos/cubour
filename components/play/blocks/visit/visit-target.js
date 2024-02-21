// import React, { useContext, useEffect, useState } from "react";
// import Block from "../block";
// import GameContext from "../../../../store/game-context";

// function VisitTargetBlock(props) {
//   const gameCtx = useContext(GameContext);
//   const [isLocked, setIsLocked] = useState(true);

//   useEffect(() => {
//     if (props.isSelected) {
//       if (gameCtx.firstVisitBlockCount < 5) {
//         gameCtx.setIsGameOver(true);
//       }
//     }
//     if (gameCtx.firstVisitBlockCount === 5) {
//       setIsLocked(false);
//     }
//   }, [gameCtx]);

//   const lockSVG = (
//     <svg
//       className="w-[80%] h-[80%] flex items-center justify-center"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//     >
//       <path
//         className="stroke-page1"
//         stroke="#000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2.5"
//         d="M12 14.5v2m-5-6.471C7.471 10 8.053 10 8.8 10h6.4c.747 0 1.329 0 1.8.029m-10 0c-.588.036-1.006.117-1.362.298a3 3 0 00-1.311 1.311C4 12.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 21 7.12 21 8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311c-.356-.181-.774-.262-1.362-.298m-10 0V8a5 5 0 0110 0v2.029"
//       ></path>
//     </svg>
//   );

//   const unlockSVG = (
//     <svg
//       className="w-[80%] h-[80%] fill-page1 stroke-page1 flex items-center justify-center opacity-50"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="#000"
//       strokeWidth="1.4"
//     >
//       <path
//         className="fill-page1"
//         fill="#0F0F0F"
//         d="M13.5 16.585a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
//       ></path>
//       <path
//         className="fill-page1"
//         fill="#0F0F0F"
//         fillRule="evenodd"
//         d="M6.334 10c-.124-.356-.239-.73-.336-1.113-.303-1.203-.453-2.593-.1-3.913.364-1.365 1.249-2.577 2.845-3.379 1.597-.802 3.097-.788 4.41-.266 1.27.505 2.295 1.455 3.079 2.416.198.244.385.492.559.74.29.412.187.974-.209 1.286-.47.37-1.155.24-1.505-.246a10.77 10.77 0 00-.395-.516c-.673-.825-1.44-1.492-2.268-1.822-.785-.312-1.689-.35-2.773.195-1.084.545-1.593 1.293-1.811 2.109-.23.861-.153 1.874.108 2.907.142.563.331 1.107.533 1.602H18a3 3 0 013 3v7a3 3 0 01-3 3H6a3 3 0 01-3-3v-7a3 3 0 013-3h.334zM19 13a1 1 0 00-1-1H6a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1v-7z"
//         clipRule="evenodd"
//       ></path>
//     </svg>
//   );

//   const design = (
//     <div className="w-full h-full flex items-center justify-center">
//       <div
//         className={`w-[80%] h-[80%] ${
//           isLocked && "bg-pageMenu"
//         } flex items-center justify-center rounded-md`}
//       >
//         {isLocked ? (
//           <div className="flex items-center justify-center">{lockSVG}</div>
//         ) : (
//           <div className="flex items-center justify-center">{unlockSVG}</div>
//         )}
//       </div>
//     </div>
//   );

//   return <Block {...props} styleChange={design}></Block>;
// }

// export default VisitTargetBlock;

// targetCount={gameCtx.firstVisitBlockCount}
// targetLimit={5}

import React, { useContext } from "react";
import GameContext from "../../../../store/game-context";
import UniversalVisitTargetBlock from "./universal-visit-target";

function VisitTargetBlock(props) {
  const gameCtx = useContext(GameContext);
  return (
    <UniversalVisitTargetBlock
      {...props}
      targetCount={gameCtx.firstVisitBlockCount}
      targetLimit={5}
    ></UniversalVisitTargetBlock>
  );
}

export default VisitTargetBlock;
