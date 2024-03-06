import { useEffect, useContext, useState } from "react";
import Block from "./block";
import GameContext from "../../../store/game-context";
import { checkeredSVG, trophySVG } from "../../../SVG/game-grid";

function EndBlock(props) {
  const gameCtx = useContext(GameContext);
  const [shouldBeVisible, setShouldBeVisible] = useState(true);
  const [showFinishTimer, setShowFinishTimer] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (props.isSelected) {
      setShowFinishTimer(true);
      timeoutId = setTimeout(() => {
        if (!gameCtx.isGameOver) {
          gameCtx.setWin(true);
        }
      }, 500);
    }

    return () => {
      if (timeoutId) {
        setShowFinishTimer(false)
        clearTimeout(timeoutId);
      }
    };
  }, [props.isSelected, gameCtx.isGameOver, gameCtx.setWin, showFinishTimer, setShowFinishTimer]);

  useEffect(() => {
    if (props.isSelected) {
      setShouldBeVisible(false);
    } else {
      setShouldBeVisible(true);
    }
  }, [gameCtx]);

  const design = (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-full h-full">{checkeredSVG}</div>
      {shouldBeVisible && (
        <div className="absolute w-full h-full">{trophySVG}</div>
      )}
      {showFinishTimer && (
        <div className="animate-growUp w-[60%] h-full bg-pageMenu"></div>
      )}
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default EndBlock;
