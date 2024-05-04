import React from "react";

function Unlock() {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-page2 relative">
        <div className="w-full h-full absolute flex items-end justify-end">
          <div className="w-[50%] h-[25%] md:h-[20%] lg:h-[25%] bg-page4 rounded-ss-2xl pl-6 border-t-4 border-l-4 border-pageMenu ">
            <div className="w-full h-full font-page font-extrabold flex items-center justify-center -rotate-12 animate-scale-swing-rotate text-2xl md:text-xl lg:text-3xl">
              1...2...3...
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex items-center justify-center">
          <div className="font-page text-xl sm:text-4xl md:text-xl lg:text-3xl text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
            Unlock block
          </div>
          <div className="">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 ml-2 bg-pageMenu rounded-md p-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="stroke-page1"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M12 14.5v2m-5-6.471C7.471 10 8.053 10 8.8 10h6.4c.747 0 1.329 0 1.8.029m-10 0c-.588.036-1.006.117-1.362.298a3 3 0 00-1.311 1.311C4 12.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 21 7.12 21 8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311c-.356-.181-.774-.262-1.362-.298m-10 0V8a5 5 0 0110 0v2.029"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-full h-[70%] flex justify-center">
          <div className="w-[80%] h-full font-page text-xs sm:text-base md:text-lg text-pageMenu font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
            Enter the square specified number of times with a pawn to unlock the
            passage. Once unlocked, the passage remains open. Pay attention to
            which passage is being opened.
          </div>
        </div>
      </div>
      ,
    </React.Fragment>
  );
}

export default Unlock;
