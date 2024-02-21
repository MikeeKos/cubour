import React, { useContext, useEffect, useState } from "react";
import Block from "../block";
import GameContext from "../../../../store/game-context";

function TeleportEndPointBlock(props) {
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
    <div className="w-full h-full flex items-center justify-center">
      {shouldBeVisible && (
        <svg
          className="absolute w-[80%] h-[80%] fill-pageMenu animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -32.834 40 40.33"
        >
          <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-9c16-11 14-21 5-21 5-5 11-3 13 3S7-15 11-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21-5-5-11-3-13 3s11 12 8 18h10"></path>
        </svg>
      )}
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default TeleportEndPointBlock;
