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

function KnifeLevels(props) {
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

  const knifeSVG = (color, level, levelNumber) => {
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
            d="M14.725 11.275L16 12.5l-5.987 5.322A12.979 12.979 0 013 21l.794-1.456c.826-1.514 1.238-2.27 1.713-2.986.42-.636.878-1.247 1.369-1.83.552-.657 1.162-1.267 2.38-2.485L12 9.498m-.5-.5l5.95-5.948A1.945 1.945 0 0120.2 5.8l-.358.358a1.166 1.166 0 01-.825.342H18l-2 2v.174c0 .49 0 .734-.055.964-.05.204-.13.4-.24.579-.123.201-.296.374-.642.72l-.813.813-2.75-2.752z"
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
                {showLoading && loadingLevel === 13 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {knifeSVG("stroke-page1", props.level13.id)}
                <Link
                  href={`/play/${props.level13.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(13)}
                >
                  lvl 13
                </Link>
              </div>
              {checkIsCompleted(13) && (
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
                {showLoading && loadingLevel === 15 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {knifeSVG("stroke-page1", props.level15.id)}
                <Link
                  href={`/play/${props.level15.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(15)}
                >
                  lvl 15
                </Link>
              </div>
              {checkIsCompleted(15) && (
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
                {showLoading && loadingLevel === 14 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {knifeSVG("stroke-page1", props.level14.id)}
                <Link
                  href={`/play/${props.level14.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(14)}
                >
                  lvl 14
                </Link>
              </div>
              {checkIsCompleted(14) && (
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

export default KnifeLevels;
