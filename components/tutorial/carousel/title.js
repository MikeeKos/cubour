import React from "react";
import { cubourSVG } from "../../../SVG/homepage";
import { timerSVG } from "../../../SVG/game-grid";

function Title() {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-page2 relative">
        <div className="w-full h-[5rem] md:h-[7rem] absolute bg-pageMenu mt-2 shadow-[rgba(0,_0,_0,_0.1)_0px_30px_90px]">
          <div className="w-full h-full flex items-center justify-center flex-row scale-50 md:scale-[32%] lg:scale-[45%]">
            {cubourSVG}
          </div>
        </div>
        <div className="w-full h-full absolute grid grid-cols-12">
          <div className="col-span-2 bg-page2"></div>
          <div className="col-span-8"></div>
          <div className="col-span-2 bg-page2"></div>
        </div>
        <div className="w-full h-full absolute">
          <div className="w-full h-full mt-24 md:mt-32 flex justify-center">
            <div className="w-[86%] h-[60%]">
              <div className="font-page text-xs sm:text-base md:text-lg text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
                Your task is to navigate the pawn to the finish as quickly as
                possible. Touching any border ends the game. Time running out
                also ends the game. Each element is designed to slow you down as
                much as possible.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute opacity-0 lg:opacity-100">
          <div className="absolute right-20 bottom-5 lg:bottom-6 animate-scale-swing-rotate">
            <div className="scale-150">{timerSVG}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Title;
