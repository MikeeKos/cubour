import React, { useState, useEffect, useMemo, useContext } from "react";
import useMeasure from "react-use-measure";
// import Block from "./blocks/block";
import Grid from "./grid";
import GameContext from "../../store/game-context";
import NormalBlock from "./blocks/normal";
import StartBlock from "./blocks/start";
import EndBlock from "./blocks/end";
// import { motion } from "framer-motion";

function MainGame() {
  const dynamicGridCount = 10;
  const inputString =
    "n0000ffffn0001ffffs0002ffffn0003ffffn0004ffffn0005ffffe0006ffffn0007ftftn0008ffttn0009ffffn0100ffftn0101tfttn0102ftttn0103ttftn0104ftttn0105ftffn0106fttfn0107ffffn0108tttfn0109ffffn0200tfffn0201ftftn0202ttftn0203ttffn0204ftffn0205tttfn0206ffffn0207ttttn0208ffftn0209ffttn0300ttffn0301ttttn0302ftttn0303tftfn0304ttffn0305tfftn0306ftttn0307tfttn0308tttfn0309tftfn0400tttfn0401ttttn0402tfttn0403tfffn0404ffftn0405ftttn0406ttffn0407ftffn0408fttfn0409ftffn0500fftfn0501ttttn0502ftffn0503fftfn0504tfftn0505ffttn0506ftffn0507ttffn0508tftfn0509ttttn0600ffttn0601ftttn0602ftffn0603ffffn0604ffffn0605tfftn0606ffttn0607ttftn0608tftfn0609tfffn0700fttfn0701ttffn0702ttffn0703ffttn0704ttttn0705ftffn0706ftffn0707ffffn0708ftttn0709tfttn0800ffftn0801fftfn0802tfttn0803tttfn0804fttfn0805ttffn0806tfffn0807ffttn0808ftftn0809fttfn0900ttffn0901ttffn0902tttfn0903ffttn0904tttfn0905tfftn0906tttfn0907fttfn0908ftftn0909tttt";

  const [ref, { height, width }] = useMeasure();
  const gameCtx = useContext(GameContext);
  const {
    pointPosition,
    setPointPosition,
    setKeyPressed,
    setKeyPressedCount,
    keyPressedCount,
  } = useContext(GameContext);
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
    const handleKeyDown = (e) => {
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
          return; // Nie aktualizuj stanu, jeśli naciśnięty klawisz nie jest obsługiwany
      }
      setPointPosition(newPosition); // Aktualizuj pozycję pionka w kontekście
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pointPosition, setPointPosition, setKeyPressed]);

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
  }, [pointPosition, result]);

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
            <div className="absolute w-full h-full">
              <span className="block">{gameCtx.keyPressed}</span>
              <span className="block">
                {gameCtx.isGameOver ? "game over" : "play"}
              </span>
              <span className="block">{keyPressedCount}</span>
              <span>Did win?: {gameCtx.win ? "true" : "false"}</span>
            </div>
          </div>
          <div className="order-1 col-span-2 row-span-4 md:order-2 md:col-span-6 border-2 border-pageMenu flex items-center justify-center p-5 md:p-10 lg:p-16">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] bg-pageMenu">
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
            <div className="absolute w-full h-full">
              {pointPosition.x}
              {pointPosition.y}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainGame;
