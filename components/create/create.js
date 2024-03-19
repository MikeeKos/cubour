import React, { useState, useEffect, useContext, useMemo } from "react";
import useMeasure from "react-use-measure";
import GameContext from "../../store/game-context";
import NotificationContext from "../../store/notification-context";
import Grid from "./grid";
// import NormalBlock from "../play/blocks/normal";
// import StartBlock from "../play/blocks/start";
// import EndBlock from "../play/blocks/end";
// import FlashingBlock from "../play/blocks/flashing/flashing";
// import FastFlashingBlock from "../play/blocks/flashing/fast-flashing";
// import XFasterFlashingBlock from "../play/blocks/flashing/x-faster-flashing";
// import XFastestFlashingBlock from "../play/blocks/flashing/x-fastest-flashing";
// import TeleportBlock from "../play/blocks/teleport/teleport";
// import TeleportEndPointBlock from "../play/blocks/teleport/teleport-end-point";
// import SecondTeleportBlock from "../play/blocks/teleport/second-teleport";
// import SecondTeleportEndPointBlock from "../play/blocks/teleport/second-teleport-endpoint";
// import VisitBlock from "../play/blocks/visit/visit";
// import VisitTargetBlock from "../play/blocks/visit/visit-target";
// import SecondVisitBlock from "../play/blocks/visit/second-visit";
// import SecondVisitTargetBlock from "../play/blocks/visit/second-visit-target";
// import BackAndForthSpecial from "../play/blocks/special/back-and-forth";
// import CircleSpecial from "../play/blocks/special/circle";
// import UpAndDownSpecial from "../play/blocks/special/up-and-down";
import CreateBorderBlock from "../play/blocks/create-borders";
import {
  checkeredSVG,
  startDesignSVG,
  trophySVG,
  unlockSVG,
} from "../../SVG/game-grid";
import { leftSVG, rightSVG, upSVG, downSVG } from "../../SVG/arrows";

