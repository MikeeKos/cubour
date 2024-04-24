import React from "react";

function KnifeLevels(props) {
  const knifeSVG = (color) => {
    return (
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
    );
  };

  return (
    <React.Fragment>
      <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
        <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                {knifeSVG("stroke-page1")}
                <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 13
                </span>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-end"></div>
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                {knifeSVG("stroke-page1")}
                <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 15
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-start"></div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                {knifeSVG("stroke-page1")}
                <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 14
                </span>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KnifeLevels;
