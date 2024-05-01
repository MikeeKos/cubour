import React, { useState, useEffect, useContext, useMemo } from "react";
import useMeasure from "react-use-measure";
import GameContext from "../../store/game-context";
import NotificationContext from "../../store/notification-context";
import Grid from "./grid/grid";
import CreateBorderBlock from "../play/blocks/create-borders";
import SetTimeBlock from "./set-time";
import GridCount from "./grid/grid-count";
import CreateMapText from "./create-map-text";
import BorederText from "./borders-text";
import Flashing from "./blocks/flashing";
import BlockPlaceText from "./blocks/block-place-text";
import FunctionalBlock from "./blocks/functional-block";
import SpecialBlockTemplate from "./blocks/special-block-template";
import { useSession } from "next-auth/react";
import SideAction from "../ui/side-action";

function Create(props) {
  const [ref, { height, width }] = useMeasure();
  const [result, setResult] = useState([]);
  const gameCtx = useContext(GameContext);
  const notificationCtx = useContext(NotificationContext);
  const { data: session, status } = useSession();
  const [inputString, setInputString] = useState(
    "n0000ffffn0001ffffn0002ffffn0003ffffn0004ffffn0005ffffn0006ffffn0007ffffn0100ffffn0101ffffn0102ffffn0103ffffn0104ffffn0105ffffn0106ffffn0107ffffn0200ffffn0201ffffn0202ffffn0203ffffn0204ffffn0205ffffn0206ffffn0207ffffn0300ffffn0301ffffn0302ffffn0303ffffn0304ffffn0305ffffn0306ffffn0307ffffn0400ffffn0401ffffn0402ffffn0403ffffn0404ffffn0405ffffn0406ffffn0407ffffn0500ffffn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ffffn0600ffffn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ffffn0700ffffn0701ffffn0702ffffn0703ffffn0704ffffn0705ffffn0706ffffn0707ffff"
  );

  const [timeLimit, setTimeLimit] = useState("0000000");

  const { pointPosition } = useContext(GameContext);

  const [dynamicGridCount, setDynamicGridCount] = useState(8);

  const pullDataChangeGridCount = (gridCount) => {
    const startingState = [
      { type: "s", avaiable: 1 },
      { type: "e", avaiable: 1 },
      { type: "t", avaiable: 1 },
      { type: "T", avaiable: 1 },
      { type: "o", avaiable: 1 },
      { type: "O", avaiable: 1 },
      { type: "v", avaiable: 1 },
      { type: "V", avaiable: 1 },
      { type: "w", avaiable: 1 },
      { type: "W", avaiable: 1 },
    ];

    if (gridCount == 8) {
      gameCtx.setItemBoundaries(startingState);
      setInputString(
        "n0000ffffn0001ffffn0002ffffn0003ffffn0004ffffn0005ffffn0006ffffn0007ffffn0100ffffn0101ffffn0102ffffn0103ffffn0104ffffn0105ffffn0106ffffn0107ffffn0200ffffn0201ffffn0202ffffn0203ffffn0204ffffn0205ffffn0206ffffn0207ffffn0300ffffn0301ffffn0302ffffn0303ffffn0304ffffn0305ffffn0306ffffn0307ffffn0400ffffn0401ffffn0402ffffn0403ffffn0404ffffn0405ffffn0406ffffn0407ffffn0500ffffn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ffffn0600ffffn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ffffn0700ffffn0701ffffn0702ffffn0703ffffn0704ffffn0705ffffn0706ffffn0707ffff"
      );
      setDynamicGridCount(8);
    }
    if (gridCount == 10) {
      gameCtx.setItemBoundaries(startingState);
      setInputString(
        "n0000ffffn0001ffffn0002ffffn0003ffffn0004ffffn0005ffffn0006ffffn0007ffffn0008ffffn0009ffffn0100ffffn0101ffffn0102ffffn0103ffffn0104ffffn0105ffffn0106ffffn0107ffffn0108ffffn0109ffffn0200ffffn0201ffffn0202ffffn0203ffffn0204ffffn0205ffffn0206ffffn0207ffffn0208ffffn0209ffffn0300ffffn0301ffffn0302ffffn0303ffffn0304ffffn0305ffffn0306ffffn0307ffffn0308ffffn0309ffffn0400ffffn0401ffffn0402ffffn0403ffffn0404ffffn0405ffffn0406ffffn0407ffffn0408ffffn0409ffffn0500ffffn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ffffn0508ffffn0509ffffn0600ffffn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ffffn0608ffffn0609ffffn0700ffffn0701ffffn0702ffffn0703ffffn0704ffffn0705ffffn0706ffffn0707ffffn0708ffffn0709ffffn0800ffffn0801ffffn0802ffffn0803ffffn0804ffffn0805ffffn0806ffffn0807ffffn0808ffffn0809ffffn0900ffffn0901ffffn0902ffffn0903ffffn0904ffffn0905ffffn0906ffffn0907ffffn0908ffffn0909ffff"
      );
      setDynamicGridCount(10);
    }
    if (gridCount == 12) {
      gameCtx.setItemBoundaries(startingState);
      setInputString(
        "n0000ffffn0001ffffn0002ffffn0003ffffn0004ffffn0005ffffn0006ffffn0007ffffn0008ffffn0009ffffn0010ffffn0011ffffn0100ffffn0101ffffn0102ffffn0103ffffn0104ffffn0105ffffn0106ffffn0107ffffn0108ffffn0109ffffn0110ffffn0111ffffn0200ffffn0201ffffn0202ffffn0203ffffn0204ffffn0205ffffn0206ffffn0207ffffn0208ffffn0209ffffn0210ffffn0211ffffn0300ffffn0301ffffn0302ffffn0303ffffn0304ffffn0305ffffn0306ffffn0307ffffn0308ffffn0309ffffn0310ffffn0311ffffn0400ffffn0401ffffn0402ffffn0403ffffn0404ffffn0405ffffn0406ffffn0407ffffn0408ffffn0409ffffn0410ffffn0411ffffn0500ffffn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ffffn0508ffffn0509ffffn0510ffffn0511ffffn0600ffffn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ffffn0608ffffn0609ffffn0610ffffn0611ffffn0700ffffn0701ffffn0702ffffn0703ffffn0704ffffn0705ffffn0706ffffn0707ffffn0708ffffn0709ffffn0710ffffn0711ffffn0800ffffn0801ffffn0802ffffn0803ffffn0804ffffn0805ffffn0806ffffn0807ffffn0808ffffn0809ffffn0810ffffn0811ffffn0900ffffn0901ffffn0902ffffn0903ffffn0904ffffn0905ffffn0906ffffn0907ffffn0908ffffn0909ffffn0910ffffn0911ffffn1000ffffn1001ffffn1002ffffn1003ffffn1004ffffn1005ffffn1006ffffn1007ffffn1008ffffn1009ffffn1010ffffn1011ffffn1100ffffn1101ffffn1102ffffn1103ffffn1104ffffn1105ffffn1106ffffn1107ffffn1108ffffn1109ffffn1110ffffn1111ffff"
      );
      setDynamicGridCount(12);
    }
    if (gridCount == 14) {
      gameCtx.setItemBoundaries(startingState);
      setInputString(
        "n0000ffffn0001ffffn0002ffffn0003ffffn0004ffffn0005ffffn0006ffffn0007ffffn0008ffffn0009ffffn0010ffffn0011ffffn0012ffffn0013ffffn0100ffffn0101ffffn0102ffffn0103ffffn0104ffffn0105ffffn0106ffffn0107ffffn0108ffffn0109ffffn0110ffffn0111ffffn0112ffffn0113ffffn0200ffffn0201ffffn0202ffffn0203ffffn0204ffffn0205ffffn0206ffffn0207ffffn0208ffffn0209ffffn0210ffffn0211ffffn0212ffffn0213ffffn0300ffffn0301ffffn0302ffffn0303ffffn0304ffffn0305ffffn0306ffffn0307ffffn0308ffffn0309ffffn0310ffffn0311ffffn0312ffffn0313ffffn0400ffffn0401ffffn0402ffffn0403ffffn0404ffffn0405ffffn0406ffffn0407ffffn0408ffffn0409ffffn0410ffffn0411ffffn0412ffffn0413ffffn0500ffffn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ffffn0508ffffn0509ffffn0510ffffn0511ffffn0512ffffn0513ffffn0600ffffn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ffffn0608ffffn0609ffffn0610ffffn0611ffffn0612ffffn0613ffffn0700ffffn0701ffffn0702ffffn0703ffffn0704ffffn0705ffffn0706ffffn0707ffffn0708ffffn0709ffffn0710ffffn0711ffffn0712ffffn0713ffffn0800ffffn0801ffffn0802ffffn0803ffffn0804ffffn0805ffffn0806ffffn0807ffffn0808ffffn0809ffffn0810ffffn0811ffffn0812ffffn0813ffffn0900ffffn0901ffffn0902ffffn0903ffffn0904ffffn0905ffffn0906ffffn0907ffffn0908ffffn0909ffffn0910ffffn0911ffffn0912ffffn0913ffffn1000ffffn1001ffffn1002ffffn1003ffffn1004ffffn1005ffffn1006ffffn1007ffffn1008ffffn1009ffffn1010ffffn1011ffffn1012ffffn1013ffffn1100ffffn1101ffffn1102ffffn1103ffffn1104ffffn1105ffffn1106ffffn1107ffffn1108ffffn1109ffffn1110ffffn1111ffffn1112ffffn1113ffffn1200ffffn1201ffffn1202ffffn1203ffffn1204ffffn1205ffffn1206ffffn1207ffffn1208ffffn1209ffffn1210ffffn1211ffffn1212ffffn1213ffffn1300ffffn1301ffffn1302ffffn1303ffffn1304ffffn1305ffffn1306ffffn1307ffffn1308ffffn1309ffffn1310ffffn1311ffffn1312ffffn1313ffff"
      );
      setDynamicGridCount(14);
    }
  };

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

  // const handleDragEnd = () => {
  //   console.log("dragging stopped");
  // };

  const pullTimeData = (time) => {
    setTimeLimit(time);
  };

  const submitHandler = async () => {
    console.log("dynamic grid count");
    console.log(dynamicGridCount);
    console.log("time limit");
    console.log(timeLimit);
    console.log("input string");
    console.log(inputString);
    const mapData = [{ dynamicGridCount }, { timeLimit }, { inputString }];

    notificationCtx.showNotification({
      title: "sending map...",
      message: "sending comment data for verification",
      status: "pending",
    });
    try {
      const response = await fetch("/api/create/seed-upload", {
        method: "POST",
        body: JSON.stringify(mapData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //if response is NOT 200-299
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      const data = await response.json();
      notificationCtx.showNotification({
        title: "success!",
        message: "The map has been successfully sent for verification",
        status: "success",
      });
      console.log("Successfully reached endpoint in front end");
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong...",
        status: "error",
      });
    }
  };

  return (
    // <div ref={ref} className="w-full h-full">
    <div
      ref={ref}
      className="w-full h-screen relative bg-page4 overflow-y-scroll"
    >
      <div className="absolute w-full h-full overflow-hidden">
        <SideAction position={2} theme={"dark"} goBackPath={"/"} />
      </div>
      <div
        className={`absolute w-full ${height > 710 ? "h-full" : "h-[43rem]"}`}
      >
        <div className="w-full h-full">
          <div className="w-full h-full bg-page5 grid grid-rows-6 grid-cols-1 md:grid-rows-1 md:grid-cols-12">
            <div className=" row-span-2 col-span-1 md:row-span-1 md:col-span-4 bg-pageMenu p-6">
              <div className="w-full h-full bg-page1 overflow-y-scroll">
                {/* <div className="w-full h-[15rem] bg-page3 shadow-[inset_-24px_-16px_200px_#46464620] overflow-x-scroll">
                {inputString}
              </div> */}
                <CreateMapText />
                <div className="w-full h-[14rem]">
                  <GridCount func={pullDataChangeGridCount} />
                </div>
                <div className="w-full h-[14rem]">
                  <SetTimeBlock timeFunc={pullTimeData} />
                </div>
                <BorederText />
                <div className="w-full bg-page4 shadow-[inset_-24px_-16px_200px_#46464620]">
                  <div className="w-full h-[3rem] flex items-center justify-start ps-4 pt-6">
                    <span className="shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-2xl bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest">
                      Special Blocks
                    </span>
                  </div>
                  <BlockPlaceText />
                  <FunctionalBlock
                    id={"s"}
                    description={"Spawn point"}
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"e"}
                    description={"Finish block"}
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"t"}
                    description={
                      "The entrance to the first teleportation block"
                    }
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"T"}
                    description={"The exit from the first teleport"}
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"o"}
                    description={
                      "The entrance to the second teleportation block"
                    }
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"O"}
                    description={"The exit from the second teleport"}
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"v"}
                    description={
                      "Press on this block 3 times to unlock the pathway"
                    }
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"V"}
                    description={"The path that will be opened after 3 visits"}
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"w"}
                    description={
                      "Press on this block 5 times to unlock the pathway"
                    }
                    handleDragStart={handleDragStart}
                  />
                  <FunctionalBlock
                    id={"W"}
                    description={"The path that will be opened after 5 visits"}
                    handleDragStart={handleDragStart}
                  />
                  <Flashing
                    time={1250}
                    id={"f"}
                    handleDragStart={handleDragStart}
                  />
                  <Flashing
                    time={1000}
                    id={"F"}
                    handleDragStart={handleDragStart}
                  />
                  <Flashing
                    time={750}
                    id={"x"}
                    handleDragStart={handleDragStart}
                  />
                  <Flashing
                    time={500}
                    id={"X"}
                    handleDragStart={handleDragStart}
                  />
                  <SpecialBlockTemplate
                    id={"b"}
                    description={"Mini-game: alternate clicking right and left"}
                    handleDragStart={handleDragStart}
                  />
                  <SpecialBlockTemplate
                    id={"c"}
                    description={
                      "Mini-game: circle around the arrows on the keyboard"
                    }
                    handleDragStart={handleDragStart}
                  />
                  <SpecialBlockTemplate
                    id={"u"}
                    description={"Mini-game: alternate clicking up and down"}
                    handleDragStart={handleDragStart}
                  />
                </div>
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
              </div>
            </div>
            <div className="row-span-4 col-span-1 md:row-span-1 md:col-span-8 bg-page1 shadow-[inset_-24px_-16px_100px_#46464620] md:flex md:items-center md:justify-center">
              <div className="w-full h-full md:w-[90%] md:h-[90%] lg:w-[80%] lg:h-[80%] flex items-center justify-center p-5 md:p-10 lg:p-16">
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="absolute w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] bg-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                    {width < 550 && (
                      <div className="absolute z-40 border-4 border-pageMenu w-full h-full bg-pageMenu opacity-75 flex items-center justify-center">
                        <div className="w-[60%] h-[60%] text-center font-page text-page1 tracking-widest text-3xl font-extrabold flex items-center justify-center">
                          Please use a computer to create maps
                        </div>
                      </div>
                    )}
                    {result.length !== 0 && (
                      <div className="w-full h-full z-30 absolute">
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
                    {/* Tutaj */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default Create;
