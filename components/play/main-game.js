import React from "react";
import useMeasure from "react-use-measure";
import Block from "./blocks/block";

function MainGame() {
  const [ref, { height, width }] = useMeasure();

  // 8,10,12,14,16
  const dynamicGridCount = 12;

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
  console.log(generatedString);

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

  const result = parseString(generatedString);
  console.log(result);

  // ------------------Create grid------------------

  const gridItems = [];

  for (let i = 0; i < dynamicGridCount; i++) {
    for (let j = 0; j < dynamicGridCount; j++) {
      const row = result[i][j].row;
      const col = result[i][j].col;

      const top = result[i][j].top;

      const right = result[i][j].right;
      const bottom = result[i][j].bottom;
      const left = result[i][j].left;

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
        />
      );
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
                <div
                  className={`w-full h-full bg-pageMenu grid grid-cols-${dynamicGridCount} grid-rows-${dynamicGridCount} border-8 border-pageMenu`}
                >
                  {gridItems}
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 col-span-1 row-span-2 md:order-3 md:col-span-3 border-2 border-pageMenu"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainGame;
