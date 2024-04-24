import React from "react";
import Link from "next/link";

function SquareLevels(props) {
  console.log("square levels");
  console.log(props);

  return (
    <React.Fragment>
      <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
        <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                <Link
                  href={`/play/${props.level1.id}`}
                  className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"
                ></Link>
                <Link
                  href={`/play/${props.level1.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                >
                  lvl 1
                </Link>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-end"></div>
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                <Link
                  href={`/play/${props.level3.id}`} className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"></Link>
                <Link
                  href={`/play/${props.level3.id}`} className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                  lvl 3
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-start"></div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                <Link
                  href={`/play/${props.level2.id}`}
                  className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"
                ></Link>
                <Link
                  href={`/play/${props.level2.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                >
                  lvl 2
                </Link>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SquareLevels;
