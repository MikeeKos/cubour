import React from "react";
import Image from "next/image";

function Teleport() {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-page3 md:bg-page4">
        <div className="w-full h-[40%] md:h-[30%]">
          <div className="w-full h-full flex justify-center items-center gap-4">
            <svg
              className="w-14 h-14 md:w-16 md:h-16 fill-pageMenu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -40 40 47.5"
            >
              <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-6v-34h4v34H0m13-5v-16h4v16h-4m23 5v-28h4v28h-4m-9-3v-10h4v10h-4"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-14 h-14 md:w-16 md:h-16 fill-pageMenu"
            >
              <path
                fill="#0F0F0F"
                className="fill-pageMenu"
                d="M16.315 16.668a1 1 0 101.415 1.414l4.665-4.665a2 2 0 000-2.829L17.727 5.92a1 1 0 10-1.415 1.414L19.978 11H2a1 1 0 100 2h17.983l-3.668 3.668z"
              ></path>
            </svg>
            <svg
              className="w-14 h-14 md:w-16 md:h-16 fill-pageMenu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -32.834 40 40.33"
            >
              <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-9c16-11 14-21 5-21 5-5 11-3 13 3S7-15 11-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21-5-5-11-3-13 3s11 12 8 18h10"></path>
            </svg>
          </div>
        </div>
        <div className="w-full h-[70%] flex justify-center">
          <div className="w-[80%] h-[90%]">
            <div className="w-full h-full font-page text-2xl font-extrabold tracking-wide relative">
              <div className="w-full h-[75%] md:h-full absolute bg-page2 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px]">
                <Image
                  src={"/teleport.jpg"}
                  alt="Image"
                  placeholder="blur"
                  height={568}
                  width={854}
                  blurDataURL={"/teleport.jpg"}
                  className="w-full h-full object-cover absolute hue-rotate-[-20deg] saturate-[1.2] object-right brightness-[10%] opacity-95"
                />
              </div>
              <div className="w-full h-full absolute flex items-start mt-7 md:mt-0 md:items-center text-center">
                <div className="font-page text-xs sm:text-base md:text-lg text-page2 font-extrabold tracking-wide leading-4 sm:leading-6 md:leading-5 lg:leading-7">
                  <span className="bg-page1 text-pageMenu">
                    teleportation block
                  </span>{" "}
                  - instantly moves a pawn from the entry portal to the exit
                  portal. It can be used multiple times.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Teleport;
