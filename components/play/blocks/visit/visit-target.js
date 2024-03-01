import React, { useContext } from "react";
import GameContext from "../../../../store/game-context";
import UniversalVisitTargetBlock from "./universal-visit-target";

function VisitTargetBlock(props) {
  const gameCtx = useContext(GameContext);
  return (
    <UniversalVisitTargetBlock
      {...props}
      targetCount={gameCtx.firstVisitBlockCount}
      targetLimit={3}
    ></UniversalVisitTargetBlock>
  );
}

export default VisitTargetBlock;
