import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import Block from "./blocks/block";
import Grid from "./grid";
import { motion } from "framer-motion";

function MainGame() {
  const [ref, { height, width }] = useMeasure();

  const dynamicGridCount = 12;
  // const pointPosition = { x: 0, y: 0 };
  const [pointPosition, setPointPosition] = useState({
    x: 0,
    y: 0,
  });

  // ------------------Moving logic---------------------

  useEffect(() => {
    const handleKeyDown = (e) => {
      let newPosition = { ...pointPosition };
      switch (e.key) {
        case "ArrowUp":
        case "w":
          newPosition.y = Math.max(0, newPosition.y - 1);
          break;
        case "ArrowDown":
        case "s":
          newPosition.y = Math.min(dynamicGridCount - 1, newPosition.y + 1);
          break;
        case "ArrowLeft":
        case "a":
          newPosition.x = Math.max(0, newPosition.x - 1);
          break;
        case "ArrowRight":
        case "d":
          newPosition.x = Math.min(dynamicGridCount - 1, newPosition.x + 1);
          break;
        default:
          break;
      }
      setPointPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pointPosition]);

  // ------------------Generate string------------------

  function getRandomLetter() {
    const letters = ["s", "e", "n"];
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }

  function getRandomTF() {
    const options = ["t", "f"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function generateString() {
    let result = "";
    for (let i = 0; i < dynamicGridCount; i++) {
      for (let j = 0; j < dynamicGridCount; j++) {
        const gridNumber1 = i.toString().padStart(2, "0");
        const gridNumber2 = j.toString().padStart(2, "0");
        const randomLetter = getRandomLetter();
        const randomTF1 = getRandomTF();
        const randomTF2 = getRandomTF();
        const randomTF3 = getRandomTF();
        const randomTF4 = getRandomTF();

        result += `${randomLetter}${gridNumber1}${gridNumber2}${randomTF1}${randomTF2}${randomTF3}${randomTF4}`;
      }
    }
    return result;
  }

  const generatedString = generateString();
  // console.log(generatedString);

  // ------------------Parse string------------------

  function parseString(inputString) {
    const twoDimensionalArray = [];

    for (let i = 0; i < dynamicGridCount; i++) {
      twoDimensionalArray[i] = [];
      for (let j = 0; j < dynamicGridCount; j++) {
        const index = i * dynamicGridCount + j;
        const substring = inputString.slice(index * 9, index * 9 + 9);

        const type = substring[0];
        const row = parseInt(substring.slice(1, 3), 10);
        const col = parseInt(substring.slice(3, 5), 10);
        const top = substring[5];
        const right = substring[6];
        const bottom = substring[7];
        const left = substring[8];

        const cell = {
          type,
          row,
          col,
          top: top === "t" ? true : false,
          right: right === "t" ? true : false,
          bottom: bottom === "t" ? true : false,
          left: left === "t" ? true : false,
        };

        twoDimensionalArray[i][j] = cell;
      }
    }

    return twoDimensionalArray;
  }

  // 8x8
  // const result = parseString(
  //   "s0000ttffn0001tfffn0002fftte0003tttfe0004ttffe0005tftts0006ftffs0007tttts0100tftfn0101tfttn0102fttts0103ffffe0104fftts0105tttfs0106fftfn0107ffftn0200tftfn0201tttte0202tfffs0203tftte0204ttffs0205fttte0206ttttn0207fftts0300fftfe0301ttfts0302tfffe0303tfttn0304fffts0305tttte0306ttttn0307fftte0400tffte0401tfftn0402tftts0403fffts0404fttts0405ttftn0406ttttn0407ffffn0500tfftn0501tttfe0502fttts0503ftttn0504tftfs0505ftttn0506fftfe0507ftffe0600tftte0601fftts0602ffffs0603tftfe0604tttte0605ftffn0606tfffs0607fttfs0700ttttn0701ttttn0702tftfs0703tfffe0704tftfs0705fffte0706ftffs0707ffft"
  // );
  // 12x12
  const result = parseString(
    "n0000tfffn0001tfffe0002tftfs0003fttfn0004tfttn0005fftfe0006tftfn0007tfffs0008tftts0009tttfn0010tfffe0011tfffn0100tffte0101tffts0102ffffe0103ffffe0104fftte0105fftfn0106tfttn0107ffftn0108tftts0109tftfs0110fttte0111fffte0200tftfe0201tffte0202fftfn0203ftffs0204ffttn0205fttfn0206ftfts0207ffffs0208tttte0209fttfn0210ttttn0211tfffn0300ttfte0301tttfe0302fttte0303ftttn0304tfttn0305ttffs0306fffte0307ttffn0308tttfs0309ttttn0310tfffn0311tfffn0400tffts0401ftttn0402ffffn0403fffts0404ftftn0405tftfe0406tfftn0407tfffs0408ffffe0409ftfts0410ftffe0411ttffs0500ftfte0501fffts0502fttts0503fftfe0504ttttn0505ffftn0506ffffn0507ffffs0508fttfs0509tttts0510ffffn0511tttts0600fttfs0601ftftn0602fftfn0603tftfe0604fftfn0605ttffe0606fttfn0607tttfs0608tfftn0609fttfs0610ftftn0611ftffn0700ttttn0701ftftn0702ttfts0703ffffs0704fttfs0705tttfn0706tftts0707ffffn0708tfffs0709tttts0710fttfs0711ttfts0800tftte0801ftfts0802ttffs0803ftffn0804tftfe0805fttfn0806ttfte0807fttfn0808fftte0809ffftn0810tttfn0811tttte0900ttfts0901ttfts0902fftfn0903fffte0904ftffe0905ftfte0906tttte0907fttfs0908ttttn0909ftftn0910tttfn0911fttfe1000ttfts1001ttfts1002fttts1003fftfs1004fftfs1005fttte1006tttfs1007tfffs1008tftte1009tfffn1010tffts1011tftts1100ttfts1101fttfe1102tfttn1103tttfn1104tftte1105tfttn1106ttfts1107ttffe1108ftffs1109fftts1110ffffe1111ttft"
  );
  // 10x10
  // const result = parseString(
  //   "s0000tttte0001fttfn0002tftte0003tfffs0004fttfn0005ffffe0006ffffn0007ftfte0008ffttn0009ffffn0100fffts0101tftts0102ftttn0103ttfts0104fttte0105ftffs0106fttfe0107ffffn0108tttfs0109ffffe0200tfffn0201ftfte0202ttfts0203ttffn0204ftffn0205tttfs0206ffffn0207tttts0208fffts0209fftte0300ttffn0301tttte0302fttte0303tftfe0304ttffe0305tfftn0306fttts0307tfttn0308tttfn0309tftfs0400tttfn0401tttts0402tfttn0403tfffe0404fffts0405fttts0406ttffs0407ftffs0408fttfe0409ftffn0500fftfe0501tttte0502ftffs0503fftfs0504tffts0505ffttn0506ftffe0507ttffs0508tftfe0509tttts0600fftte0601fttts0602ftffn0603ffffs0604ffffs0605tffte0606fftts0607ttfte0608tftfn0609tfffn0700fttfe0701ttffe0702ttffn0703fftts0704tttte0705ftffn0706ftffn0707ffffe0708fttts0709tfttn0800fffte0801fftfs0802tftts0803tttfn0804fttfs0805ttffs0806tfffe0807fftte0808ftfts0809fttfn0900ttffe0901ttffn0902tttfe0903ffttn0904tttfe0905tfftn0906tttfe0907fttfn0908ftfts0909tttt"
  // );
  // 14x14
  // const result = parseString(
  //   "n0000ffftn0001fftfe0002fffts0003fftte0004ftttn0005ttftn0006fttts0007tffts0008tftte0009tttts0010ffffs0011ftfts0012ftfte0013ffffe0100ttffe0101fttfn0102fttfe0103ffttn0104fftts0105ftftn0106fttfe0107ttftn0108ttftn0109tfffe0110tfttn0111ttftn0112fftts0113tfffe0200fttte0201fftte0202ttffn0203fffte0204ttfts0205ttfte0206ftfts0207ftftn0208ffttn0209tffts0210fftfn0211fttfe0212tttfe0213fffts0300ffffn0301tftfn0302ffffs0303tttfn0304fftfs0305ftttn0306ttffs0307fftfs0308fffte0309tttfn0310tttts0311ftffn0312ttftn0313ftfts0400fftfs0401tffte0402ftttn0403tttts0404tffte0405ftffs0406ffffn0407tttts0408tftfe0409ftttn0410ttffe0411tttfe0412ffftn0413ttttn0500tftfe0501fttte0502fftfs0503tfffe0504fttfn0505ffffs0506tftte0507fftte0508tttts0509ffffs0510tftfs0511tttfn0512ttffn0513ttffs0600tffts0601tttfn0602tffte0603tftfs0604tttfs0605tffts0606fttfn0607tftte0608ttffs0609ffffe0610tftts0611tfftn0612ffffe0613ftffe0700tttte0701tttts0702ttffe0703fttte0704tftte0705tftfe0706ttfte0707ffffs0708fttte0709ffffe0710fftfe0711ftffn0712tffte0713ffftn0800ttffs0801tftfs0802tttfe0803ffffe0804ffffs0805ttffe0806tttfn0807ffffs0808ttffe0809tfttn0810tftfs0811ftfts0812tttte0813tttfe0900tffte0901ftffe0902tttfn0903ttfte0904ffffn0905ttttn0906fftfs0907ftttn0908fftfe0909ffftn0910ffffe0911tfffn0912fttfs0913ttftn1000tfffs1001ftfts1002ffffe1003ttffn1004tfffe1005fftts1006tttfn1007ftttn1008tttte1009tffts1010ffffs1011tffts1012ffftn1013tttfn1100fftfn1101tttfs1102ttfts1103tfttn1104ffttn1105tfftn1106fttfn1107fftts1108fftts1109tttfe1110tftts1111tfffn1112fttfn1113ftfts1200tfftn1201fftfs1202tftts1203ftffn1204fftts1205fttfe1206fttte1207fftfe1208fftte1209tffte1210ftffe1211ffffe1212fttfs1213ttftn1300ftffn1301ffffn1302tffte1303ftffs1304fttfs1305tfttn1306fffts1307fftte1308ttffe1309fffte1310tttfs1311ttffs1312ffftn1313ftft"
  // )
  // const result = parseString(generatedString);
  // console.log(result);

  // ------------------Create grid------------------

  const gridItems = [];

  for (let i = 0; i < dynamicGridCount; i++) {
    for (let j = 0; j < dynamicGridCount; j++) {
      const row = result[i][j].row;
      const col = result[i][j].col;

      // const top = result[i][j].top;

      let top;
      if (i - 1 < 0) {
        top = true;
      } else {
        top = result[i][j].top || result[i - 1][j].bottom;
      }

      // const right = result[i][j].right;

      let right;
      if (j + 1 >= dynamicGridCount) {
        right = true;
      } else {
        right = result[i][j].right || result[i][j + 1].left;
      }

      // const bottom = result[i][j].bottom;

      let bottom;
      if (i + 1 >= dynamicGridCount) {
        bottom = true;
      } else {
        bottom = result[i][j].bottom || result[i + 1][j].top;
      }

      // const left = result[i][j].left;

      let left;
      if (j - 1 < 0) {
        left = true;
      } else {
        left = result[i][j].left || result[i][j - 1].right;
      }

      if (i === pointPosition.y && j === pointPosition.x) {
        gridItems.push(
          <Block
            key={`row${i}col${j}`}
            i={row}
            j={col}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            gridCount={dynamicGridCount}
            isSelected={true}
          />
        );
      } else {
        gridItems.push(
          <Block
            key={`row${i}col${j}`}
            i={row}
            j={col}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            gridCount={dynamicGridCount}
            isSelected={false}
          />
        );
      }

      // gridItems.push(
      //   <Block
      //     key={`row${i}col${j}`}
      //     i={row}
      //     j={col}
      //     top={top}
      //     right={right}
      //     bottom={bottom}
      //     left={left}
      //     gridCount={dynamicGridCount}
      //     isSelected={true}
      //   />
      // );
    }
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
          <div className="order-2 col-span-1 row-span-2 md:order-1 md:col-span-3 border-2 border-pageMenu"></div>
          <div className="order-1 col-span-2 row-span-4 md:order-2 md:col-span-6 border-2 border-pageMenu flex items-center justify-center p-5 md:p-10 lg:p-16">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] md:bg-page4 bg-page5">
                <Grid
                  dynamicGridCount={dynamicGridCount}
                  gridItems={gridItems}
                />
              </div>
              <div className="absolute z-20 w-[100%] h-fit min-[450px]:h-[27rem] min-[450px]:w-[27rem] md:h-fit md:w-full aspect-[50/50] bg-page2 border-4">
                {/* <Moving
                  x={pointPosition.x}
                  y={pointPosition.y}
                  dynamicGridCount={dynamicGridCount}
                /> */}
                <div className="w-full h-full grid grid-cols-12 grid-rows-12 bg-page3">
                  {gridItems}
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 col-span-1 row-span-2 md:order-3 md:col-span-3 border-2 border-pageMenu">
            {pointPosition.x}
            {pointPosition.y}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainGame;
