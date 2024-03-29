import React, { useState } from "react";
import GridCountTile from "./grid-count-tile";

function GridCount(props) {
  const [gridDimensions, setGridDimensions] = useState(8);

  const pullData = (i) => {
    setGridDimensions(i);
    props.func(i)
  }

  return (
    <React.Fragment>
      <div className="relative w-full h-full shadow-[inset_-12px_-8px_40px_#46464620] bg-page3">
        <div className="absolute top-5 left-4">
          <span className="shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-2xl bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest">
            Dimensions
          </span>
        </div>
        <div className="w-full h-full px-10 py-5 md:px-5 md:py-5 lg:p-10">
          <div className="w-full h-full grid grid-rows-6">
            <div className="row-span-5 pt-10 lg:pt-5 pb-2">
              <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                <GridCountTile func={pullData} i={8} currentSelected={gridDimensions}/>
                <GridCountTile func={pullData} i={10} currentSelected={gridDimensions}/>
                <GridCountTile func={pullData} i={12} currentSelected={gridDimensions}/>
                <GridCountTile func={pullData} i={14} currentSelected={gridDimensions}/>
              </div>
            </div>
            <div className="row-span-1 text-center">
              <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                Set the dimensions of the map
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GridCount;
