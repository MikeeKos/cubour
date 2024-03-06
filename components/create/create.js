import React, { useState, useEffect, useContext, useMemo } from "react";
import useMeasure from "react-use-measure";
import GameContext from "../../store/game-context";
import Grid from "./grid";
import NormalBlock from "../play/blocks/normal";
import StartBlock from "../play/blocks/start";
import EndBlock from "../play/blocks/end";
import FlashingBlock from "../play/blocks/flashing/flashing";
import FastFlashingBlock from "../play/blocks/flashing/fast-flashing";
import XFasterFlashingBlock from "../play/blocks/flashing/x-faster-flashing";
import XFastestFlashingBlock from "../play/blocks/flashing/x-fastest-flashing";
import TeleportBlock from "../play/blocks/teleport/teleport";
import TeleportEndPointBlock from "../play/blocks/teleport/teleport-end-point";
import SecondTeleportBlock from "../play/blocks/teleport/second-teleport";
import SecondTeleportEndPointBlock from "../play/blocks/teleport/second-teleport-endpoint";
import VisitBlock from "../play/blocks/visit/visit";
import VisitTargetBlock from "../play/blocks/visit/visit-target";
import SecondVisitBlock from "../play/blocks/visit/second-visit";
import SecondVisitTargetBlock from "../play/blocks/visit/second-visit-target";
import BackAndForthSpecial from "../play/blocks/special/back-and-forth";
import CircleSpecial from "../play/blocks/special/circle";
import UpAndDownSpecial from "../play/blocks/special/up-and-down";

function Create(props) {
  const [ref, { height, width }] = useMeasure();
  const [result, setResult] = useState([]);
  const gameCtx = useContext(GameContext);

  const {
    pointPosition,
    setPointPosition,
    setKeyPressed,
    setKeyPressedCount,
    keyPressedCount,
  } = useContext(GameContext);

  const dynamicGridCount = 10;
  const inputString =
    "X0000ffffn0001ffffs0002ffffu0003ffffn0004ffffn0005ffffe0006ffffn0007ffftc0008ffffW0009ffffn0100ffftn0101tfftw0102ffffn0103ttftt0104ftttn0105ffffn0106ffffn0107ffffn0108tttfn0109ffffo0200tfffn0201fffff0202ffftn0203ttffn0204ftffn0205tttfV0206ffffn0207ttttv0208ffftb0209ffffn0300ttffn0301ttttF0302ffffn0303tftfn0304ttffn0305tfftn0306ffffn0307tfttn0308tttfn0309ffffn0400tttfn0401ttttx0402ffffn0403tfffn0404ffftn0405ftttT0406ffffn0407ftffn0408fttfO0409ftffn0500fftfn0501ttttX0502ftffn0503fftfn0504tfftn0505ffttn0506ftffn0507ttffn0508tftfn0509ttttn0600ffttn0601ftttn0602ftffn0603ffffn0604ffffn0605tfftn0606ffttn0607ttftn0608tftfn0609tfffn0700fttfn0701ttffn0702ttffn0703ffttn0704ttttn0705ftffn0706ftffn0707ffffn0708ftttn0709tfttn0800ffftn0801fftfn0802tfttn0803tttfn0804fttfn0805ttffn0806tfffn0807ffttn0808ftftn0809fttfn0900ttffn0901ttffn0902tttfn0903ffttn0904tttfn0905tfftn0906tttfn0907fttfn0908ftftx0909tttt";

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
  }, []);

  const gridItems = useMemo(() => {
    const componentMap = {
      n: NormalBlock,
      s: StartBlock,
      e: EndBlock,
      f: FlashingBlock,
      F: FastFlashingBlock,
      x: XFasterFlashingBlock,
      X: XFastestFlashingBlock,
      t: TeleportBlock,
      T: TeleportEndPointBlock,
      o: SecondTeleportBlock,
      O: SecondTeleportEndPointBlock,
      v: VisitBlock,
      V: VisitTargetBlock,
      w: SecondVisitBlock,
      W: SecondVisitTargetBlock,
      b: BackAndForthSpecial,
      c: CircleSpecial,
      u: UpAndDownSpecial,
    };

    return result.flatMap((row, i) =>
      row.map((cell, j) => {
        const Component = componentMap[cell.type] || NormalBlock;

        return (
          <Component
            key={`row${i}col${j}`}
            i={cell.row}
            j={cell.col}
            top={cell.top}
            right={cell.right}
            bottom={cell.bottom}
            left={cell.left}
            gridCount={dynamicGridCount}
            isSelected={false}
          />
        );
      })
    );
  }, [pointPosition, result, gameCtx.keyPressedCount]);

  return (
    <div ref={ref} className="w-full h-full">
      <div className="w-full h-[45rem]">
        <div className="w-full h-full bg-page5 grid grid-rows-6 grid-cols-1 md:grid-rows-1 md:grid-cols-12">
          <div className=" row-span-2 col-span-1 md:row-span-1 md:col-span-4 bg-pageMenu p-6">
            <div className="w-full h-full bg-page1 overflow-y-scroll">
              <div className="w-full h-[15rem] bg-page4 shadow-[inset_-24px_-16px_200px_#46464620]"></div>
              <div className="w-full h-[15rem] bg-page3 shadow-[inset_-24px_-16px_200px_#46464620]"></div>
              <div className="w-full h-[15rem] bg-page4 shadow-[inset_-24px_-16px_200px_#46464620]"></div>
              <div className="w-full h-[15rem] bg-page3 shadow-[inset_-24px_-16px_200px_#46464620]"></div>
            </div>
          </div>
          <div className="row-span-4 col-span-1 md:row-span-1 md:col-span-8 bg-page1 shadow-[inset_-24px_-16px_100px_#46464620] md:flex md:items-center md:justify-center">
            <div className="w-full h-full md:w-[90%] md:h-[90%] lg:w-[80%] lg:h-[80%] flex items-center justify-center p-5 md:p-10 lg:p-16">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] bg-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                  {result.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-page text-xl md:text-5xl text-page1 font-extrabold tracking-widest">
                        Loading...
                      </span>
                    </div>
                  )}
                  {result.length !== 0 && (
                    <Grid
                      dynamicGridCount={dynamicGridCount}
                      gridItems={gridItems}
                    />
                  )}
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
