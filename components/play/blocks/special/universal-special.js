import React, { useContext, useEffect, useState } from "react";
import Block from "../block";
import SpecialBlockContext from "../../../../store/special-block-context";
import GameContext from "../../../../store/game-context";
import {
  rightSVG,
  leftSVG,
  upSVG,
  downSVG,
  giftSVG,
} from "../../../../SVG/arrows";

function UniversalSpecial(props) {
  const currentSpecialGame = `${props.i}-${props.j}`;
  const specialBlockCtx = useContext(SpecialBlockContext);
  const gameCtx = useContext(GameContext);
  const [shouldBeVisible, setShouldBeVisible] = useState(true);
  const [arrIndex, setArrIndex] = useState(0);
  const [pressedKey, setPressedKey] = useState("");

  const checkValidInput = (direction) => {
    if (arrowsArray[arrIndex] === direction) {
      const nextIndex = (arrIndex + 1) % arrowsArray.length;
      setArrIndex(nextIndex);
      if (
        nextIndex === 0 &&
        arrIndex + 1 === arrowsArray.length &&
        props.isSelected
      ) {
        specialBlockCtx.setCompletedSpecialGames((prev) => [
          ...prev,
          currentSpecialGame,
        ]);
        specialBlockCtx.setSpecialMode(false);
      }
    } else {
      specialBlockCtx.setSpecialMode(false);
      gameCtx.setIsGameOver(true);
    }
  };

  useEffect(() => {
    if (!specialBlockCtx.specialMode) {
      return;
    }

    if (!props.isSelected) {
      return;
    }

    if (gameCtx.isGameOver) {
      specialBlockCtx.setSpecialMode(false);
    }

    const handleKeyDown = (e) => {
      let key = "";
      switch (e.key) {
        case "ArrowUp":
        case "w":
          key = "up";
          checkValidInput("up");
          gameCtx.setKeyPressedCount();
          break;
        case "ArrowDown":
        case "s":
          key = "down";
          checkValidInput("down");
          gameCtx.setKeyPressedCount();
          break;
        case "ArrowLeft":
        case "a":
          key = "left";
          checkValidInput("left");
          gameCtx.setKeyPressedCount();
          break;
        case "ArrowRight":
        case "d":
          key = "right";
          checkValidInput("right");
          gameCtx.setKeyPressedCount();
          break;
        default:
          return;
      }
      setPressedKey(key);
      props.func(key);
      const timeoutId = setTimeout(() => setPressedKey(""), 100);
      return () => clearTimeout(timeoutId);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    specialBlockCtx.specialMode,
    arrIndex,
    gameCtx.keyPressedCount,
    pressedKey,
    setPressedKey,
  ]);

  const arrowsArray = props.arrowsArray;

  function renderArrowSVG(arrow) {
    if (props.isSelected) {
      switch (arrow) {
        case "right":
          return <div className="col-span-1 row-span-1">{rightSVG}</div>;
        case "left":
          return <div className="col-span-1 row-span-1">{leftSVG}</div>;
        case "up":
          return <div className="col-span-1 row-span-1">{upSVG}</div>;
        case "down":
          return <div className="col-span-1 row-span-1">{downSVG}</div>;
        default:
          return null;
      }
    }
  }

  const game = (
    <div className="w-full h-full bg-pageMenu">
      <div className="w-full h-full">
        <div className="w-full h-[30%] bg-pageMenu px-3 pt-3 md:px-5 md:pt-5">
          <div className="relative w-full h-full bg-page2 p-1 md:p-1 lg:p-2 overflow-hidden flex items-center justify-center">
            <div className="absolute z-50 w-full h-full grid grid-cols-10 grid-rows-1">
              {arrowsArray.map((arrow, index) => (
                <React.Fragment key={index}>
                  {renderArrowSVG(arrow)}
                </React.Fragment>
              ))}
            </div>
            <div className="absolute w-full h-full grid grid-cols-10 grid-rows-1 opacity-50">
              {arrowsArray.map((_, index) => {
                if (index == arrIndex) {
                  return (
                    <div
                      key={index}
                      className="col-span-1 row-span-1 bg-page3"
                    ></div>
                  );
                } else {
                  return (
                    <div key={index} className="col-span-1 row-span-1"></div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-[70%] bg-pageMenu p-3 md:p-5">
          {props.arrowStyle}
        </div>
      </div>
    </div>
  );

  const isCompleted =
    specialBlockCtx.completedSpecialGames.includes(currentSpecialGame);

  useEffect(() => {
    if (props.isSelected) {
      if (isCompleted) {
        specialBlockCtx.setSpecialMode(false);
      } else {
        specialBlockCtx.setSpecialMode(true);
        specialBlockCtx.setGameComponent(game);
      }
      setShouldBeVisible(false);
    } else {
      setShouldBeVisible(true);
    }
  }, [gameCtx.pointPosition, gameCtx.keyPressedCount]);

  const design = isCompleted ? (
    <div>{shouldBeVisible && <div></div>}</div>
  ) : (
    <div>{shouldBeVisible && <div>{giftSVG}</div>}</div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default UniversalSpecial;
