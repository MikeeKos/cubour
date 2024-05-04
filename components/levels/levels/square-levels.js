import React, { useState } from "react";
import Link from "next/link";
import { loadingSVG } from "../../../SVG/levels";

function SquareLevels(props) {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingLevel, setLoadingLevel] = useState();

  const checkIsCompleted = (level) => {
    if (props.levelCompleted === "notLoggedIn") {
      return false;
    }
    const thisLevel = props.levelCompleted.find((el) => {
      return el.level === level;
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

  return (
    <React.Fragment>
      <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
        <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-end relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1 relative">
                {showLoading && loadingLevel === 1 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                <Link
                  href={`/play/${props.level1.id}`}
                  className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"
                  onClick={() => loadingHandler(1)}
                ></Link>
                <Link
                  href={`/play/${props.level1.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(1)}
                >
                  lvl 1
                </Link>
              </div>
              {checkIsCompleted(1) && (
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
                {showLoading && loadingLevel === 3 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                <Link
                  href={`/play/${props.level3.id}`}
                  className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"
                  onClick={() => loadingHandler(3)}
                ></Link>
                <Link
                  href={`/play/${props.level3.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(3)}
                >
                  lvl 3
                </Link>
              </div>
              {checkIsCompleted(3) && (
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
                {showLoading && loadingLevel === 2 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                <Link
                  href={`/play/${props.level2.id}`}
                  className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"
                  onClick={() => loadingHandler(2)}
                ></Link>
                <Link
                  href={`/play/${props.level2.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(2)}
                >
                  lvl 2
                </Link>
              </div>
              {checkIsCompleted(2) && (
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

export default SquareLevels;
