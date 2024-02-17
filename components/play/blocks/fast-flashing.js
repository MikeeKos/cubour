import Block from "./block";
import { useState, useEffect, useContext } from "react";
import GameContext from "../../../store/game-context";

function FastFlashingBlock(props) {
  const gameCtx = useContext(GameContext);

  const [shouldKill, setShouldKill] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldKill((prevShouldKill) => !prevShouldKill);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (props.isSelected && shouldKill) {
      gameCtx.setIsGameOver(true);
    }
  }, [gameCtx, shouldKill]);

  const skullSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-full h-full"
    >
      <path
        className="fill-page1"
        fill="#000"
        fillRule="evenodd"
        d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const isEven = (props.i + props.j) % 2 !== 0;
  const fillColor = isEven ? "bg-page2" : "bg-page4";
  const flashClass = shouldKill
    ? "absolute w-full h-full bg-pageMenu sm:scale-[2]"
    : `absolute w-full h-full ${fillColor}`;

  const design = (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={flashClass}></div>
      {shouldKill && <div className="absolute z-50">{skullSVG}</div>}
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default FastFlashingBlock;
