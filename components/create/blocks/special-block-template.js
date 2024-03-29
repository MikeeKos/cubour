import React from "react";
import { rightSVG, leftSVG, upSVG, downSVG } from "../../../SVG/arrows";

function SpecialBlockTemplate(props) {
  let elementInside;

  switch (props.id) {
    case "b":
      elementInside = (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-1/2 bg-pageMenu grid grid-cols-2 grid-rows-1">
            <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
              {leftSVG}
            </div>
            <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
              {rightSVG}
            </div>
          </div>
        </div>
      );
      break;
    case "c":
      elementInside = (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-[70%] grid grid-cols-3 grid-rows-2">
            <div className="col-span-3 row-span-1">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-1/3 h-full border-2 border-pageMenu bg-page3">
                  {upSVG}
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
              {leftSVG}
            </div>
            <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
              {downSVG}
            </div>
            <div className="col-span-1 row-span-1 bg-page3 border-2 border-pageMenu">
              {rightSVG}
            </div>
          </div>
        </div>
      );
      break;
    case "u":
      elementInside = (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-[90%] grid grid-cols-1 grid-rows-2">
            <div className="col-span-1 row-span-1 flex justify-center">
              <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                {upSVG}
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-center">
              <div className="h-full aspect-square border-2 border-pageMenu bg-page3">
                {downSVG}
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      elementInside = <div className="w-full h-full bg-pageMenu"></div>;
  }

  return (
    <div className="w-full h-[12rem] lg:h-[10rem]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-[10rem]">
          <div className="w-full h-[5rem] flex items-center justify-center">
            <div
              className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
              draggable="true"
              id={props.id}
              onDragStart={props.handleDragStart}
            >
              {elementInside}
            </div>
            <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
              <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                x
              </span>
            </div>
            <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -64 640 640"
                className="w-20 h-20"
              >
                <path
                  className="fill-pageMenu"
                  d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full h-[5rem] text-center pt-3">
            <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
              Mini-game: alternate clicking right and left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialBlockTemplate;
