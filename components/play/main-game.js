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
import NotificationContext from "../../store/notification-context";
import { useRouter } from "next/router";
import {
  timerSVG,
  controllerSVG,
  keyboardSVG,
  lightningSVG,
} from "../../SVG/game-grid";

const littleStarSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-full h-full rotate-12"
  >
    <path
      className="stroke-pageMenu"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M11.27 4.411c.23-.52.346-.779.508-.859a.5.5 0 01.444 0c.161.08.277.34.508.86l1.845 4.136c.068.154.102.23.155.29a.5.5 0 00.168.121c.072.032.156.041.323.059l4.505.475c.565.06.848.09.974.218a.5.5 0 01.137.423c-.026.178-.237.368-.66.75l-3.364 3.031c-.125.113-.188.17-.227.238a.5.5 0 00-.064.197c-.009.079.009.161.044.326l.94 4.43c.117.557.176.835.093.994a.5.5 0 01-.36.261c-.177.03-.423-.111-.916-.396l-3.924-2.263c-.145-.084-.218-.126-.295-.142a.502.502 0 00-.208 0c-.078.017-.15.058-.296.142l-3.923 2.263c-.493.285-.74.427-.917.396a.5.5 0 01-.36-.26c-.083-.16-.024-.438.094-.995l.94-4.43c.035-.165.052-.247.044-.326a.5.5 0 00-.064-.197c-.04-.069-.102-.125-.227-.238l-3.365-3.032c-.422-.38-.633-.57-.66-.749a.5.5 0 01.138-.423c.126-.128.409-.158.974-.218l4.504-.475c.168-.018.251-.027.323-.059a.5.5 0 00.168-.122c.053-.059.088-.135.156-.289l1.844-4.137z"
    ></path>
  </svg>
);

const levelReflectorSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000"
    version="1.1"
    viewBox="0 0 289.717 289.717"
    xmlSpace="preserve"
    className="w-full h-auto lg:h-full lg:w-auto"
  >
    <path
      className="fill-pageMenu"
      d="M143.157 116.859v18.233c0 14.623-11.855 26.479-26.478 26.479-14.623 0-26.479-11.855-26.479-26.479V90.057c-25.448-9.834-54.731.941-67.451 25.759l-.001.001c-13.602 26.537-3.115 59.076 23.422 72.678l87.438 44.817 49.258-96.1-39.709-20.353zM271.077 163.582a16.851 16.851 0 00-12.454-8.985l-59.656-9.131-49.255 96.099 42.245 43.098a16.85 16.85 0 0027.03-4.11L271.07 178.94a16.85 16.85 0 00.007-15.358z"
    ></path>
    <path
      className="fill-pageMenu"
      d="M116.678 148.332c7.312 0 13.239-5.928 13.239-13.239V13.239C129.917 5.928 123.99 0 116.678 0c-7.312 0-13.239 5.928-13.239 13.239v121.854c0 7.311 5.927 13.239 13.239 13.239z"
    ></path>
  </svg>
);

const leaderboardSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000"
    className="h-full pb-1 md:h-[60%] md:pl-1"
    data-name="Line Color"
    viewBox="0 0 24 24"
  >
    <path
      className="stroke-pageMenu"
      fill="none"
      stroke="#2CA9BC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.54 3.94L10.5 4.09 11.25 4.82 11.07 5.85 12 5.37 12.93 5.85 12.75 4.82 13.5 4.09 12.46 3.94 12 3 11.54 3.94z"
    ></path>
    <path
      className="stroke-pageMenu"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 21H3v-5h6zm6-11H9v11h6zm6 4h-6v7h6z"
    ></path>
  </svg>
);

