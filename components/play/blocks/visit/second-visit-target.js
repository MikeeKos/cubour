import React, { useContext } from "react";
import GameContext from "../../../../store/game-context";
import UniversalVisitTargetBlock from "./universal-visit-target";

function SecondVisitTargetBlock(props) {
  const gameCtx = useContext(GameContext);
  return (
    <UniversalVisitTargetBlock
      {...props}
      targetCount={gameCtx.secondVisitBlockCount}
      targetLimit={5}
    ></UniversalVisitTargetBlock>
  );
}

export default SecondVisitTargetBlock;
