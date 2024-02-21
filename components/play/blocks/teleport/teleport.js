import React, { useContext, useEffect } from "react";
import Block from "../block";
import GameContext from "../../../../store/game-context";

function TeleportBlock(props) {
  const gameCtx = useContext(GameContext);

  useEffect(() => {
    if (props.isSelected) {
      gameCtx.setIsTeleporting(true);
      gameCtx.setPointPosition(gameCtx.firstTeleportEndPoint);
    }
  }, [gameCtx]);

  const design = (
    <div className="w-full h-full flex items-center justify-center relative">
      <svg
        className="absolute w-[80%] h-[80%] fill-pageMenu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -40 40 47.5"
      >
        <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-6v-34h4v34H0m13-5v-16h4v16h-4m23 5v-28h4v28h-4m-9-3v-10h4v10h-4"></path>
      </svg>
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default TeleportBlock;
