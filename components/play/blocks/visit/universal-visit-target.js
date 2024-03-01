import React, { useContext, useEffect, useState } from "react";
import Block from "../block";
import GameContext from "../../../../store/game-context";
import { lockSVG, unlockSVG } from "../../../../SVG/game-grid";

function UniversalVisitTargetBlock(props) {
  const gameCtx = useContext(GameContext);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (props.isSelected) {
      if (props.targetCount < props.targetLimit) {
        gameCtx.setIsGameOver(true);
      }
    }
    if (props.targetCount === props.targetLimit) {
      setIsLocked(false);
    }
  }, [gameCtx]);

  const design = (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className={`w-[80%] h-[80%] ${
          isLocked && "bg-pageMenu"
        } flex items-center justify-center rounded-md`}
      >
        {isLocked ? (
          <div className="flex items-center justify-center">{lockSVG}</div>
        ) : (
          <div className="flex items-center justify-center">{unlockSVG}</div>
        )}
      </div>
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default UniversalVisitTargetBlock;
