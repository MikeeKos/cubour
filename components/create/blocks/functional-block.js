import React, { useContext } from "react";
import GameContext from "../../../store/game-context";
import {
  startDesignSVG,
  checkeredSVG,
  trophySVG,
  unlockSVG
} from "../../../SVG/game-grid";

function FunctionalBlock(props) {
  const gameCtx = useContext(GameContext);

  let elementInside;

  switch (props.id) {
    case "s":
      elementInside = (
        <div className="w-full h-full bg-page2">{startDesignSVG}</div>
      );
      break;
    case "e":
      elementInside = (
        <div className="relative w-full h-full bg-page2">
          <div className="w-full h-full absolute">{checkeredSVG}</div>
          <div className="w-full h-full absolute">{trophySVG}</div>
        </div>
      );
      break;
    case "t":
      elementInside = (
        <div className="w-full h-full bg-page2 flex items-center justify-center">
          <svg
            className="absolute w-[80%] h-[80%] fill-pageMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -40 40 47.5"
          >
            <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-6v-34h4v34H0m13-5v-16h4v16h-4m23 5v-28h4v28h-4m-9-3v-10h4v10h-4"></path>
          </svg>
        </div>
      );
      break;
    case "T":
      elementInside = (
        <div className="w-full h-full bg-page2 flex items-center justify-center">
          <svg
            className="absolute w-[80%] h-[80%] fill-pageMenu animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32.834 40 40.33"
          >
            <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-9c16-11 14-21 5-21 5-5 11-3 13 3S7-15 11-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21-5-5-11-3-13 3s11 12 8 18h10"></path>
          </svg>
        </div>
      );
      break;
    case "o":
      elementInside = (
        <div className="w-full h-full bg-page2 flex items-center justify-center">
          <svg
            className="absolute w-[80%] h-[80%] fill-pageMenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -35 40 42"
          >
            <path d="M0 0l20 7 20-7-20-7L0 0m0-2v-28h4v26L0-2m10-3l4-2v-16h-4m0 0v18m17-1v-29h4v30l-4-1m13 4v-21h-4v19l4 2"></path>
          </svg>
        </div>
      );
      break;
    case "O":
      elementInside = (
        <div className="w-full h-full bg-page2 flex items-center justify-center">
          <svg
            className="absolute w-[80%] h-[80%] fill-pageMenu animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -33 40 40"
          >
            <path d="M0 0l20 7 20-7-20-7L0 0m0-9c16-11 14-21 5-21l9-3 4 6L8-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21l-9-3-4 6L32-9h8"></path>
          </svg>
        </div>
      );
      break;
    case "v":
      elementInside = (
        <div className="w-full h-full bg-page2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-7.5 0 32 32"
            className="w-10 h-10 absolute -top-1 -right-1"
          >
            <path
              className="fill-pageMenu"
              d="M16.52 12.72l-4.84-4.84c-.16-.16-.44-.28-.68-.24s-.48.16-.6.36l-3.52 5.16-3.72.84c-.28.08-.52.28-.64.6-.08.28 0 .6.2.84l2.52 2.52-5 5c-.32.32-.32.84 0 1.2.16.16.36.24.6.24s.44-.08.6-.24l5.04-5.04L9 21.64c.16.16.36.24.6.24.08 0 .16 0 .24-.04.28-.08.52-.32.6-.64l.84-3.72L16.44 14c.2-.16.32-.36.36-.6-.04-.28-.08-.52-.28-.68zm-6.44 3.6c-.16.12-.28.32-.36.52l-.6 2.56L5 15.28l2.56-.56c.2-.04.4-.16.52-.36L11.2 9.8l3.4 3.4-4.52 3.12z"
            ></path>
          </svg>
          <span className="font-page font-extrabold text-xl md:text-3xl text-pageMenu bottom-0 absolute ml-1">
            3
          </span>
        </div>
      );
      break;
    case "V":
      elementInside = (
        <div className="w-full h-full bg-page2 relative">
          <div className="relative w-full h-full bg-pageMenu flex items-center justify-center">
            {unlockSVG}
            <div className="absolute w-full h-full font-page text-sm text-page1 font-extrabold ml-2">
              3
            </div>
          </div>
        </div>
      );
      break;
    case "w":
      elementInside = (
        <div className="w-full h-full bg-page2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-7.5 0 32 32"
            className="w-10 h-10 absolute -top-1 -right-1"
          >
            <path
              className="fill-pageMenu"
              d="M16.52 12.72l-4.84-4.84c-.16-.16-.44-.28-.68-.24s-.48.16-.6.36l-3.52 5.16-3.72.84c-.28.08-.52.28-.64.6-.08.28 0 .6.2.84l2.52 2.52-5 5c-.32.32-.32.84 0 1.2.16.16.36.24.6.24s.44-.08.6-.24l5.04-5.04L9 21.64c.16.16.36.24.6.24.08 0 .16 0 .24-.04.28-.08.52-.32.6-.64l.84-3.72L16.44 14c.2-.16.32-.36.36-.6-.04-.28-.08-.52-.28-.68zm-6.44 3.6c-.16.12-.28.32-.36.52l-.6 2.56L5 15.28l2.56-.56c.2-.04.4-.16.52-.36L11.2 9.8l3.4 3.4-4.52 3.12z"
            ></path>
          </svg>
          <span className="font-page font-extrabold text-xl md:text-3xl text-pageMenu bottom-0 absolute ml-1">
            5
          </span>
        </div>
      );
      break;
    case "W":
      elementInside = (
        <div className="w-full h-full bg-page2 relative">
          <div className="relative w-full h-full bg-pageMenu flex items-center justify-center">
            {unlockSVG}
            <div className="absolute w-full h-full font-page text-sm text-page1 font-extrabold ml-2">
              5
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
          <div
            className={`relative w-full h-[5rem] flex items-center justify-center ${
              gameCtx.itemBoundaries.find((item) => item.type === props.id)
                .avaiable == 0
                ? "opacity-25"
                : "opacity-100"
            }`}
          >
            {gameCtx.itemBoundaries.find((item) => item.type === props.id)
              .avaiable == 0 && (
              <div className="w-full h-full z-50 absolute"></div>
            )}
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
              <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                {
                  gameCtx.itemBoundaries.find((item) => item.type === props.id)
                    .avaiable
                }
              </span>
            </div>
          </div>
          <div className="w-full h-[5rem] text-center pt-3">
            <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
              {props.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunctionalBlock;
