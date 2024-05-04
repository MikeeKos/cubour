import React from "react";
import {
  upSVG,
  downSVG,
  rightSVG,
  leftSVG,
  giftSVG,
} from "../../../SVG/arrows";

function Special() {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-page2">
        <div className="w-full h-[20%] flex items-center justify-center mt-1 md:mt-0">
          <div className="flex justify-center items-center flex-row font-page text-xl sm:text-4xl md:text-xl lg:text-3xl text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7 bg-page1 p-1 md:p-3">
            <div>special blocks</div>
            <div className="w-10 h-10 md:w-12 md:h-12 ml-2 bg-page4">
              {giftSVG}
            </div>
          </div>
        </div>
        <div className="w-full h-[80%]">
          <div className="w-full h-[20%] font-page font-extrabold text-xs sm:text-sm lg:text-lg pt-2 md:pt-0 lg:pt-2 text-center">
            After stepping on this block, you must successfully complete the
            mini-game
          </div>
          <div className="w-full h-[80%]">
            <div className="w-full h-full grid grid-cols-3">
              <div className="col-span-1 p-2">
                <div className="w-full h-full bg-pageMenu">
                  <div className="w-full h-0 opacity-0 md:opacity-100 md:h-[40%] relative">
                    <div className="w-full h-full absolute text-page1 font-page font-extrabold text-center text-sm mt-1 md:mt-2 tracking-wide">
                      Mini-game: circle around the arrows
                    </div>
                  </div>
                  <div className="w-full h-full md:h-[60%] flex justify-center items-center relative">
                    <div className="absolute w-[60%] sm:h-[80%] sm:w-auto aspect-square md:w-[80%] md:h-auto bg-page2 p-1 animate-pulse">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full h-[70%] grid grid-cols-3 grid-rows-2">
                          <div className="col-span-3 row-span-1">
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-1/3 h-full border-2 border-pageMenu bg-page3">
                                {upSVG}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                            {leftSVG}
                          </div>
                          <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                            {downSVG}
                          </div>
                          <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                            {rightSVG}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 p-2">
                <div className="w-full h-full bg-pageMenu">
                  <div className="w-full h-0 opacity-0 md:opacity-100 md:h-[40%] relative">
                    <div className="w-full h-full absolute text-page1 font-page font-extrabold text-center text-sm mt-1 md:mt-2 tracking-wide">
                      Mini-game: alternate clicking up and down
                    </div>
                  </div>
                  <div className="w-full h-full md:h-[60%] flex justify-center items-center relative">
                    <div className="absolute w-[60%] sm:h-[80%] sm:w-auto aspect-square md:w-[80%] md:h-auto bg-page2 p-1 animate-pulse">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full h-[90%] grid grid-cols-1 grid-rows-2">
                          <div className="col-span-1 row-span-1 flex justify-center">
                            <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                              {upSVG}
                            </div>
                          </div>
                          <div className="col-span-1 row-span-1 flex justify-center">
                            <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                              {downSVG}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 p-2">
                <div className="w-full h-full bg-pageMenu">
                  <div className="w-full h-0 opacity-0 md:opacity-100 md:h-[40%] relative">
                    <div className="w-full h-full absolute text-page1 font-page font-extrabold text-center text-sm mt-1 md:mt-2 tracking-wide">
                      Mini-Game: alternate clicking right and left
                    </div>
                  </div>
                  <div className="w-full h-full md:h-[60%] flex justify-center items-center relative">
                    <div className="absolute w-[60%] sm:h-[80%] sm:w-auto aspect-square md:w-[80%] md:h-auto bg-page2 p-1 animate-pulse">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full h-1/2 bg-pageMenu grid grid-cols-2 grid-rows-1">
                          <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                            {leftSVG}
                          </div>
                          <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
                            {rightSVG}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Special;
