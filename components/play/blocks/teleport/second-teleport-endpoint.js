import React, { useContext, useEffect, useState } from "react";
import Block from "../block";
import GameContext from "../../../../store/game-context";

function SecondTeleportEndPointBlock(props) {
  const gameCtx = useContext(GameContext);
  const [shouldBeVisible, setShouldBeVisible] = useState(true);

  useEffect(() => {
    if (props.isSelected) {
      gameCtx.setIsTeleporting(false);
      setShouldBeVisible(false);
    } else {
      setShouldBeVisible(true);
    }
  }, [gameCtx]);

  const design = (
    <div className="relative w-full h-full flex items-center justify-center">
      {shouldBeVisible && (
        <svg
          className="absolute w-[80%] h-[80%] fill-pageMenu animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -33 40 40"
        >
          <path d="M0 0l20 7 20-7-20-7L0 0m0-9c16-11 14-21 5-21l9-3 4 6L8-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21l-9-3-4 6L32-9h8"></path>
        </svg>
      )}
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default SecondTeleportEndPointBlock;
