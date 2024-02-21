import React, { useContext, useEffect, useState } from "react";
import Block from "../block";
import GameContext from "../../../../store/game-context";

// targetCount={gameCtx.firstVisitBlockCount}
// increaseFunction={() => {gameCtx.setFirstVisitBlockCount((prev) => prev + 1)}}
// targetLimit={5}

function UniversalVisitBlock(props) {
  const gameCtx = useContext(GameContext);
  const [shouldBeVisible, setShouldBeVisible] = useState(true);

  useEffect(() => {
    if (props.isSelected) {
      if (props.targetCount < props.targetLimit) {
        props.increaseFunction();
      }
      setShouldBeVisible(false);
    } else {
      setShouldBeVisible(true);
    }
  }, [gameCtx.pointPosition]);

  const design = (
    <div className="relative w-full h-full flex items-center justify-center">
      {shouldBeVisible && (
        <span className="font-page text-sm sm:text-xl md:text-2xl lg:text-4xl text-pageMenu font-extrabold">
          {props.targetCount === props.targetLimit ? (
            <div className="relative flex items-center justify-center w-full h-full opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-[80%] h-[80%] flex items-center justify-center"
              >
                <path
                className="stroke-page1"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 12.611L8.923 17.5 20 6.5"
                ></path>
              </svg>
            </div>
          ) : (
            <span>{props.targetCount}</span>
          )}
        </span>
      )}
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default UniversalVisitBlock;
