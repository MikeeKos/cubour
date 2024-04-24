import React from "react";
import Link from "next/link";

function TesseractLevels(props) {
  const higherDimCube = (color, level) => {
    return (
      <Link href={`/play/${level}`}>
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
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                {higherDimCube("stroke-page1", props.level7.id)}
                <Link
                  href={`/play/${props.level7.id}`} className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 7
                </Link>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-end"></div>
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                {higherDimCube("stroke-page1", props.level9.id)}
                <Link
                  href={`/play/${props.level9.id}`} className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 9
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-start"></div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                {higherDimCube("stroke-page1", props.level8.id)}
                <Link
                  href={`/play/${props.level8.id}`}an className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 8
                </Link>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TesseractLevels;
