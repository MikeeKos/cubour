import React, { useState, useEffect, useContext } from "react";
import MainGame from "./main-game";
import GameContext from "../../store/game-context";
import SpecialBlockContext from "../../store/special-block-context";

function PlayPage(props) {
  const gameCtx = useContext(GameContext);
  const specialBlockCtx = useContext(SpecialBlockContext);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loadingScreen, setLoadingScreen] = useState(false);

  function splitString(input) {
    const dynamicGridCount = parseInt(input.substring(0, 2), 10);
    const timeBoundary = input.substring(2, 9);
    const inputString = input.substring(9);
    return {
      dynamicGridCount,
      timeBoundary,
      inputString,
    };
  }

  const resultStringSeed = splitString(props.seed);

  function restartGame() {
    setLoadingScreen(true);
    gameCtx.resetGameContext();
    specialBlockCtx.resetSpecialBlockContext();
    setRefreshKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      setLoadingScreen(false);
    }, 1000);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "p") {
        restartGame();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      {loadingScreen && (
        <div className="absolute z-50 w-screen h-screen bg-pageMenu flex items-center justify-center">
          <span className="font-page text-md md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest flex items-center justify-center animate-pulse">
            Loading...
          </span>
        </div>
      )}
      {!loadingScreen && (
        <MainGame
          key={refreshKey}
          dynamicGridCount={resultStringSeed.dynamicGridCount}
          inputString={resultStringSeed.inputString}
          timeBoundary={resultStringSeed.timeBoundary}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default PlayPage;
