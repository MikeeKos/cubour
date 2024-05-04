import React, { useContext } from "react";
import UniversalVisitBlock from "../universal-visit";
import GameContext from "../../../../../store/game-context";

function SecondVisitBlock(props) {
  const gameCtx = useContext(GameContext);

  return (
    <UniversalVisitBlock
      {...props}
      targetCount={gameCtx.secondVisitBlockCount}
      increaseFunction={() => {
        gameCtx.setSecondVisitBlockCount((prev) => prev + 1);
      }}
      targetLimit={5}
    ></UniversalVisitBlock>
  );
}

export default SecondVisitBlock;
