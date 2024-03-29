import React from "react";

function BorederText() {
  return (
    <div className="w-full h-[15rem] bg-page3 shadow-[inset_-24px_-16px_200px_#46464620]">
      <div className="w-full h-[3rem] flex items-center justify-start ps-4 pt-6">
        <span className="shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-2xl bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest">
          Borders
        </span>
      </div>
      <div className="w-full h-[12rem]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-32">
            <div className="w-full h-16 flex justify-center">
              <div className="bg-page2 w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px]">
                <div className="w-full h-full absolute">
                  <div className="flex items-center justify-end mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      data-name="Line Color"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 md:w-5 md:h-5 lg:w-7 lg:h-7"
                    >
                      <path
                        className="stroke-pageMenu"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M3.1 4.46l7.21 15.92A1.17 1.17 0 0012.5 20l1.26-6.23L20 12.5a1.17 1.17 0 00.39-2.19L4.46 3.1A1 1 0 003.1 4.46z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-pageMenu absolute -top-1 -left-1"></div>
                <div className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-pageMenu absolute -top-1 -right-1"></div>
                <div className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-pageMenu absolute -bottom-1 -left-1"></div>
                <div className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-pageMenu absolute -bottom-1 -right-1"></div>
                <div className="w-full h-2 absolute top-2 flex items-center justify-center">
                  <div className="w-[65%] h-full bg-pageMenu animate-pulse"></div>
                </div>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-12 h-12"
                >
                  <path
                    className="stroke-pageMenu"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 12h16m0 0l-4-4m4 4l-4 4"
                  ></path>
                </svg>
              </div>
              <div className="bg-page2 w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px]">
                <div className="w-10 h-3 md:w-8 md:h-2 lg:w-10 lg:h-3 bg-pageMenu absolute -top-1 -left-1"></div>
                <div className="w-10 h-3 md:w-8 md:h-2 lg:w-10 lg:h-3 bg-pageMenu absolute -top-1 -right-1"></div>
                <div className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-pageMenu absolute -bottom-1 -left-1"></div>
                <div className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-pageMenu absolute -bottom-1 -right-1"></div>
              </div>
            </div>
            <div className="w-full h-16 flex items-center justify-center">
              <div className="w-[70%] lg:w-[60%] h-full text-center pt-5">
                <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                  hover and click to add or remove a border
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorederText;
