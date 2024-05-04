import React, { useState } from "react";
import Link from "next/link";

const loadingSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="w-full h-full fill-pageMenu animate-spin"
    viewBox="0 0 16 16"
  >
    <g
      className="fill-pageMenu"
      fill="#000"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        className="fill-pageMenu"
        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
        opacity="0.2"
      ></path>
      <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
    </g>
  </svg>
);

function TesseractLevels(props) {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingLevel, setLoadingLevel] = useState();

  const checkIsCompleted = (level) => {
    if (props.levelCompleted === "notLoggedIn") {
      return false;
    }
    const thisLevel = props.levelCompleted.find((el) => {
      return el.level === level; // Dodanie return tutaj jest kluczowe
    });
    return thisLevel.isCompleted;
  };

  const loadingHandler = (level) => {
    setShowLoading(true);
    setLoadingLevel(level);
    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  };

  const higherDimCube = (color, level, levelNumber) => {
    return (
      <Link href={`/play/${level}`} onClick={() => loadingHandler(levelNumber)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
          className="w-12 h-12 animate-levitate hover:cursor-pointer"
        >
          <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
          <path fill="#fff" fillOpacity="0.01" d="M48 0H0v48h48V0z"></path>
          <path
            className={color}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M30 27l-6 17M18 27l6 17M18 27h12M41 34l-11-7M41 14L30 27M41 14l-17 3M30 27l-6-10M24 4v13M7 14l17 3M18 27l6-10M18 27L7 14M18 27L7 34M41.32 14L24 4 6.68 14v20L24 44l17.32-10V14z"
          ></path>
        </svg>
      </Link>
    );
  };

  return (
    <React.Fragment>
      <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
        <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-end relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1 relative">
                {showLoading && loadingLevel === 7 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {higherDimCube("stroke-page1", props.level7.id)}
                <Link
                  href={`/play/${props.level7.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(7)}
                >
                  lvl 7
                </Link>
              </div>
              {checkIsCompleted(7) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 row-span-1 flex justify-end"></div>
            <div className="col-span-1 row-span-1 flex justify-end relative">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1 relative">
                {showLoading && loadingLevel === 9 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {higherDimCube("stroke-page1", props.level9.id)}
                <Link
                  href={`/play/${props.level9.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(9)}
                >
                  lvl 9
                </Link>
              </div>
              {checkIsCompleted(9) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-start"></div>
            <div className="col-span-1 row-span-1 flex justify-start relative">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1 relative">
                {showLoading && loadingLevel === 8 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {higherDimCube("stroke-page1", props.level8.id)}
                <Link
                  href={`/play/${props.level8.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(8)}
                >
                  lvl 8
                </Link>
              </div>
              {checkIsCompleted(8) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 row-span-1 flex justify-start"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TesseractLevels;
