import React, { useContext, useEffect, useState } from "react";
import Block from "../block";
import SpecialBlockContext from "../../../../store/special-block-context";
import GameContext from "../../../../store/game-context";

function RightSpecial(props) {
  const specialBlockCtx = useContext(SpecialBlockContext);
  const gameCtx = useContext(GameContext);
  const [shouldBeVisible, setShouldBeVisible] = useState(true);

  const game = (
    <div className="w-full h-full bg-pageMenu">
      <div className="w-full h-full">
        <div className="w-full h-[30%] bg-pageMenu px-3 pt-3 md:px-5 md:pt-5">
          <div className="w-full h-full bg-page2"></div>
        </div>
        <div className="w-full h-[70%] bg-pageMenu p-3 md:p-5">
          <div className="w-full h-full bg-page2 flex items-center justify-center py-[15%]">
            <div className=" w-full h-full flex justify-evenly">
              <div className=" h-full aspect-square bg-pageMenu shadow-[rgba(0,_0,_0,_0.3)_0px_7px_22px]"></div>
              <div className=" h-full aspect-square bg-pageMenu shadow-[rgba(0,_0,_0,_0.3)_0px_7px_22px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (props.isSelected) {
      specialBlockCtx.setSpecialMode(true);
      specialBlockCtx.setGameComponent(game);
      setShouldBeVisible(false);
    } else {
      setShouldBeVisible(true);
    }
  }, [gameCtx.pointPosition]);

  const design = <div>{shouldBeVisible && <div>S</div>}</div>;

  return <Block {...props} styleChange={design}></Block>;
}

export default RightSpecial;
