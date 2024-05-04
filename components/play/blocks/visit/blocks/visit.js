import React, { useContext } from "react";
import UniversalVisitBlock from "../universal-visit";
import GameContext from "../../../../../store/game-context";

function VisitBlock(props) {
  const gameCtx = useContext(GameContext);

  return (
    <UniversalVisitBlock
      {...props}
      targetCount={gameCtx.firstVisitBlockCount}
      increaseFunction={() => {
        gameCtx.setFirstVisitBlockCount((prev) => prev + 1);
      }}
      targetLimit={3}
    ></UniversalVisitBlock>
  );
}

export default VisitBlock;
