import React from "react";

function CreateMapText() {
  return (
    <div className="relative w-full h-[15rem] bg-page4 shadow-[inset_-24px_-16px_200px_#46464620] overflow-hidden">
      <div className="w-full h-full absolute flex items-start justify-end top-7 right-7">
        <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
      </div>
      <div className="w-full h-full absolute flex items-start justify-end top-4 right-4">
        <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
      </div>
      <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7">
        <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
      </div>
      <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4">
        <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
      </div>
      <div className="w-full h-full absolute rotate-[36deg] flex items-center top-36 md:top-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-24 h-24 md:w-16 md:h-16 animate-scale-swing-rotate"
        >
          <path
            className="stroke-pageMenu"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-6-3V4l6 3m0 13l6-3m-6 3V7m6 10l6 3V7l-6-3m0 13V4M9 7l6-3"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-24 h-24 md:w-16 md:h-16 animate-scale-swing-rotate top-3"
        >
          <path
            className="stroke-page1"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-6-3V4l6 3m0 13l6-3m-6 3V7m6 10l6 3V7l-6-3m0 13V4M9 7l6-3"
          ></path>
        </svg>
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
      <div className="absolute w-full h-full flex flex-col items-center justify-center">
        <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] mb-2 p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
          create
        </span>
        <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
          map
        </span>
      </div>
      <div className="w-full h-full absolute shadow-[inset_-24px_-16px_80px_#46464620]"></div>
    </div>
  );
}

export default CreateMapText;
