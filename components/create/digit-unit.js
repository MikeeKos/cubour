import React from "react";

function DigitUnit(props) {
  return (
    <React.Fragment>
      <div className="col-span-1 row-span-1 rounded-xl flex flex-col justify-between">
        <div className="w-full h-[20%]"></div>
        <div className="w-full h-[55%] flex items-center">
          <div className="w-full h-[60%] bg-pageMenu rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <span className="h-full w-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-sm md:text-xs lg:text-sm  text-page1 font-extrabold tracking-widest">
              {props.digitUnit}
            </span>
          </div>
        </div>
        <div className="w-full h-[20%]"></div>
      </div>
    </React.Fragment>
  );
}

export default DigitUnit;
