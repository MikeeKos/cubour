import React, { useState } from "react";

function GridCountTile(props) {
  const changeGridCountHandler = () => {
    props.func(props.i)
  }

  return (
    <React.Fragment>
      <div className="row-span-1 col-span-1 py-1 px-5 sm:py-1 sm:px-10 md:py-1 md:px-1 lg:py-1 lg:px-5 hover:scale-110 active:scale-90 hover:cursor-pointer duration-100">
        <div className={`${props.i !== props.currentSelected && "opacity-50"} hover:opacity-100 w-full h-full bg-pageMenu rounded-xl flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px]`} onClick={changeGridCountHandler}>
          <span className="animate-growUp rounded-xl font-page text-2xl md:text-xl lg:text-xl text-page1 font-extrabold tracking-widest">
            {props.i}x{props.i}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GridCountTile;
