import React, { useEffect, useContext } from "react";
import GameContext from "../../../store/game-context";
import SpecialBlockContext from "../../../store/special-block-context";
import {
  cornerFixSVG,
  checkeredSVG,
  trophySVG,
  unlockSVG,
} from "../../../SVG/game-grid";
import { startDesignSVG } from "../../../SVG/game-grid";
import { leftSVG, rightSVG, upSVG, downSVG } from "../../../SVG/arrows";

function CreateBorderBlock(props) {
  const gameCtx = useContext(GameContext);
  const specialBlockCtx = useContext(SpecialBlockContext);
  const isEven = (props.i + props.j) % 2 !== 0;
  const bgColorClass = isEven ? "bg-page2" : "bg-page4";

  let elementInside;

  // useEffect(() => {

  // }, [])
  switch (props.type) {
    case "n":
      elementInside = <div className="w-full h-full"></div>;
      break;
    case "f":
      elementInside = (
        <div className="w-full h-full bg-pageMenu animate-blink-1250">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              className="fill-page1"
              fill="#000"
              fillRule="evenodd"
              d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      );
      break;
    case "F":
      elementInside = (
        <div className="w-full h-full bg-pageMenu animate-blink-1000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              className="fill-page1"
              fill="#000"
              fillRule="evenodd"
              d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      );
      break;
    case "x":
      elementInside = (
        <div className="w-full h-full bg-pageMenu animate-blink-750">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              className="fill-page1"
              fill="#000"
              fillRule="evenodd"
              d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      );
      break;
    case "X":
      elementInside = (
        <div className="w-full h-full bg-pageMenu animate-blink-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              className="fill-page1"
              fill="#000"
              fillRule="evenodd"
              d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      );
      break;
    case "s":
      elementInside = <div className="w-full h-full">{startDesignSVG}</div>;
      break;
    case "e":
      elementInside = (
        <div className="relative w-full h-full">
          <div className="w-full h-full absolute">{checkeredSVG}</div>
          <div className="w-full h-full absolute">{trophySVG}</div>
        </div>
      );
      break;
    case "t":
      elementInside = (
        <div className="w-full h-full flex items-center justify-center">
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
        <div className="w-full h-full flex items-center justify-center">
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
        <div className="w-full h-full flex items-center justify-center">
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
        <div className="w-full h-full flex items-center justify-center">
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
        <div className="w-full h-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-7.5 0 32 32"
            className="w-8 h-8 absolute -top-2 -right-2"
          >
            <path
              className="fill-pageMenu"
              d="M16.52 12.72l-4.84-4.84c-.16-.16-.44-.28-.68-.24s-.48.16-.6.36l-3.52 5.16-3.72.84c-.28.08-.52.28-.64.6-.08.28 0 .6.2.84l2.52 2.52-5 5c-.32.32-.32.84 0 1.2.16.16.36.24.6.24s.44-.08.6-.24l5.04-5.04L9 21.64c.16.16.36.24.6.24.08 0 .16 0 .24-.04.28-.08.52-.32.6-.64l.84-3.72L16.44 14c.2-.16.32-.36.36-.6-.04-.28-.08-.52-.28-.68zm-6.44 3.6c-.16.12-.28.32-.36.52l-.6 2.56L5 15.28l2.56-.56c.2-.04.4-.16.52-.36L11.2 9.8l3.4 3.4-4.52 3.12z"
            ></path>
          </svg>
          <span className="font-page font-extrabold text-pageMenu bottom-0 absolute ml-1 text-xl md:text-2xl">
            3
          </span>
        </div>
      );
      break;
    case "V":
      elementInside = (
        <div className="w-full h-full relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {unlockSVG}
            <div className="absolute w-full h-full font-page text-sm text-pageMenu font-extrabold">
              3
            </div>
          </div>
        </div>
      );
      break;
    case "w":
      elementInside = (
        <div className="w-full h-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-7.5 0 32 32"
            className="w-8 h-8 absolute -top-2 -right-2"
          >
            <path
              className="fill-pageMenu"
              d="M16.52 12.72l-4.84-4.84c-.16-.16-.44-.28-.68-.24s-.48.16-.6.36l-3.52 5.16-3.72.84c-.28.08-.52.28-.64.6-.08.28 0 .6.2.84l2.52 2.52-5 5c-.32.32-.32.84 0 1.2.16.16.36.24.6.24s.44-.08.6-.24l5.04-5.04L9 21.64c.16.16.36.24.6.24.08 0 .16 0 .24-.04.28-.08.52-.32.6-.64l.84-3.72L16.44 14c.2-.16.32-.36.36-.6-.04-.28-.08-.52-.28-.68zm-6.44 3.6c-.16.12-.28.32-.36.52l-.6 2.56L5 15.28l2.56-.56c.2-.04.4-.16.52-.36L11.2 9.8l3.4 3.4-4.52 3.12z"
            ></path>
          </svg>
          <span className="font-page font-extrabold text-pageMenu bottom-0 absolute ml-1 text-xl md:text-2xl">
            5
          </span>
        </div>
      );
      break;
    case "W":
      elementInside = (
        <div className="w-full h-full relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {unlockSVG}
            <div className="absolute w-full h-full font-page text-sm text-pageMenu font-extrabold">
              5
            </div>
          </div>
        </div>
      );
      break;
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
              <div className="h-full aspect-square border-2 border-pageMenu bg-page3">{upSVG}</div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-center">
              <div className="h-full aspect-square border-2 border-pageMenu bg-page3">{downSVG}</div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      elementInside = <div className="w-full h-full bg-pageMenu"></div>;
  }

  let borderClasses = [];
  let borderFixClasses = [
    "border-t-4",
    "border-r-4",
    "border-b-4",
    "border-l-4",
  ];

  if (props.top) {
    borderClasses.push("border-t-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-t-4"
    );
  }
  if (props.right) {
    borderClasses.push("border-r-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-r-4"
    );
  }
  if (props.bottom) {
    borderClasses.push("border-b-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-b-4"
    );
  }
  if (props.left) {
    borderClasses.push("border-l-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-l-4"
    );
  }

  const borderClassesString = borderClasses.join(" ");
  const borderFixClassessString = borderFixClasses.join(" ");

  // const decreaseAvaiableHandler = (type) => {
  //   props.decreateAvaiable(type);
  // }

  const changeBottomBorderHandler = () => {
    function arrayToInputString(twoDimensionalArray) {
      let inputString = "";
      const dynamicGridCount = props.gridCount;

      for (let i = 0; i < dynamicGridCount; i++) {
        for (let j = 0; j < dynamicGridCount; j++) {
          const cell = twoDimensionalArray[i][j];

          const type = cell.type;
          const row = cell.row.toString().padStart(2, "0");
          const col = cell.col.toString().padStart(2, "0");
          let top = cell.top ? "t" : "f";
          let right = cell.right ? "t" : "f";
          let bottom = cell.bottom ? "t" : "f";
          let left = cell.left ? "t" : "f";

          if (col == props.j && row == props.i) {
            if (cell.bottom) {
              bottom = "f";
            } else {
              bottom = "t";
            }
          }

          if (col == props.j && row == props.i + 1) {
            if (cell.top) {
              top = "f";
            } else {
              top = "t";
            }
          }

          inputString += `${type}${row}${col}${top}${right}${bottom}${left}`;
        }
      }

      return inputString;
    }
    const wynik = arrayToInputString(gameCtx.grid);
    props.func(wynik);
  };

  const changeRightBorderHandler = () => {
    function arrayToInputString(twoDimensionalArray) {
      let inputString = "";
      const dynamicGridCount = props.gridCount;

      for (let i = 0; i < dynamicGridCount; i++) {
        for (let j = 0; j < dynamicGridCount; j++) {
          const cell = twoDimensionalArray[i][j];

          const type = cell.type;
          const row = cell.row.toString().padStart(2, "0");
          const col = cell.col.toString().padStart(2, "0");
          let top = cell.top ? "t" : "f";
          let right = cell.right ? "t" : "f";
          let bottom = cell.bottom ? "t" : "f";
          let left = cell.left ? "t" : "f";

          if (col == props.j && row == props.i) {
            if (cell.right) {
              right = "f";
            } else {
              right = "t";
            }
          }

          if (col == props.j + 1 && row == props.i) {
            if (cell.left) {
              left = "f";
            } else {
              left = "t";
            }
          }

          inputString += `${type}${row}${col}${top}${right}${bottom}${left}`;
        }
      }

      return inputString;
    }
    const wynik = arrayToInputString(gameCtx.grid);
    props.func(wynik);
  };

  const changeTopBorderHandler = () => {
    function arrayToInputString(twoDimensionalArray) {
      let inputString = "";
      const dynamicGridCount = props.gridCount;

      for (let i = 0; i < dynamicGridCount; i++) {
        for (let j = 0; j < dynamicGridCount; j++) {
          const cell = twoDimensionalArray[i][j];

          const type = cell.type;
          const row = cell.row.toString().padStart(2, "0");
          const col = cell.col.toString().padStart(2, "0");
          let top = cell.top ? "t" : "f";
          let right = cell.right ? "t" : "f";
          let bottom = cell.bottom ? "t" : "f";
          let left = cell.left ? "t" : "f";

          if (col == props.j && row == props.i) {
            if (cell.top) {
              top = "f";
            } else {
              top = "t";
            }
          }

          if (col == props.j && row == props.i - 1) {
            if (cell.bottom) {
              bottom = "f";
            } else {
              bottom = "t";
            }
          }

          inputString += `${type}${row}${col}${top}${right}${bottom}${left}`;
        }
      }

      return inputString;
    }
    const wynik = arrayToInputString(gameCtx.grid);
    props.func(wynik);
  };

  const changeLeftBorderHandler = () => {
    function arrayToInputString(twoDimensionalArray) {
      let inputString = "";
      const dynamicGridCount = props.gridCount;

      for (let i = 0; i < dynamicGridCount; i++) {
        for (let j = 0; j < dynamicGridCount; j++) {
          const cell = twoDimensionalArray[i][j];

          const type = cell.type;
          const row = cell.row.toString().padStart(2, "0");
          const col = cell.col.toString().padStart(2, "0");
          let top = cell.top ? "t" : "f";
          let right = cell.right ? "t" : "f";
          let bottom = cell.bottom ? "t" : "f";
          let left = cell.left ? "t" : "f";

          if (col == props.j && row == props.i) {
            if (cell.left) {
              left = "f";
            } else {
              left = "t";
            }
          }

          if (col == props.j - 1 && row == props.i) {
            if (cell.right) {
              right = "f";
            } else {
              right = "t";
            }
          }

          inputString += `${type}${row}${col}${top}${right}${bottom}${left}`;
        }
      }

      return inputString;
    }
    const wynik = arrayToInputString(gameCtx.grid);
    props.func(wynik);
  };

  const deleteElementHandler = () => {
    props.deleteElementFunc(props.i, props.j, props.type);
  };

  // gameCtx.setItemBoundaries(currentItems =>
  //   currentItems.map(item =>
  //     item.type === "s" ? { ...item, avaiable: item.avaiable - 1 } : item
  //   )
  // );

  return (
    <React.Fragment>
      <div
        className={`col-span-1 row-span-1 relative ${bgColorClass} ${borderClassesString} border-pageMenu`}
      >
        <div
          className={`w-full h-full ${borderFixClassessString} border-transparent flex items-center justify-center`}
        >
          <div
            className="w-full h-full relative"
            onDragOver={(e) => e.preventDefault()}
            onDrop={props.onDrop}
          >
            <div className="absolute w-full h-full">{elementInside}</div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute z-30 w-full h-full justify-center items-center">
                <div className=" w-full h-full scale-90">
                  <div className="relative w-full h-full z-50">
                    {props.type !== "n" && (
                      <div
                        className="active:scale-75 opacity-0 hover:opacity-100 hover:scale-105 duration-200 w-[40%] h-[40%] bg-page3 hover:cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                        onClick={deleteElementHandler}
                      >
                        <span className="font-page text-xl font-extrabold text-pageMenu">
                          X
                        </span>
                      </div>
                    )}
                    <div className="w-full h-[20%] absolute z-50 bottom-0 flex items-center justify-center">
                      <div
                        className={`w-[90%] h-full opacity-0 hover:opacity-100 duration-200 ${
                          props.type == "f" ? "bg-page4" : "bg-pageMenu"
                        } hover:animate-pulse hover:cursor-pointer`}
                        onClick={changeBottomBorderHandler}
                      ></div>
                    </div>
                    <div className="w-[20%] h-full absolute z-50 right-0 flex items-center justify-center">
                      <div
                        className={`w-full h-[90%] opacity-0 hover:opacity-100 duration-200 ${
                          props.type == "f" ? "bg-page4" : "bg-pageMenu"
                        } hover:animate-pulse hover:cursor-pointer`}
                        onClick={changeRightBorderHandler}
                      ></div>
                    </div>
                    <div className="w-full h-[20%] absolute z-50 top-0 flex items-center justify-center">
                      <div
                        className={`w-[90%] h-full opacity-0 hover:opacity-100 duration-200 ${
                          props.type == "f" ? "bg-page4" : "bg-pageMenu"
                        } hover:animate-pulse hover:cursor-pointer`}
                        onClick={changeTopBorderHandler}
                      ></div>
                    </div>
                    <div className="w-[20%] h-full absolute z-50 left-0 flex items-center justify-center">
                      <div
                        className={`w-full h-[90%] opacity-0 hover:opacity-100 duration-200 ${
                          props.type == "f" ? "bg-page4" : "bg-pageMenu"
                        } hover:animate-pulse hover:cursor-pointer`}
                        onClick={changeLeftBorderHandler}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full h-full">{props.styleChange}</div>
              <div className="w-full h-full relative">
                <div className="absolute flex w-full h-full justify-end items-end">
                  <div className="right-0 bottom-0 translate-x-1 translate-y-1">
                    {cornerFixSVG}
                  </div>
                </div>
                <div className="absolute flex w-full h-full justify-end items-start">
                  <div className="rigth-0 top-0 translate-x-1 -translate-y-1">
                    {cornerFixSVG}
                  </div>
                </div>
                <div className="absolute flex w-full h-full justify-start items-start">
                  <div className="left-0 top-0 -translate-x-1 -translate-y-1">
                    {cornerFixSVG}
                  </div>
                </div>
                <div className="absolute flex w-full h-full justify-start items-end">
                  <div className="left-0 bottom-0 -translate-x-1 translate-y-1">
                    {cornerFixSVG}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateBorderBlock;
