import React, { useState, useEffect, useMemo, useContext, useRef } from "react";
import {
  starsSVG,
  bigTrophySVG,
  skullSVG,
  reflectorSVG,
} from "../../SVG/game-grid";
import Image from "next/image";
import useMeasure from "react-use-measure";
import Grid from "./grid";
import GameContext from "../../store/game-context";
import SpecialBlockContext from "../../store/special-block-context";
import NormalBlock from "./blocks/normal";
import StartBlock from "./blocks/start";
import EndBlock from "./blocks/end";
import FlashingBlock from "./blocks/flashing/flashing";
import FastFlashingBlock from "./blocks/flashing/fast-flashing";
import XFasterFlashingBlock from "./blocks/flashing/x-faster-flashing";
import XFastestFlashingBlock from "./blocks/flashing/x-fastest-flashing";
import TeleportBlock from "./blocks/teleport/teleport";
import TeleportEndPointBlock from "./blocks/teleport/teleport-end-point";
import SecondTeleportBlock from "./blocks/teleport/second-teleport";
import SecondTeleportEndPointBlock from "./blocks/teleport/second-teleport-endpoint";
import VisitBlock from "./blocks/visit/visit";
import VisitTargetBlock from "./blocks/visit/visit-target";
import SecondVisitBlock from "./blocks/visit/second-visit";
import SecondVisitTargetBlock from "./blocks/visit/second-visit-target";
import BackAndForthSpecial from "./blocks/special/back-and-forth";
import CircleSpecial from "./blocks/special/circle";
import UpAndDownSpecial from "./blocks/special/up-and-down";

const timerSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-10 h-10"
  >
    <g>
      <path
        className="stroke-pageMenu md:stroke-page1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M12 13V9m9-3l-2-2m-9-2h4m-2 19a8 8 0 110-16 8 8 0 010 16z"
      ></path>
    </g>
  </svg>
);

const controllerSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-52 h-52 md:w-96 md:h-96 fill-page1 md:fill-page1"
    viewBox="0 0 16 16"
  >
    <path d="M11.5 6.027a.5.5 0 11-1 0 .5.5 0 011 0zm-1.5 1.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm-1.5 1.5a.5.5 0 100-1 .5.5 0 000 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"></path>
    <path d="M3.051 3.26a.5.5 0 01.354-.613l1.932-.518a.5.5 0 01.62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 01.622-.399l1.932.518a.5.5 0 01.306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 01-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 01-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 01.433-.335.504.504 0 01-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 00-.748 2.295 12.351 12.351 0 00-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 00.426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 00.426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 00-.339-2.406 13.753 13.753 0 00-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"></path>
  </svg>
);

