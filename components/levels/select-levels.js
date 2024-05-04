import Image from "next/image";
import React, { useEffect, useContext } from "react";
import { trophySVG } from "../../SVG/game-grid";
import SquareLevels from "./levels/square-levels";
import CubeLevels from "./levels/cube-levels";
import TesseractLevels from "./levels/tesseract-levels";
import FireLevels from "./levels/fire-levels";
import KnifeLevels from "./levels/knife-levels";
import SkullLevels from "./levels/skull-levels";
import GameContext from "../../store/game-context";
import useMeasure from "react-use-measure";
import SideAction from "../ui/side-action";

function SelectLevels(props) {
  const [ref, { height, width }] = useMeasure();
  const gameCtx = useContext(GameContext);

  useEffect(() => {
    gameCtx.resetGameContext();
  }, []);

  function findIdByLevel(level) {
    const seed = props.seeds.find((seed) => seed.level === level);
    return seed;
  }

  return (
    <div
      ref={ref}
      className="w-full h-screen relative bg-page4 overflow-y-scroll"
    >
      <div className="absolute w-full h-full overflow-hidden">
        <SideAction position={2} theme={"light"} goBackPath={"/"} />
      </div>
      <div
        className={`absolute w-full ${height > 710 ? "h-full" : "h-[43rem]"}`}
      >
        <div className="w-full h-full bg-pageMenu">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute w-full h-full flex justify-center items-center z-30 shadow-[inset_-12px_-8px_40px_#46464620]">
              <div className="w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-[90%] bg-page4 opacity-75 rounded-xl">
                <div className="w-full h-full overflow-y-scroll"></div>
              </div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center z-40 shadow-[inset_-12px_-8px_40px_#46464620]">
              <div className="w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-[90%] rounded-xl overflow-hidden">
                <div className="w-full h-full overflow-y-scroll">
                  <div className="w-full h-[15rem]">
                    <div className="relative w-full h-[15rem]">
                      <div className="w-full h-full absolute flex items-start justify-end top-7 right-7 opacity-0 sm:opacity-100">
                        <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                      </div>
                      <div className="w-full h-full absolute flex items-start justify-end top-4 right-4 opacity-0 sm:opacity-100">
                        <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                      </div>
                      <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7 opacity-0 sm:opacity-100">
                        <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                      </div>
                      <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4 opacity-0 sm:opacity-100">
                        <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                      </div>
                      <div className="w-full h-full absolute flex items-end justify-end pe-2 pb-2 lg:pe-5 lg:pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-28 h-28 md:w-14 md:h-14 lg:w-20 lg:h-20 rotate-180 animate-pulse"
                        >
                          <path
                            className="stroke-page1"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 3v18M7 3l4 4M7 3L3 7m11-4h7m-7 6h5m-5 6h3m-3 6h1"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-full h-full absolute">
                        <div className="absolute w-16 h-16 top-3 left-2 md:left-7 lg:top-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-16 h-16 animate-scale-swing-rotate"
                          >
                            <path
                              className="stroke-pageMenu"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 7.5l7.608-4.28c.143-.08.214-.12.29-.136a.5.5 0 01.204 0c.076.016.147.056.29.137L20 7.5m-16 0v8.532c0 .17 0 .256.025.332a.5.5 0 00.106.181c.054.06.128.1.277.184L12 21M4 7.5l8 4m0 9.5l7.592-4.27c.149-.084.223-.126.277-.185a.5.5 0 00.106-.181c.025-.076.025-.162.025-.332V7.5M12 21v-9.5m8-4l-8 4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute w-full h-full flex flex-col items-center justify-center">
                        <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] mb-2 p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
                          select
                        </span>
                        <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
                          level
                        </span>
                      </div>
                      <div className="w-full h-full absolute shadow-[inset_-24px_-16px_80px_#46464620]"></div>
                    </div>
                  </div>
                  <SquareLevels
                    level1={findIdByLevel("1")}
                    level2={findIdByLevel("2")}
                    level3={findIdByLevel("3")}
                    levelCompleted={props.levelCompleted}
                  />
                  <CubeLevels
                    level4={findIdByLevel("4")}
                    level5={findIdByLevel("5")}
                    level6={findIdByLevel("6")}
                    levelCompleted={props.levelCompleted}
                  />
                  <TesseractLevels
                    level7={findIdByLevel("7")}
                    level8={findIdByLevel("8")}
                    level9={findIdByLevel("9")}
                    levelCompleted={props.levelCompleted}
                  />
                  <FireLevels
                    level10={findIdByLevel("10")}
                    level11={findIdByLevel("11")}
                    level12={findIdByLevel("12")}
                    levelCompleted={props.levelCompleted}
                  />
                  <KnifeLevels
                    level13={findIdByLevel("13")}
                    level14={findIdByLevel("14")}
                    level15={findIdByLevel("15")}
                    levelCompleted={props.levelCompleted}
                  />
                  <SkullLevels
                    level16={findIdByLevel("16")}
                    level17={findIdByLevel("17")}
                    level18={findIdByLevel("18")}
                    levelCompleted={props.levelCompleted}
                  />
                  <div className="w-full h-[5rem] grid grid-cols-2 grid-rows-1">
                    <div className="col-span-1 row-span-1 border-r-4 border-pageMenu"></div>
                    <div className="col-span-1 row-span-1 border-l-4 border-pageMenu"></div>
                  </div>
                  <div className="w-full h-[8rem] flex items-center justify-center">
                    <div className="w-20 h-20 animate-scale-swing-rotate">
                      {trophySVG}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={"/stage.jpg"}
              height={3967}
              width={5950}
              alt="Stage"
              placeholder="blur"
              blurDataURL={"/stage.jpg"}
              className="w-full h-full object-cover overflow-hidden absolute saturate-[0.8] brightness-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectLevels;
