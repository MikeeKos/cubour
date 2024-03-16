import React, { useEffect, useContext } from "react";
import GameContext from "../../../store/game-context";
import SpecialBlockContext from "../../../store/special-block-context";
import { pawnSVG, cornerFixSVG } from "../../../SVG/game-grid";

function CreateBorderBlock(props) {
  const gameCtx = useContext(GameContext);
  const specialBlockCtx = useContext(SpecialBlockContext);
  const isEven = (props.i + props.j) % 2 !== 0;
  const bgColorClass = isEven ? "bg-page2" : "bg-page4";

  // useEffect(() => {
  //   if (gameCtx.win) {
  //     return;
  //   }

  //   if (gameCtx.isGameOver) {
  //     return;
  //   }

  //   if (gameCtx.isTeleporting) {
  //     return;
  //   }

  //   if (specialBlockCtx.specialMode) {
  //     return;
  //   }

  //   if (props.isSelected) {
  //     const pointPositionI = gameCtx.pointPosition.x;
  //     const pointPositionJ = gameCtx.pointPosition.y;

  //     switch (gameCtx.keyPressed) {
  //       case "up":
  //         if (gameCtx.grid[pointPositionJ + 1][pointPositionI].top) {
  //           gameCtx.setIsGameOver(true);
  //         }
  //         break;
  //       case "right":
  //         if (gameCtx.grid[pointPositionJ][pointPositionI - 1].right) {
  //           gameCtx.setIsGameOver(true);
  //         }
  //         break;
  //       case "down":
  //         if (gameCtx.grid[pointPositionJ - 1][pointPositionI].bottom) {
  //           gameCtx.setIsGameOver(true);
  //         }
  //         break;
  //       case "left":
  //         if (gameCtx.grid[pointPositionJ][pointPositionI + 1].left) {
  //           gameCtx.setIsGameOver(true);
  //         }
  //         break;
  //       default:
  //         break;
  //     }

  //     if (
  //       pointPositionI === 0 ||
  //       pointPositionJ === 0 ||
  //       pointPositionI === props.gridCount - 1 ||
  //       pointPositionJ === props.gridCount - 1
  //     ) {
  //       const handleKeyDown = (event) => {
  //         switch (event.key) {
  //           case "ArrowUp":
  //           case "w":
  //             if (pointPositionJ === 0) {
  //               gameCtx.setIsGameOver(true);
  //             }
  //             break;
  //           case "ArrowRight":
  //           case "d":
  //             if (pointPositionI === props.gridCount - 1) {
  //               gameCtx.setIsGameOver(true);
  //             }
  //             break;
  //           case "ArrowDown":
  //           case "s":
  //             if (pointPositionJ === props.gridCount - 1) {
  //               gameCtx.setIsGameOver(true);
  //             }
  //             break;
  //           case "ArrowLeft":
  //           case "a":
  //             if (pointPositionI === 0) {
  //               gameCtx.setIsGameOver(true);
  //             }
  //             break;
  //           default:
  //             break;
  //         }
  //       };

  //       window.addEventListener("keydown", handleKeyDown);

  //       return () => {
  //         window.removeEventListener("keydown", handleKeyDown);
  //       };
  //     }
  //   }
  // }, [
  //   props.isSelected,
  //   gameCtx.keyPressed,
  //   gameCtx.keyPressedCount,
  //   gameCtx.pointPosition,
  //   gameCtx.win,
  //   gameCtx.isGameOver,
  //   specialBlockCtx,
  // ]);

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

  // if (props.i == 0) {
  //   borderClasses.push("border-t-4");
  //   borderFixClasses = borderFixClasses.filter(
  //     (className) => className !== "border-t-4"
  //   );
  // }

  // if (props.j == props.gridCount - 1) {
  //   borderClasses.push("border-r-4");
  //   borderFixClasses = borderFixClasses.filter(
  //     (className) => className !== "border-r-4"
  //   );
  // }

  // if (props.i == props.gridCount - 1) {
  //   borderClasses.push("border-b-4");
  //   borderFixClasses = borderFixClasses.filter(
  //     (className) => className !== "border-b-4"
  //   );
  // }

  // if (props.j == 0) {
  //   borderClasses.push("border-l-4");
  //   borderFixClasses = borderFixClasses.filter(
  //     (className) => className !== "border-l-4"
  //   );
  // }

  const borderClassesString = borderClasses.join(" ");
  const borderFixClassessString = borderFixClasses.join(" ");

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

  return (
    <React.Fragment>
      <div
        className={`col-span-1 row-span-1 relative ${bgColorClass} ${borderClassesString} border-pageMenu`}
      >
        <div
          className={`w-full h-full ${borderFixClassessString} border-transparent flex items-center justify-center`}
        >
          <div className="w-full h-full relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute z-30 w-full h-full justify-center items-center">
                <div className=" w-full h-full scale-90">
                  <div className="relative w-full h-full z-50">
                    <div className="w-full h-[20%] absolute z-50 bottom-0 flex items-center justify-center">
                      <div
                        className="w-[90%] h-full opacity-0 hover:opacity-100 bg-pageMenu hover:animate-pulse hover:cursor-pointer"
                        onClick={changeBottomBorderHandler}
                      ></div>
                    </div>
                    <div className="w-[20%] h-full absolute z-50 right-0 flex items-center justify-center">
                      <div
                        className="w-full h-[90%] opacity-0 hover:opacity-100 bg-pageMenu hover:animate-pulse hover:cursor-pointer"
                        onClick={changeRightBorderHandler}
                      ></div>
                    </div>
                    <div className="w-full h-[20%] absolute z-50 top-0 flex items-center justify-center">
                      <div
                        className="w-[90%] h-full opacity-0 hover:opacity-100 bg-pageMenu hover:animate-pulse hover:cursor-pointer"
                        onClick={changeTopBorderHandler}
                      ></div>
                    </div>
                    <div className="w-[20%] h-full absolute z-50 left-0 flex items-center justify-center">
                      <div
                        className="w-full h-[90%] opacity-0 hover:opacity-100 bg-pageMenu hover:animate-pulse hover:cursor-pointer"
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
