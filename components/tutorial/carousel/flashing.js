import React from "react";

const flashingBlockSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-[90%] h-[90%]"
  >
    <path
      className="fill-page1"
      fill="#000"
      fillRule="evenodd"
      d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function Flashing() {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-page3 md:bg-page4">
        <div className="w-full h-[30%] flex items-center justify-center">
          <div className="font-page text-xl sm:text-4xl md:text-xl lg:text-3xl text-page1 font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7 bg-pageMenu p-3">
            flasing block
          </div>
        </div>
        <div className="w-full h-[70%]">
          <div className="w-full h-full grid grid-rows-4">
            <div className="row-span-1 mx-4 flex flex-row">
              <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
                {flashingBlockSVG}
              </div>
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                  {" "}
                  - block that flashes every{" "}
                  <span className="text-page1 underline">500</span> milliseconds
                </div>
              </div>
            </div>
            <div className="row-span-1 mx-4 flex flex-row">
              <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
                {flashingBlockSVG}
              </div>
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                  {" "}
                  - block that flashes every{" "}
                  <span className="text-page1 underline">750</span> milliseconds
                </div>
              </div>
            </div>
            <div className="row-span-1 mx-4 flex flex-row">
              <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
                {flashingBlockSVG}
              </div>
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                  {" "}
                  - block that flashes every{" "}
                  <span className="text-page1 underline">1000</span>{" "}
                  milliseconds
                </div>
              </div>
            </div>
            <div className="row-span-1 mx-4 flex flex-row">
              <div className="h-[90%] aspect-square bg-pageMenu flex items-center justify-center scale-100 md:scale-90">
                {flashingBlockSVG}
              </div>
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full text-xs sm:text-lg md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-wide pl-2 mt-4 md:mt-0">
                  {" "}
                  - block that flashes every{" "}
                  <span className="text-page1 underline">1250</span>{" "}
                  milliseconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Flashing;
