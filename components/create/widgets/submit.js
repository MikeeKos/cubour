import React from "react";

function Submit({session, submitHandler}) {
  return (
    <React.Fragment>
      <div className="w-full h-[14rem] lg:h-[10rem] bg-page3 overflow-hidden">
        {session && (
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-[50%] sm:w-[40%] md:w-[90%] lg:w-[40%] h-[30%] md:h-[25%] bg-pageMenu z-40 rounded-xl flex items-center justify-center">
                <span
                  className="hover:scale-125 active:scale-75 duration-100 hover:cursor-pointer w-full h-full shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-3xl bg-pageMenu md:text-2xl lg:text-2xl text-page1 font-extrabold tracking-widest text-center flex items-center justify-center"
                  onClick={submitHandler}
                >
                  submit
                </span>
              </div>
            </div>
            <div className="absolute w-full h-full overflow-hidden">
              <div className="w-full h-full absolute flex items-start justify-end top-7 right-7 overflow-hidden">
                <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-40 duration-300"></div>
              </div>
              <div className="w-full h-full absolute flex items-start justify-end top-4 right-4 overflow-hidden">
                <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-40 duration-300"></div>
              </div>
              <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7 overflow-hidden">
                <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-40 duration-300"></div>
              </div>
              <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4 overflow-hidden">
                <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-40 duration-300"></div>
              </div>
            </div>
          </div>
        )}
        {!session && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[65%] h-[40%] sm:h-[30%] md:h-[50%] bg-page2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-4 border-pageMenu flex items-center justify-center">
              <div className="font-page text-sm font-extrabold tracking-widest text-center text-pageMenu animate-pulse p-2 flex items-center justify-center">
                You must be logged in to submit this form
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Submit;