function Create(props) {
  const [ref, { height, width }] = useMeasure();
  const [result, setResult] = useState([]);
  // const [resultBorder, setResultBorders] = useState([]);
  const gameCtx = useContext(GameContext);
  const notificationCtx = useContext(NotificationContext);
  const [inputString, setInputString] = useState(
    "n0000ffffn0001ffffn0002ffffn0003ffffn0004ffffn0005ffffn0006ffffn0007ffffn0008ffffn0009ffffn0100ffffn0101ffffn0102ffffn0103ffffn0104ffffn0105ffffn0106ffffn0107ffffn0108ffffn0109ffffn0200ffffn0201ffffn0202ffffn0203ffffn0204ffffn0205ffffn0206ffffn0207ffffn0208ffffn0209ffffn0300ffffn0301ffffn0302ffffn0303ffffn0304ffffn0305ffffn0306ffffn0307ffffn0308ffffn0309ffffn0400ffffn0401ffffn0402ffffn0403ffffn0404ffffn0405ffffn0406ffffn0407ffffn0408ffffn0409ffffn0500ffffn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ffffn0508ffffn0509ffffn0600ffffn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ffffn0608ffffn0609ffffn0700ffffn0701ffffn0702ffffn0703ffffn0704ffffn0705ffffn0706ffffn0707ffffn0708ffffn0709ffffn0800ffffn0801ffffn0802ffffn0803ffffn0804ffffn0805ffffn0806ffffn0807ffffn0808ffffn0809ffffn0900ffffn0901ffffn0902ffffn0903ffffn0904ffffn0905ffffn0906ffffn0907ffffn0908ffffn0909ffff"
  );
  // const [itemsBoundaries, setItemBoundaries] = useState([
  //   { type: "s", avaiable: 5 },
  //   { type: "l", avaiable: 5 },
  //   { type: "n", avaiable: 3 },
  // ]);

  // const decreaseAvaiableByOne = (type) => {
  //   console.log("Hello")
  //   console.log(type)
  //   setItemBoundaries(currentItems =>
  //     currentItems.map(item =>
  //       item.type === type ? { ...item, max: item.avaiable - 1 } : item
  //     )
  //   );
  // };

  const {
    pointPosition,
    // setPointPosition,
    // setKeyPressed,
    // setKeyPressedCount,
    // keyPressedCount,
  } = useContext(GameContext);

  const dynamicGridCount = 10;

  const pullData = (data) => {
    setInputString(data);
  };

  const clearElementHandler = (i, j, blockType) => {
    gameCtx.setItemBoundaries((currentItems) =>
      currentItems.map((item) =>
        item.type === blockType
          ? { ...item, avaiable: item.avaiable + 1 }
          : item
      )
    );

    const targetI = i;
    const targetJ = j;
    function arrayToInputString(twoDimensionalArray) {
      let inputString = "";

      for (let i = 0; i < dynamicGridCount; i++) {
        for (let j = 0; j < dynamicGridCount; j++) {
          const cell = twoDimensionalArray[i][j];

          let type = cell.type;
          let row = cell.row.toString().padStart(2, "0");
          let col = cell.col.toString().padStart(2, "0");
          let top = cell.top ? "t" : "f";
          let right = cell.right ? "t" : "f";
          let bottom = cell.bottom ? "t" : "f";
          let left = cell.left ? "t" : "f";

          if (col == targetJ && row == targetI) {
            type = "n";
          }

          inputString += `${type}${row}${col}${top}${right}${bottom}${left}`;
        }
      }

      return inputString;
    }
    const wynik = arrayToInputString(gameCtx.grid);
    setInputString(wynik);
  };

  useEffect(() => {
    const twoDimensionalArray = [];
    let startingColumn;
    let startingRow;
    for (let i = 0; i < dynamicGridCount; i++) {
      twoDimensionalArray[i] = [];
      for (let j = 0; j < dynamicGridCount; j++) {
        function getSubstring(inputString, i, j, dynamicGridCount) {
          const index = i * dynamicGridCount + j;
          return inputString.slice(index * 9, index * 9 + 9);
        }

        const substring = getSubstring(inputString, i, j, dynamicGridCount);

        const type = substring[0];
        const row = parseInt(substring.slice(1, 3), 10);
        const col = parseInt(substring.slice(3, 5), 10);
        const top = substring[5];
        const right = substring[6];
        const bottom = substring[7];
        const left = substring[8];

        if (type === "T") {
          gameCtx.setFirstTeleportEndPoint({ x: col, y: row });
        }

        if (type === "O") {
          gameCtx.setSecondTeleportEndPoint({ x: col, y: row });
        }

        if (type === "s") {
          startingColumn = col;
          startingRow = row;
        }

        let top_fixed;
        if (i - 1 < 0) {
          top_fixed = true;
        } else {
          const blockAboveSubstring = getSubstring(
            inputString,
            i - 1,
            j,
            dynamicGridCount
          );
          const checkBlockAboveBottomBorder = blockAboveSubstring[7];
          top_fixed = top === "t" || checkBlockAboveBottomBorder === "t";
        }

        let right_fixed;
        if (j + 1 >= dynamicGridCount) {
          right_fixed = true;
        } else {
          const blockOnTheRightSubstring = getSubstring(
            inputString,
            i,
            j + 1,
            dynamicGridCount
          );
          const checkBlockOnTheRightLeftBorder = blockOnTheRightSubstring[8];
          right_fixed = right === "t" || checkBlockOnTheRightLeftBorder === "t";
        }

        let bottom_fixed;
        if (i + 1 >= dynamicGridCount) {
          bottom_fixed = true;
        } else {
          const blockUnderneathSubstring = getSubstring(
            inputString,
            i + 1,
            j,
            dynamicGridCount
          );
          const checkBlockUnderneathTopBorder = blockUnderneathSubstring[5];
          bottom_fixed =
            bottom === "t" || checkBlockUnderneathTopBorder === "t";
        }

        let left_fixed;
        if (j - 1 < 0) {
          left_fixed = true;
        } else {
          const blockOnTheLeftSubstring = getSubstring(
            inputString,
            i,
            j - 1,
            dynamicGridCount
          );
          const checkBlockOnTheLeftRightBorder = blockOnTheLeftSubstring[6];
          left_fixed = left === "t" || checkBlockOnTheLeftRightBorder === "t";
        }

        const cell = {
          type,
          row,
          col,
          top: top_fixed,
          right: right_fixed,
          bottom: bottom_fixed,
          left: left_fixed,
        };

        twoDimensionalArray[i][j] = cell;
      }
    }

    gameCtx.setPointPosition({ x: startingColumn, y: startingRow });
    gameCtx.setGrid(twoDimensionalArray);
    setResult(twoDimensionalArray);
  }, [inputString]);

  const handleDrop = (event, i, j, cellType) => {
    event.preventDefault();
    const svgId = event.dataTransfer.getData("text/plain");

    if (cellType !== "n") {
      notificationCtx.showNotification({
        title: "Warning!",
        message: "clear this field before placing a different block on it",
        status: "error",
      });
      return;
    }

    gameCtx.setItemBoundaries((currentItems) =>
      currentItems.map((item) =>
        item.type === svgId ? { ...item, avaiable: item.avaiable - 1 } : item
      )
    );

    const targetI = i;
    const targetJ = j;
    function arrayToInputString(twoDimensionalArray) {
      let inputString = "";

      for (let i = 0; i < dynamicGridCount; i++) {
        for (let j = 0; j < dynamicGridCount; j++) {
          const cell = twoDimensionalArray[i][j];

          let type = cell.type;
          let row = cell.row.toString().padStart(2, "0");
          let col = cell.col.toString().padStart(2, "0");
          let top = cell.top ? "t" : "f";
          let right = cell.right ? "t" : "f";
          let bottom = cell.bottom ? "t" : "f";
          let left = cell.left ? "t" : "f";

          if (col == targetJ && row == targetI) {
            type = svgId;
          }

          inputString += `${type}${row}${col}${top}${right}${bottom}${left}`;
        }
      }

      return inputString;
    }
    const wynik = arrayToInputString(gameCtx.grid);
    setInputString(wynik);
  };

  const borderGridItems = useMemo(() => {
    // const componentMap = {
    //   n: NormalBlock,
    //   s: StartBlock,
    //   e: EndBlock,
    //   f: FlashingBlock,
    //   F: FastFlashingBlock,
    //   x: XFasterFlashingBlock,
    //   X: XFastestFlashingBlock,
    //   t: TeleportBlock,
    //   T: TeleportEndPointBlock,
    //   o: SecondTeleportBlock,
    //   O: SecondTeleportEndPointBlock,
    //   v: VisitBlock,
    //   V: VisitTargetBlock,
    //   w: SecondVisitBlock,
    //   W: SecondVisitTargetBlock,
    //   b: BackAndForthSpecial,
    //   c: CircleSpecial,
    //   u: UpAndDownSpecial,
    // };

    // Tworzenie gridItems na podstawie oryginalnych danych
    // const gridItems = result.flatMap((row, i) =>
    //   row.map((cell, j) => {
    //     const Component = componentMap[cell.type] || NormalBlock;
    //     return (
    //       <Component
    //         key={`row${i}col${j}`}
    //         i={cell.row}
    //         j={cell.col}
    //         top={cell.top}
    //         right={cell.right}
    //         bottom={cell.bottom}
    //         left={cell.left}
    //         gridCount={dynamicGridCount}
    //         isSelected={i === pointPosition.y && j === pointPosition.x}
    //       />
    //     );
    //   })
    // );

    const borderGridItems = result.flatMap((row, i) =>
      row.map((cell, j) => (
        <CreateBorderBlock
          key={`border-row${i}col${j}`}
          type={cell.type}
          i={cell.row}
          j={cell.col}
          top={cell.top}
          right={cell.right}
          bottom={cell.bottom}
          left={cell.left}
          gridCount={dynamicGridCount}
          isSelected={false}
          func={pullData}
          deleteElementFunc={clearElementHandler}
          inputString={inputString}
          onDrop={(e) => handleDrop(e, cell.row, cell.col, cell.type)}
        />
      ))
    );

    return borderGridItems;
  }, [pointPosition, result, gameCtx.keyPressedCount, inputString]);

  const handleDragStart = (event) => {
    const blockType = event.target.id;
    event.dataTransfer.setData("text/plain", blockType);
  };

  const handleDragEnd = () => {
    console.log("dragging stopped");
  };

  return (
    <div ref={ref} className="w-full h-full">
      <div className="w-full h-[45rem]">
        <div className="w-full h-full bg-page5 grid grid-rows-6 grid-cols-1 md:grid-rows-1 md:grid-cols-12">
          <div className=" row-span-2 col-span-1 md:row-span-1 md:col-span-4 bg-pageMenu p-6">
            <div className="w-full h-full bg-page1 overflow-y-scroll">
              <div className="w-full h-[15rem] bg-page3 shadow-[inset_-24px_-16px_200px_#46464620] overflow-x-scroll">
                {inputString}
              </div>
              <div className="relative w-full h-[15rem] bg-page4 shadow-[inset_-24px_-16px_200px_#46464620] overflow-hidden">
                <div className="w-full h-full absolute flex items-start justify-end top-7 right-7">
                  <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                </div>
                <div className="w-full h-full absolute flex items-start justify-end top-4 right-4">
                  <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                </div>
                <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7">
                  <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                </div>
                <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4">
                  <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                </div>
                <div className="w-full h-full absolute rotate-[36deg] flex items-center top-36 md:top-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-24 h-24 md:w-16 md:h-16 animate-scale-swing-rotate"
                  >
                    <path
                      className="stroke-pageMenu"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-6-3V4l6 3m0 13l6-3m-6 3V7m6 10l6 3V7l-6-3m0 13V4M9 7l6-3"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-24 h-24 md:w-16 md:h-16 animate-scale-swing-rotate top-3"
                  >
                    <path
                      className="stroke-page1"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-6-3V4l6 3m0 13l6-3m-6 3V7m6 10l6 3V7l-6-3m0 13V4M9 7l6-3"
                    ></path>
                  </svg>
                </div>
                <div className="w-full h-full absolute flex items-end justify-end pe-2 pb-2 lg:pe-5 lg:pb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-28 h-28 md:w-14 md:h-14 lg:w-20 lg:h-20 rotate-180 animate-pulse"
                  >
                    <path
                      className="stroke-page1"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 3v18M7 3l4 4M7 3L3 7m11-4h7m-7 6h5m-5 6h3m-3 6h1"
                    ></path>
                  </svg>
                </div>
                <div className="absolute w-full h-full flex flex-col items-center justify-center">
                  <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] mb-2 p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
                    create
                  </span>
                  <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
                    map
                  </span>
                </div>
                <div className="w-full h-full absolute shadow-[inset_-24px_-16px_80px_#46464620]"></div>
              </div>
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
              <div className="w-full bg-page4 shadow-[inset_-24px_-16px_200px_#46464620]">
                <div className="w-full h-[3rem] flex items-center justify-start ps-4 pt-6">
                  <span className="shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-2xl bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest">
                    Special Blocks
                  </span>
                </div>
                <div className="w-full h-[12rem] md:h-[14rem] border-pageMenu relative">
                  <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7 opacity-100 md:opacity-0 lg:opacity-100">
                    <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                  </div>
                  <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4 opacity-100 md:opacity-0 lg:opacity-100">
                    <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                  </div>
                  <div className="w-full h-full absolute flex items-end justify-end md:items-end md:justify-center lg:justify-end p-5 md:p-0 lg:p-3 opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-swing-slow"
                    >
                      <path
                        className="fill-pageMenu"
                        fill="#000"
                        fillRule="evenodd"
                        d="M11.207 5.68c-.116.174-.207.468-.207.82V8a1 1 0 11-2 0V7c0-.352-.09-.646-.207-.82C8.697 6.035 8.613 6 8.5 6c-.112 0-.197.035-.293.18C8.091 6.354 8 6.648 8 7v5a1 1 0 11-2 0v-2c0-.352-.09-.646-.207-.82C5.697 9.035 5.613 9 5.5 9c-.112 0-.197.035-.293.18C5.091 9.354 5 9.648 5 10v4c0 1.033.7 2.14 2.055 3.043C8.387 17.932 10.194 18.5 12 18.5c3.668 0 6-2.249 6-4.5V8.5c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18-.116.174-.207.468-.207.82V9a1 1 0 11-2 0V7c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18-.116.174-.207.468-.207.82v1.5a1 1 0 11-2 0v-2c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18zm2.079-1.34c.338-.21.745-.34 1.214-.34.888 0 1.553.465 1.957 1.07.116.174.211.36.288.552.23-.078.482-.122.755-.122.888 0 1.553.465 1.957 1.07.384.576.543 1.282.543 1.93V14c0 3.749-3.668 6.5-8 6.5-2.194 0-4.388-.681-6.055-1.793C4.3 17.61 3 15.967 3 14v-4c0-.648.16-1.354.543-1.93C3.947 7.465 4.613 7 5.5 7c.175 0 .342.018.5.052V7c0-.648.16-1.354.543-1.93C6.947 4.465 7.613 4 8.5 4c.469 0 .875.13 1.214.34.41-.489 1.014-.84 1.786-.84s1.376.351 1.786.84z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-full h-full flex items-center justify-center absolute">
                    <div className="w-[80%] lg:w-[60%] h-full text-center pt-5">
                      <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                        Drag a special block icon onto the map. Each icon's
                        function is described next to it
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="f"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-[90%] h-[90%]"
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
                          A blinking block that blinks every 1250 milliseconds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="F"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-[90%] h-[90%]"
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
                          A blinking block that blinks every 1000 milliseconds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="x"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-[90%] h-[90%]"
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
                          A blinking block that blinks every 750 milliseconds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="X"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-[90%] h-[90%]"
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
                          A blinking block that blinks every 500 milliseconds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "s"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "s"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="s"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2">
                            {startDesignSVG}
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "s"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          Spawn point
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "e"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "e"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="e"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="relative w-full h-full bg-page2">
                            <div className="w-full h-full absolute">
                              {checkeredSVG}
                            </div>
                            <div className="w-full h-full absolute">
                              {trophySVG}
                            </div>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "e"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          Finish block
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "t"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "t"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="t"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2 flex items-center justify-center">
                            <svg
                              className="absolute w-[80%] h-[80%] fill-pageMenu"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -40 40 47.5"
                            >
                              <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-6v-34h4v34H0m13-5v-16h4v16h-4m23 5v-28h4v28h-4m-9-3v-10h4v10h-4"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "t"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          The entrance to the first teleportation block
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "T"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "T"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="T"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2 flex items-center justify-center">
                            <svg
                              className="absolute w-[80%] h-[80%] fill-pageMenu animate-pulse"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -32.834 40 40.33"
                            >
                              <path d="M0 0c0 10 40 10 40 0S0-10 0 0m0-9c16-11 14-21 5-21 5-5 11-3 13 3S7-15 11-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21-5-5-11-3-13 3s11 12 8 18h10"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "T"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          The exit from the first teleport
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "o"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "o"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="o"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2 flex items-center justify-center">
                            <svg
                              className="absolute w-[80%] h-[80%] fill-pageMenu"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -35 40 42"
                            >
                              <path d="M0 0l20 7 20-7-20-7L0 0m0-2v-28h4v26L0-2m10-3l4-2v-16h-4m0 0v18m17-1v-29h4v30l-4-1m13 4v-21h-4v19l4 2"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "o"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          The entrance to the first teleportation block
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "O"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "O"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="O"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2 flex items-center justify-center">
                            <svg
                              className="absolute w-[80%] h-[80%] fill-pageMenu animate-pulse"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -33 40 40"
                            >
                              <path d="M0 0l20 7 20-7-20-7L0 0m0-9c16-11 14-21 5-21l9-3 4 6L8-9H0m18 0h4l-1-8 4 4h3l-8-8-8 8h3l4-4-1 8m22 0c-16-11-14-21-5-21l-9-3-4 6L32-9h8"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "O"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          The exit from the second teleport
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "v"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "v"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="v"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
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
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "v"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          Press on this block 3 times to unlock the pathway
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "V"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "V"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="V"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2 relative">
                            <div className="relative w-full h-full bg-pageMenu flex items-center justify-center">
                              {unlockSVG}
                              <div className="absolute w-full h-full font-page text-sm text-page1 font-extrabold ml-2">
                                3
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "V"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          The path that will be opened after 3 visits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "w"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "w"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="w"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
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
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "w"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          Press on this block 5 times to unlock the pathway
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div
                        className={`relative w-full h-[5rem] flex items-center justify-center ${
                          gameCtx.itemBoundaries.find(
                            (item) => item.type === "W"
                          ).avaiable == 0
                            ? "opacity-25"
                            : "opacity-100"
                        }`}
                      >
                        {gameCtx.itemBoundaries.find(
                          (item) => item.type === "V"
                        ).avaiable == 0 && (
                          <div className="w-full h-full z-50 absolute"></div>
                        )}
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="W"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="w-full h-full bg-page2 relative">
                            <div className="relative w-full h-full bg-pageMenu flex items-center justify-center">
                              {unlockSVG}
                              <div className="absolute w-full h-full font-page text-sm text-page1 font-extrabold ml-2">
                                5
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            x
                          </span>
                        </div>
                        <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                          <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                            {
                              gameCtx.itemBoundaries.find(
                                (item) => item.type === "W"
                              ).avaiable
                            }
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[5rem] text-center pt-3">
                        <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                          The path that will be opened after 5 visits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="b"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
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
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="c"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
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
                          Mini-game: circle around the arrows on the keyboard
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[12rem] border-2 border-pageMenu">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[10rem]">
                      <div className="w-full h-[5rem] flex items-center justify-center">
                        <div
                          className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                          draggable="true"
                          id="u"
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                        >
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
                          Mini-game: alternate clicking up and down
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-4 col-span-1 md:row-span-1 md:col-span-8 bg-page1 shadow-[inset_-24px_-16px_100px_#46464620] md:flex md:items-center md:justify-center">
            <div className="w-full h-full md:w-[90%] md:h-[90%] lg:w-[80%] lg:h-[80%] flex items-center justify-center p-5 md:p-10 lg:p-16">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] bg-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                  {result.length !== 0 && (
                    <div className="w-full h-full z-40 absolute">
                      <Grid
                        dynamicGridCount={dynamicGridCount}
                        gridItems={borderGridItems}
                      />
                    </div>
                  )}
                  {result.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-page text-xl md:text-5xl text-page1 font-extrabold tracking-widest">
                        Loading...
                      </span>
                    </div>
                  )}
                  {/* {result.length !== 0 && (
                    <Grid
                      dynamicGridCount={dynamicGridCount}
                      gridItems={gridItems}
                    />
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
