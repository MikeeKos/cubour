import React, { useState } from "react";

function Digit(props) {
  const updateDigitHandling = (dir, index) => {
    if (props.isMaxSix) {
      props.func(dir, index, true);
    } else {
      props.func(dir, index, false);
    }
  };

  return (
    <React.Fragment>
      <div className="col-span-1 row-span-1 rounded-xl flex flex-col justify-between">
        <div
          className="w-full h-[20%] bg-page3 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer hover:scale-105 duration-100 active:scale-95"
          onClick={() => updateDigitHandling("add", props.index)}
        >
          <div className="w-full h-full flex items-center justify-center">
            {props.directionIndicator}
          </div>
        </div>
        <div className="w-full h-[55%] bg-page1 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <span className="h-full w-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-2xl md:text-lg lg:text-xl  text-pageMenu font-extrabold tracking-widest">
            {props.timeLimit[props.index]}
          </span>
        </div>
        <div
          className="w-full h-[20%] bg-page3 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer hover:scale-105 duration-100 active:scale-95"
          onClick={() => updateDigitHandling("sub", props.index)}
        >
          <div className="w-full h-full rotate-180 flex items-center justify-center">
            {props.directionIndicator}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Digit;
