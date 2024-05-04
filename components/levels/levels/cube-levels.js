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

function CubeLevels(props) {
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

  const cubeDesignSVG = (color, level, levelNumber) => {
    return (
      <Link href={`/play/${level}`} onClick={() => loadingHandler(levelNumber)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-12 h-12 animate-levitate hover:cursor-pointer"
        >
          <path
            className={color}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.387 7.157L12 12 3.61 7.15M12 12v9"
          ></path>
          <path
            className={color}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 2.577a2 2 0 012 0l6.66 3.846a2 2 0 011 1.732v7.69a2 2 0 01-1 1.732L13 21.423a2 2 0 01-2 0l-6.66-3.846a2 2 0 01-1-1.732v-7.69a2 2 0 011-1.732L11 2.577z"
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
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[90%] h-full"></div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-end relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1 relative">
                {showLoading && loadingLevel === 5 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {cubeDesignSVG("stroke-page2", props.level5.id, 5)}
                <Link
                  href={`/play/${props.level5.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(5)}
                >
                  lvl 5
                </Link>
              </div>
              {checkIsCompleted(5) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[75%] h-full"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-start relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1 relative">
                {showLoading && loadingLevel === 4 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {cubeDesignSVG("stroke-page2", props.level4.id, 4)}
                <Link
                  href={`/play/${props.level4.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(4)}
                >
                  lvl 4
                </Link>
              </div>
              {checkIsCompleted(4) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[80%] h-full"></div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1 relative">
                {showLoading && loadingLevel === 6 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {cubeDesignSVG("stroke-page2", props.level6.id, 6)}
                <Link
                  href={`/play/${props.level6.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(6)}
                >
                  lvl 6
                </Link>
              </div>
              {checkIsCompleted(6) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CubeLevels;
