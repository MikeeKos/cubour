import React, { useContext, useEffect } from "react";
import Block from "../block";
import GameContext from "../../../../store/game-context";

function SecondTeleportBlock(props) {
  const gameCtx = useContext(GameContext);

  useEffect(() => {
    if (props.isSelected) {
      gameCtx.setIsTeleporting(true);
      gameCtx.setPointPosition(gameCtx.secondTeleportEndPoint);
    }
  }, [gameCtx]);

  const design = (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="absolute w-[80%] h-[80%] fill-pageMenu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -35 40 42"
      >
        <path d="M0 0l20 7 20-7-20-7L0 0m0-2v-28h4v26L0-2m10-3l4-2v-16h-4m0 0v18m17-1v-29h4v30l-4-1m13 4v-21h-4v19l4 2"></path>
      </svg>
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default SecondTeleportBlock;