function MainGame() {
  const gameCtx = useContext(GameContext);
  const dynamicGridCount = 10;
  const inputString =
    "X0000ffffn0001ffffs0002ffffu0003ffffn0004ffffn0005ffffe0006ffffn0007ffftc0008ffffW0009ffffn0100ffftn0101tfftw0102ffffn0103ttftt0104ftttn0105ffffn0106ffffn0107ffffn0108tttfn0109ffffo0200tfffn0201fffff0202ffftn0203ttffn0204ftffn0205tttfV0206ffffn0207ttttv0208ffftb0209ffffn0300ttffn0301ttttF0302ffffn0303tftfn0304ttffn0305tfftn0306ffffn0307tfttn0308tttfn0309ffffn0400tttfn0401ttttx0402ffffn0403tfffn0404ffftn0405ftttT0406ffffn0407ftffn0408fttfO0409ftffn0500fftfn0501ttttX0502ftffn0503fftfn0504tfftn0505ffttn0506ftffn0507ttffn0508tftfn0509ttttn0600ffttn0601ftttn0602ftffn0603ffffn0604ffffn0605tfftn0606ffttn0607ttftn0608tftfn0609tfffn0700fttfn0701ttffn0702ttffn0703ffttn0704ttttn0705ftffn0706ftffn0707ffffn0708ftttn0709tfttn0800ffftn0801fftfn0802tfttn0803tttfn0804fttfn0805ttffn0806tfffn0807ffttn0808ftftn0809fttfn0900ttffn0901ttffn0902tttfn0903ffttn0904tttfn0905tfftn0906tttfn0907fttfn0908ftftx0909tttt";

  // const dynamicGridCount = 8;
  // const inputString =
  //   "s0000ffffn0001ffffn0002ffffn0003ffffc0004ttffn0005tfttn0006ftffn0007ttttn0100tftfn0101tfttn0102ffffn0103ffffn0104ffffn0105tttfn0106fftfn0107ffftt0200tftfn0201ffffn0202ffffn0203tfttn0204ffffn0205ffffn0206ttttn0207ffttn0300fftfn0301ttftn0302tfffn0303tfttn0304ffftn0305ttttn0306ttttn0307ffttn0400tfftn0401tfftn0402tfttn0403ffftn0404ffffn0405ffffn0406ttttn0407ffffn0500tfftn0501tttfn0502ftttn0503ftttn0504tftfn0505ffffn0506fftfn0507ftffn0600tfttT0601ffttn0602ffffn0603tftfn0604ttttn0605ftffn0606tfffn0607fttfn0700ttttn0701ttttn0702tftfn0703tfffn0704tftfn0705ffftn0706ffffe0707ffff";

  const timeBoundary = "0110200";

  const minutes = parseInt(timeBoundary.substring(0, 2), 10);
  const seconds = parseInt(timeBoundary.substring(2, 4), 10);
  const milliseconds = parseInt(timeBoundary.substring(4), 10);
  const totalTimeInMs = minutes * 60 * 1000 + seconds * 1000 + milliseconds;
  const [timeLeft, setTimeLeft] = useState(totalTimeInMs);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [finishTime, setFinishTime] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (hasTimerStarted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 10;
          if (newTime <= 0) {
            clearInterval(timerRef.current);
            gameCtx.setIsGameOver(true);
            return 0;
          }
          return newTime;
        });
      }, 10);
    }

    return () => clearInterval(timerRef.current);
  }, [hasTimerStarted]);

  useEffect(() => {
    if (gameCtx.win || gameCtx.isGameOver) {
      setFinishTime(totalTimeInMs - timeLeft);
      clearInterval(timerRef.current);
    }
  }, [gameCtx.win, gameCtx.isGameOver, totalTimeInMs, timeLeft]);

  const formatTimeLeft = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  };

  const [ref, { height, width }] = useMeasure();
  const {
    pointPosition,
    setPointPosition,
    setKeyPressed,
    setKeyPressedCount,
    keyPressedCount,
  } = useContext(GameContext);
  const specialBlockCtx = useContext(SpecialBlockContext);
  const [result, setResult] = useState([]);

  // ------------------Initialize grid--------------------

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

  // ------------------Moving logic---------------------

  useEffect(() => {
    if (gameCtx.win) {
      return;
    }
    if (gameCtx.isGameOver) {
      return;
    }
    if (specialBlockCtx.specialMode) {
      return;
    }
    const handleKeyDown = (e) => {
      if (
        !hasTimerStarted &&
        (e.key === "ArrowUp" ||
          e.key === "ArrowDown" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "w" ||
          e.key === "a" ||
          e.key === "s" ||
          e.key === "d")
      ) {
        setHasTimerStarted(true);
      }
      let newPosition = { ...pointPosition };
      switch (e.key) {
        case "ArrowUp":
        case "w":
          newPosition.y = Math.max(0, newPosition.y - 1);
          setKeyPressed("up");
          setKeyPressedCount();
          break;
        case "ArrowDown":
        case "s":
          newPosition.y = Math.min(dynamicGridCount - 1, newPosition.y + 1);
          setKeyPressed("down");
          setKeyPressedCount();
          break;
        case "ArrowLeft":
        case "a":
          newPosition.x = Math.max(0, newPosition.x - 1);
          setKeyPressed("left");
          setKeyPressedCount();
          break;
        case "ArrowRight":
        case "d":
          newPosition.x = Math.min(dynamicGridCount - 1, newPosition.x + 1);
          setKeyPressed("right");
          setKeyPressedCount();
          break;
        default:
          return;
      }
      setPointPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    pointPosition,
    setPointPosition,
    setKeyPressed,
    specialBlockCtx,
    gameCtx.win,
    gameCtx.isGameOver,
  ]);

  // if(result.length !== 0) {
  //   console.log(gameCtx.grid)
  // }

  // ------------------Generate string------------------

  // function getRandomLetter() {
  //   const letters = ["s", "e", "n"];
  //   const randomIndex = Math.floor(Math.random() * letters.length);
  //   return letters[randomIndex];
  // }

  // function getRandomTF() {
  //   const options = ["t", "f"];
  //   const randomIndex = Math.floor(Math.random() * options.length);
  //   return options[randomIndex];
  // }

  // function generateString() {
  //   let result = "";
  //   for (let i = 0; i < dynamicGridCount; i++) {
  //     for (let j = 0; j < dynamicGridCount; j++) {
  //       const gridNumber1 = i.toString().padStart(2, "0");
  //       const gridNumber2 = j.toString().padStart(2, "0");
  //       const randomLetter = getRandomLetter();
  //       const randomTF1 = getRandomTF();
  //       const randomTF2 = getRandomTF();
  //       const randomTF3 = getRandomTF();
  //       const randomTF4 = getRandomTF();

  //       result += `${randomLetter}${gridNumber1}${gridNumber2}${randomTF1}${randomTF2}${randomTF3}${randomTF4}`;
  //     }
  //   }
  //   return result;
  // }

  // const generatedString = generateString();
  // console.log(generatedString);

  // ------------------Parse string------------------

  // function parseString(inputString) {
  //   const twoDimensionalArray = [];
  //   for (let i = 0; i < dynamicGridCount; i++) {
  //     twoDimensionalArray[i] = [];
  //     for (let j = 0; j < dynamicGridCount; j++) {
  //       function getSubstring(inputString, i, j, dynamicGridCount) {
  //         const index = i * dynamicGridCount + j;
  //         return inputString.slice(index * 9, index * 9 + 9);
  //       }

  //       const substring = getSubstring(inputString, i, j, dynamicGridCount);

  //       const type = substring[0];
  //       const row = parseInt(substring.slice(1, 3), 10);
  //       const col = parseInt(substring.slice(3, 5), 10);
  //       const top = substring[5];
  //       const right = substring[6];
  //       const bottom = substring[7];
  //       const left = substring[8];

  //       let top_fixed;
  //       if (i - 1 < 0) {
  //         top_fixed = true;
  //       } else {
  //         const blockAboveSubstring = getSubstring(
  //           inputString,
  //           i - 1,
  //           j,
  //           dynamicGridCount
  //         );
  //         const checkBlockAboveBottomBorder = blockAboveSubstring[7];
  //         top_fixed = top === "t" || checkBlockAboveBottomBorder === "t";
  //       }

  //       let right_fixed;
  //       if (j + 1 >= dynamicGridCount) {
  //         right_fixed = true;
  //       } else {
  //         const blockOnTheRightSubstring = getSubstring(
  //           inputString,
  //           i,
  //           j + 1,
  //           dynamicGridCount
  //         );
  //         const checkBlockOnTheRightLeftBorder = blockOnTheRightSubstring[8];
  //         right_fixed = right === "t" || checkBlockOnTheRightLeftBorder === "t";
  //       }

  //       let bottom_fixed;
  //       if (i + 1 >= dynamicGridCount) {
  //         bottom_fixed = true;
  //       } else {
  //         const blockUnderneathSubstring = getSubstring(
  //           inputString,
  //           i + 1,
  //           j,
  //           dynamicGridCount
  //         );
  //         const checkBlockUnderneathTopBorder = blockUnderneathSubstring[5];
  //         bottom_fixed =
  //           bottom === "t" || checkBlockUnderneathTopBorder === "t";
  //       }

  //       let left_fixed;
  //       if (j - 1 < 0) {
  //         left_fixed = true;
  //       } else {
  //         const blockOnTheLeftSubstring = getSubstring(
  //           inputString,
  //           i,
  //           j - 1,
  //           dynamicGridCount
  //         );
  //         const checkBlockOnTheLeftRightBorder = blockOnTheLeftSubstring[6];
  //         left_fixed = left === "t" || checkBlockOnTheLeftRightBorder === "t";
  //       }

  //       const cell = {
  //         type,
  //         row,
  //         col,
  //         top: top_fixed,
  //         right: right_fixed,
  //         bottom: bottom_fixed,
  //         left: left_fixed,
  //       };

  //       twoDimensionalArray[i][j] = cell;
  //     }
  //   }

  //   // gameCtx.setGrid(twoDimensionalArray);

  //   return twoDimensionalArray;
  // }

  // 8x8
  // const result = parseString(
  //   "s0000ttffn0001tfffn0002fftte0003tttfe0004ttffe0005tftts0006ftffs0007tttts0100tftfn0101tfttn0102fttts0103ffffe0104fftts0105tttfs0106fftfn0107ffftn0200tftfn0201tttte0202tfffs0203tftte0204ttffs0205fttte0206ttttn0207fftts0300fftfe0301ttfts0302tfffe0303tfttn0304fffts0305tttte0306ttttn0307fftte0400tffte0401tfftn0402tftts0403fffts0404fttts0405ttftn0406ttttn0407ffffn0500tfftn0501tttfe0502fttts0503ftttn0504tftfs0505ftttn0506fftfe0507ftffe0600tftte0601fftts0602ffffs0603tftfe0604tttte0605ftffn0606tfffs0607fttfs0700ttttn0701ttttn0702tftfs0703tfffe0704tftfs0705fffte0706ftffs0707ffft"
  // );
  // 12x12
  // const result = parseString(
  //   "n0000tfffn0001tfffe0002tftfs0003fttfn0004tfttn0005fftfe0006tftfn0007tfffs0008tftts0009tttfn0010tfffe0011tfffn0100tffte0101tffts0102ffffe0103ffffe0104fftte0105fftfn0106tfttn0107ffftn0108tftts0109tftfs0110fttte0111fffte0200tftfe0201tffte0202fftfn0203ftffs0204ffttn0205fttfn0206ftfts0207ffffs0208tttte0209fttfn0210ttttn0211tfffn0300ttfte0301tttfe0302fttte0303ftttn0304tfttn0305ttffs0306fffte0307ttffn0308tttfs0309ttttn0310tfffn0311tfffn0400tffts0401ftttn0402ffffn0403fffts0404ftftn0405tftfe0406tfftn0407tfffs0408ffffe0409ftfts0410ftffe0411ttffs0500ftfte0501fffts0502fttts0503fftfe0504ttttn0505ffftn0506ffffn0507ffffs0508fttfs0509tttts0510ffffn0511tttts0600fttfs0601ftftn0602fftfn0603tftfe0604fftfn0605ttffe0606fttfn0607tttfs0608tfftn0609fttfs0610ftftn0611ftffn0700ttttn0701ftftn0702ttfts0703ffffs0704fttfs0705tttfn0706tftts0707ffffn0708tfffs0709tttts0710fttfs0711ttfts0800tftte0801ftfts0802ttffs0803ftffn0804tftfe0805fttfn0806ttfte0807fttfn0808fftte0809ffftn0810tttfn0811tttte0900ttfts0901ttfts0902fftfn0903fffte0904ftffe0905ftfte0906tttte0907fttfs0908ttttn0909ftftn0910tttfn0911fttfe1000ttfts1001ttfts1002fttts1003fftfs1004fftfs1005fttte1006tttfs1007tfffs1008tftte1009tfffn1010tffts1011tftts1100ttfts1101fttfe1102tfttn1103tttfn1104tftte1105tfttn1106ttfts1107ttffe1108ftffs1109fftts1110ffffe1111ttft"
  // );
  // 10x10
  // const result = parseString(
  //   "s0000tttte0001fttfn0002tftte0003tfffs0004fttfn0005ffffe0006ffffn0007ftfte0008ffttn0009ffffn0100fffts0101tftts0102ftttn0103ttfts0104fttte0105ftffs0106fttfe0107ffffn0108tttfs0109ffffe0200tfffn0201ftfte0202ttfts0203ttffn0204ftffn0205tttfs0206ffffn0207tttts0208fffts0209fftte0300ttffn0301tttte0302fttte0303tftfe0304ttffe0305tfftn0306fttts0307tfttn0308tttfn0309tftfs0400tttfn0401tttts0402tfttn0403tfffe0404fffts0405fttts0406ttffs0407ftffs0408fttfe0409ftffn0500fftfe0501tttte0502ftffs0503fftfs0504tffts0505ffttn0506ftffe0507ttffs0508tftfe0509tttts0600fftte0601fttts0602ftffn0603ffffs0604ffffs0605tffte0606fftts0607ttfte0608tftfn0609tfffn0700fttfe0701ttffe0702ttffn0703fftts0704tttte0705ftffn0706ftffn0707ffffe0708fttts0709tfttn0800fffte0801fftfs0802tftts0803tttfn0804fttfs0805ttffs0806tfffe0807fftte0808ftfts0809fttfn0900ttffe0901ttffn0902tttfe0903ffttn0904tttfe0905tfftn0906tttfe0907fttfn0908ftfts0909tttt"
  // );
  // 14x14
  // const result = parseString(
  //   "n0000ffftn0001fftfe0002fffts0003fftte0004ftttn0005ttftn0006fttts0007tffts0008tftte0009tttts0010ffffs0011ftfts0012ftfte0013ffffe0100ttffe0101fttfn0102fttfe0103ffttn0104fftts0105ftftn0106fttfe0107ttftn0108ttftn0109tfffe0110tfttn0111ttftn0112fftts0113tfffe0200fttte0201fftte0202ttffn0203fffte0204ttfts0205ttfte0206ftfts0207ftftn0208ffttn0209tffts0210fftfn0211fttfe0212tttfe0213fffts0300ffffn0301tftfn0302ffffs0303tttfn0304fftfs0305ftttn0306ttffs0307fftfs0308fffte0309tttfn0310tttts0311ftffn0312ttftn0313ftfts0400fftfs0401tffte0402ftttn0403tttts0404tffte0405ftffs0406ffffn0407tttts0408tftfe0409ftttn0410ttffe0411tttfe0412ffftn0413ttttn0500tftfe0501fttte0502fftfs0503tfffe0504fttfn0505ffffs0506tftte0507fftte0508tttts0509ffffs0510tftfs0511tttfn0512ttffn0513ttffs0600tffts0601tttfn0602tffte0603tftfs0604tttfs0605tffts0606fttfn0607tftte0608ttffs0609ffffe0610tftts0611tfftn0612ffffe0613ftffe0700tttte0701tttts0702ttffe0703fttte0704tftte0705tftfe0706ttfte0707ffffs0708fttte0709ffffe0710fftfe0711ftffn0712tffte0713ffftn0800ttffs0801tftfs0802tttfe0803ffffe0804ffffs0805ttffe0806tttfn0807ffffs0808ttffe0809tfttn0810tftfs0811ftfts0812tttte0813tttfe0900tffte0901ftffe0902tttfn0903ttfte0904ffffn0905ttttn0906fftfs0907ftttn0908fftfe0909ffftn0910ffffe0911tfffn0912fttfs0913ttftn1000tfffs1001ftfts1002ffffe1003ttffn1004tfffe1005fftts1006tttfn1007ftttn1008tttte1009tffts1010ffffs1011tffts1012ffftn1013tttfn1100fftfn1101tttfs1102ttfts1103tfttn1104ffttn1105tfftn1106fttfn1107fftts1108fftts1109tttfe1110tftts1111tfffn1112fttfn1113ftfts1200tfftn1201fftfs1202tftts1203ftffn1204fftts1205fttfe1206fttte1207fftfe1208fftte1209tffte1210ftffe1211ffffe1212fttfs1213ttftn1300ftffn1301ffffn1302tffte1303ftffs1304fttfs1305tfttn1306fffts1307fftte1308ttffe1309fffte1310tttfs1311ttffs1312ffftn1313ftft"
  // );
  // const result = parseString(generatedString);
  // console.log(result);

  // ------------------Create grid------------------

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
            isSelected={i === pointPosition.y && j === pointPosition.x}
          />
        );
      })
    );
  }, [pointPosition, result, gameCtx.keyPressedCount]);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className="w-full h-screen relative bg-page4 overflow-y-scroll"
      >
        <div
          className={`absolute w-full ${
            height > 710 ? "h-full" : "h-[43rem]"
          } grid col-span-2 row-span-6 md:grid-cols-12 md:grid-rows-1 bg-page1 border-2 border-pageMenu shadow-xl`}
        >
          <div className="relative order-2 col-span-1 row-span-2 md:order-1 md:col-span-3 border-2 border-pageMenu">
            <div className="absolute w-full h-full bg-page2 md:bg-pageMenu overflow-hidden">
              <div className="w-full h-full absolute flex items-end justify-center left-44 md:left-28 lg:left-44 max-[660px]:opacity-0">
                {controllerSVG}
              </div>
              <div className="absolute max-[660px]:w-full w-[65%] h-full md:w-full md:h-[60%] lg:w-full lg:h-[50%] border-2 border-page1">
                <div className="pt-3 flex items-center justify-center">
                  <span className="font-page md:text-page1 text-pageMenu tracking-wider text-3xl font-extrabold">
                    TIMER
                  </span>
                  <span>{timerSVG}</span>
                </div>
                <span className="w-full flex justify-center font-page text-pageMenu md:text-page1 tracking-wider text-3xl font-extrabold">
                  {formatTimeLeft(timeLeft)}
                </span>
              </div>
              {/* <span className="block">{keyPressedCount}</span> */}
              {/* <span className="block">
                {specialBlockCtx.specialMode
                  ? "special mode: true"
                  : "special mode: false"}
              </span> */}
              {/* <span className="block">TIMER: {formatTimeLeft(timeLeft)}</span> */}
              {/* {finishTime && (
                <span className="block">
                  FINISH TIME: {formatTimeLeft(finishTime)}
                </span>
              )} */}
              {/* <span>Did win?: {gameCtx.win ? "true" : "false"}</span> */}
            </div>
          </div>
          <div className="order-1 col-span-2 row-span-4 md:order-2 md:col-span-6 border-2 border-pageMenu flex items-center justify-center p-5 md:p-10 lg:p-16">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] bg-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                {specialBlockCtx.specialMode && (
                  <div className="absolute z-50 w-full h-full flex items-center justify-center border-pageMenu">
                    <div className="absolute w-full h-full overflow-hidden">
                      <div className="w-full h-full absolute rotate-[100deg] bottom-5">
                        {reflectorSVG("fill-pageMenu")}
                      </div>
                    </div>
                    <div className="w-[50%] h-[50%] flex items-center justify-center bg-pageMenu shadow-[rgba(0,_0,_0,_0.8)_0px_60px_180px] z-50">
                      {specialBlockCtx.gameComponent}
                    </div>
                  </div>
                )}
                {gameCtx.win && (
                  <div className="absolute z-50 w-full h-full bg-page1 brightness-[15%] mix-blend-multiply">
                    <div className="w-full h-full absolute overflow-hidden">
                      <div className="w-full h-full absolute left-10 rotate-[80deg] top-2 lg:top-5">
                        {reflectorSVG("fill-pageMenu")}
                      </div>
                    </div>
                    <div className="w-full h-full absolute flex items-start justify-center rotate-[-10deg] top-10 -left-20">
                      {bigTrophySVG}
                    </div>
                  </div>
                )}
                {gameCtx.win && (
                  <div className="w-full h-full absolute flex items-center justify-center">
                    <div className="w-full h-full relative flex items-center justify-center">
                      <div className="w-[75%] h-[50%] border-8 border-page1 bg-page2 absolute z-50 drop-shadow-[0_10.5px_10.5px_rgba(0,0,0,5.2)] rounded-3xl">
                        <div className="absolute z-50 w-full flex-col flex justify-center items-center pt-2 drop-shadow-[0_5px_5px_rgba(0,0,0,2.2)]">
                          <div className="bg-page1 w-[90%] rounded-3xl px-2 font-page text-xs md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-widest flex items-center justify-center py-2">
                            <div className="pr-2 animate-pulse">{starsSVG}</div>
                            <span>YOU WIN!</span>
                            <div className="pr-2 rotate-180 animate-pulse">
                              {starsSVG}
                            </div>
                          </div>
                          <div className="mt-2 flex-col bg-page1 w-[90%] rounded-3xl px-2 font-page text-xs md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-widest flex items-center justify-center py-2">
                            <span>FINISH TIME:</span>
                            <span>{formatTimeLeft(finishTime)}</span>
                          </div>
                        </div>
                        <div className="absolute w-full h-full bg-page1 rounded-2xl overflow-hidden opacity-100">
                          <Image
                            src={"/blobs.png"}
                            alt="Image"
                            placeholder="blur"
                            height={1000}
                            width={2400}
                            blurDataURL={"/blobs.png"}
                          />
                        </div>
                        {/* <div className="w-full h-[50%] sm:h-[60%] lg:h-[65%] bg-page4 brightness-90">
                          <span className="pt-5 flex items-center justify-center font-page text-xs md:text-base lg:text-xl text-pageMenu font-extrabold tracking-widest">
                            your time: {formatTimeLeft(finishTime)}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                )}
                {gameCtx.isGameOver && (
                  <div className="w-full h-full absolute flex items-center justify-center">
                    <div className="w-full h-full relative flex items-center justify-center">
                      <span className="p-2 rounded-lg bg-page1 absolute z-50 font-page text-3xl md:text-2xl lg:text-5xl text-pageMenu font-extrabold tracking-widest drop-shadow-[0_10.5px_10.5px_rgba(0,0,0,5.2)]">
                        you lose...
                      </span>
                    </div>
                  </div>
                )}
                {gameCtx.isGameOver && (
                  <div className="absolute z-50 w-full h-full bg-pageMenu mix-blend-multiply">
                    <div className="w-full h-full absolute overflow-hidden">
                      <div className="w-full h-full absolute right-5 rotate-[20deg] top-2 lg:top-5">
                        {reflectorSVG("fill-page2")}
                      </div>
                    </div>
                    <div className="w-full h-full absolute flex items-end justify-center rotate-[-10deg] -top-2">
                      {skullSVG}
                    </div>
                  </div>
                )}
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
          <div className="relative order-2 col-span-1 row-span-2 md:order-3 md:col-span-3 border-2 border-pageMenu">
            {/* {pointPosition.x}
              {pointPosition.y} */}
            <div className="absolute w-full h-full bg-page3 md:bg-pageMenu overflow-hidden">
              <div className="w-full h-full absolute flex items-end justify-center right-44 md:right-28 lg:right-44 max-[660px]:opacity-0">
                {controllerSVG}
              </div>
              <div className="absolute max-[660px]:w-full w-[65%] h-full md:w-full md:h-[60%] lg:w-full lg:h-[50%] border-2 border-page1 right-0">
                <span className="block">
                  {gameCtx.isGameOver ? "game over" : "play"}
                </span>
              </div>

              {/* <span className="block">{gameCtx.keyPressed}</span> */}
              {/* <span className="block">
                {gameCtx.isGameOver ? "game over" : "play"}
              </span> */}
              {/* <span className="block">{keyPressedCount}</span> */}
              {/* <span className="block">
                {specialBlockCtx.specialMode
                  ? "special mode: true"
                  : "special mode: false"}
              </span> */}
              {/* <span className="block">TIMER: {formatTimeLeft(timeLeft)}</span> */}
              {/* {finishTime && (
                <span className="block">
                  FINISH TIME: {formatTimeLeft(finishTime)}
                </span>
              )} */}
              {/* <span>Did win?: {gameCtx.win ? "true" : "false"}</span> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainGame;