function MainGame(props) {
  const gameCtx = useContext(GameContext);
  const router = useRouter();
  const { seedId } = router.query;

  const dynamicGridCount = props.dynamicGridCount;
  const inputString = props.inputString;
  const timeBoundary = props.timeBoundary;

  const notificationCtx = useContext(NotificationContext);

  // console.log(props.mapObject)
  const leaderboard = props.mapObject.leaderboard;

  // const dynamicGridCount = 10;
  // const inputString =
  //   "X0000ffffn0001ffffs0002ffffu0003ffffn0004ffffn0005ffffe0006ffffn0007ffftc0008ffffW0009ffffn0100ffftn0101tfftw0102ffffn0103ttftt0104ftttn0105ffffn0106ffffn0107ffffn0108tttfn0109ffffo0200tfffn0201fffff0202ffftn0203ttffn0204ftffn0205tttfV0206ffffn0207ttttv0208ffftb0209ffffn0300ttffn0301ttttF0302ffffn0303tftfn0304ttffn0305tfftn0306ffffn0307tfttn0308tttfn0309ffffn0400tttfn0401ttttx0402ffffn0403tfffn0404ffftn0405ftttT0406ffffn0407ftffn0408fttfO0409ftffn0500fftfn0501ttttX0502ftffn0503fftfn0504tfftn0505ffttn0506ftffn0507ttffn0508tftfn0509ttttn0600ffttn0601ftttn0602ftffn0603ffffn0604ffffn0605tfftn0606ffttn0607ttftn0608tftfn0609tfffn0700fttfn0701ttffn0702ttffn0703ffttn0704ttttn0705ftffn0706ftffn0707ffffn0708ftttn0709tfttn0800ffftn0801fftfn0802tfttn0803tttfn0804fttfn0805ttffn0806tfffn0807ffttn0808ftftn0809fttfn0900ttffn0901ttffn0902tttfn0903ffttn0904tttfn0905tfftn0906tttfn0907fttfn0908ftftx0909tttt";
  // const inputString = props.seed;
  // const dynamicGridCount = 8;
  // const inputString =
  //   "s0000ffffn0001ffffn0002ffffn0003ffffc0004ttffn0005tfttn0006ftffn0007ttttn0100tftfn0101tfttn0102ffffn0103ffffn0104ffffn0105tttfn0106fftfn0107ffftt0200tftfn0201ffffn0202ffffn0203tfttn0204ffffn0205ffffn0206ttttn0207ffttn0300fftfn0301ttftn0302tfffn0303tfttn0304ffftn0305ttttn0306ttttn0307ffttn0400tfftn0401tfftn0402tfttn0403ffftn0404ffffn0405ffffn0406ttttn0407ffffn0500tfftn0501tttfn0502ftttn0503ftttn0504tftfn0505ffffn0506fftfn0507ftffn0600tfttT0601ffttn0602ffffn0603tftfn0604ttttn0605ftffn0606tfffn0607fttfn0700ttttn0701ttttn0702tftfn0703tfffn0704tftfn0705ffftn0706ffffe0707ffff";

  // const timeBoundary = "0110200";

  const minutes = parseInt(timeBoundary.substring(0, 2), 10);
  const seconds = parseInt(timeBoundary.substring(2, 4), 10);
  const milliseconds = parseInt(timeBoundary.substring(4), 10);
  const totalTimeInMs = minutes * 60 * 1000 + seconds * 1000 + milliseconds;
  const [timeLeft, setTimeLeft] = useState(totalTimeInMs);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [finishTime, setFinishTime] = useState(null);
  const timerRef = useRef(null);

  // const [initializeGrid, setInitializeGrid] = useState(0);

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

  const handleRestart = () => {
    props.onRestart();
  };

  // ------------------Sending win--------------------
  useEffect(() => {
    if (gameCtx.win) {
      const newFinishTime = totalTimeInMs - timeLeft;
      setFinishTime(newFinishTime);
      clearInterval(timerRef.current);

      // Wywołaj sendData bezpośrednio po ustawieniu czasu zakończenia
      const formattedFinishTime = formatTimeLeft(newFinishTime);
      const sendData = async () => {
        try {
          const response = await fetch(`/api/player/${seedId}`, {
            method: "POST",
            body: JSON.stringify({
              formattedFinishTime,
              simpleFinishTime: newFinishTime,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }

          const data = await response.json();
          console.log("Data response:", data);

          if (data.shouldShowNotif) {
            notificationCtx.showNotification({
              title: "Success!",
              message: `New record: ${formattedFinishTime}`,
              status: "success",
            });
          }
          router.replace("/play");
        } catch (error) {
          console.error("Error submitting data:", error);
          notificationCtx.showNotification({
            title: "Error!",
            message: "Something went wrong...",
            status: "error",
          });
        }
      };

      sendData();
      // gameCtx.setWin(false);
    }
  }, [gameCtx.win, totalTimeInMs, timeLeft, seedId]);

  function formatTimeString(timeString) {
    return `${timeString.substring(0, 2)}:${timeString.substring(
      2,
      4
    )}.${timeString.substring(4)}`;
  }

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
          <div className="relative order-2 col-span-1 row-span-2 md:order-1 md:col-span-3 md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="absolute w-full h-full overflow-hidden">
              <div className="w-full h-full absolute flex items-end justify-center left-44 md:left-28 lg:left-44 max-[660px]:opacity-0">
                {controllerSVG}
              </div>
              <div className="absolute max-[660px]:w-full w-[65%] h-full md:w-full md:h-[50%] lg:w-full lg:h-[50%] bg-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                <div className="pt-3 flex items-center justify-center">
                  <span className="font-page text-page1 tracking-wider text-3xl font-extrabold">
                    TIMER
                  </span>
                  <span>{timerSVG}</span>
                </div>
                <span className="w-full flex justify-center font-page text-page1 tracking-wider text-3xl font-extrabold bg-page3 md:bg-page4">
                  {formatTimeLeft(timeLeft)}
                </span>
                <div className="w-full h-32 md:h-64">
                  <div className="w-full h-full p-5">
                    <div className="w-full h-full bg-pageBlack relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                      <div className="absolute w-full h-5 md:h-12 bg-page2 font-page text-pageMenu tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center">
                        Leaderboard {leaderboardSVG}
                      </div>
                      <div className="w-full h-[calc(100%-20px)] md:h-[calc(100%-48px)] absolute bottom-0 bg-page2">
                        <div className="w-full h-full relative">
                          <div className="w-full h-5 md:h-12 bg-page4 absolute top-0 font-page text-pageMenu tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center underline truncate shadow-lg">
                            <div className="absolute left-0 h-full aspect-square bg-pageMenu ml-1">
                              <p className="w-full h-full font-page text-page1 tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center">
                                1
                              </p>
                            </div>
                            <p className="truncate mr-3 ml-8 md:ml-16">
                              {leaderboard.find((item) => item.place === 1) ? (
                                <React.Fragment>
                                  {formatTimeString(
                                    leaderboard.find((item) => item.place === 1)
                                      .time
                                  )}{" "}
                                  -{" "}
                                  {
                                    leaderboard.find((item) => item.place === 1)
                                      .leaderUsername
                                  }
                                </React.Fragment>
                              ) : (
                                "XXX"
                              )}
                            </p>
                          </div>
                          <div className="w-full h-full absolute flex items-center">
                            <div className="w-full h-5 md:h-12 bg-page4 absolute font-page text-pageMenu tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center underline truncate shadow-lg">
                              <div className="absolute left-0 h-full aspect-square bg-pageMenu ml-1">
                                <p className="w-full h-full font-page text-page1 tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center">
                                  2
                                </p>
                              </div>
                              <p className="truncate mr-3 ml-8 md:ml-16">
                                {leaderboard.find(
                                  (item) => item.place === 2
                                ) ? (
                                  <React.Fragment>
                                    {formatTimeString(
                                      leaderboard.find(
                                        (item) => item.place === 2
                                      ).time
                                    )}{" "}
                                    -{" "}
                                    {
                                      leaderboard.find(
                                        (item) => item.place === 2
                                      ).leaderUsername
                                    }
                                  </React.Fragment>
                                ) : (
                                  "XXX"
                                )}
                                {/* {formatTimeString(
                                  leaderboard.find((item) => item.place === 2)
                                    .time
                                )}{" "}
                                -{" "}
                                {
                                  leaderboard.find((item) => item.place === 2)
                                    .leaderUsername
                                } */}
                              </p>
                            </div>
                          </div>
                          <div className="w-full h-5 md:h-12 bg-page4 absolute bottom-0 font-page text-pageMenu tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center underline truncate shadow-lg">
                            <div className="absolute left-0 h-full aspect-square bg-pageMenu ml-1">
                              <p className="w-full h-full font-page text-page1 tracking-wider  md:text-base text-xs font-extrabold flex items-center justify-center">
                                3
                              </p>
                            </div>
                            <p className="truncate mr-3 ml-8 md:ml-16">
                              {leaderboard.find((item) => item.place === 3) ? (
                                <React.Fragment>
                                  {formatTimeString(
                                    leaderboard.find((item) => item.place === 3)
                                      .time
                                  )}{" "}
                                  -{" "}
                                  {
                                    leaderboard.find((item) => item.place === 3)
                                      .leaderUsername
                                  }
                                </React.Fragment>
                              ) : (
                                "XXX"
                              )}

                              {/* {formatTimeString(
                                leaderboard.find((item) => item.place === 3)
                                  .time
                              )}{" "}
                              -{" "}
                              {
                                leaderboard.find((item) => item.place === 3)
                                  .leaderUsername
                              } */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 col-span-2 row-span-4 md:order-2 md:col-span-6 flex items-center justify-center p-5 md:p-10 lg:p-16">
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
          <div className="relative order-2 col-span-1 row-span-2 md:order-3 md:col-span-3 md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="absolute w-full h-full overflow-hidden ">
              <div className="w-full h-full absolute flex items-end justify-center right-44 md:right-28 lg:right-44 max-[660px]:opacity-0">
                {controllerSVG}
              </div>
              <div className="absolute max-[660px]:w-full w-[65%] h-full md:w-full md:h-[50%] lg:w-full lg:h-[50%] right-0 bg-page4 sm:bg-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                {!hasTimerStarted && (
                  <div className="pt-3 flex flex-col items-center justify-center w-full relative">
                    <div className="font-page text-page1 tracking-wider text-3xl font-extrabold flex flex-col items-center justify-center text-center animate-pulse">
                      <span>MOVE TO</span>
                      <div className="flex">
                        <span>START</span>
                        <span className="pl-3">{keyboardSVG}</span>
                      </div>
                    </div>
                  </div>
                )}
                {hasTimerStarted && !gameCtx.isGameOver && (
                  <div className="pt-3 flex flex-col items-center justify-center w-full relative">
                    <div className="font-page text-page1 tracking-wider text-3xl font-extrabold flex flex-col items-center justify-center text-center">
                      <span>GOOD</span>
                      <div className="flex">
                        <span>LUCK</span>
                        <span className="pl-2">{lightningSVG}</span>
                      </div>
                    </div>
                  </div>
                )}
                {gameCtx.isGameOver && (
                  <div className="pt-3 flex flex-col items-center justify-center w-full relative">
                    <div className="font-page text-page1 tracking-wider text-3xl font-extrabold flex flex-col items-center justify-center text-center">
                      <span>YOU LOSE!</span>
                      <span className="mx-1">
                        PRESS <span className="animate-pulse">"P"</span> TO
                      </span>
                      <span
                        className="bg-pageMenu sm:bg-page5 p-1 hover:scale-110 hover:animate-pulse duration-100 hover:cursor-pointer active:scale-95"
                        onClick={handleRestart}
                      >
                        TRY AGAIN
                      </span>
                    </div>
                  </div>
                )}
                {!gameCtx.isGameOver && (
                  <div className="opacity-0 md:opacity-100 w-full h-full p-5">
                    <div className="relative w-full h-[70%] bg-page2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                      <div className="absolute w-[60%] h-[60%]">
                        {levelReflectorSVG}
                      </div>
                      <div className="absolute w-full h-[40%] bottom-0">
                        <div className=" font-page text-page1 tracking-wider text-3xl lg:text-5xl font-extrabold flex flex-col items-center justify-center text-center ml-10 lg:ml-24">
                          <div className="bg-pageMenu p-1">lvl 1</div>
                        </div>
                      </div>
                      <div className="absolute w-14 h-14 right-2 top-2 animate-scale-swing-rotate">
                        {littleStarSVG}
                      </div>
                      <div className="absolute w-14 h-14 left-2 bottom-2 animate-scale-swing-rotate">
                        {littleStarSVG}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainGame;
