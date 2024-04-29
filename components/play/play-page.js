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

  const resultStringSeed = splitString(props.seed.seed);

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
          mapObject={props.seed}
          // dynamicGridCount={8}
          // inputString={"s0000tfftn0001tfffn0002tftfn0003ttffn0004tfftn0005tfffn0006tfffn0007ttffn0100ffftn0101ffffn0102ttffb0103ftftn0104ffftn0105ffffn0106ffffn0107ftffn0200ffftn0201ffffn0202ftffn0203ftftn0204ffftn0205ffffn0206ffffn0207ftffn0300ffttn0301fftfn0302fttfe0303ftttn0304ffftn0305ffffn0306ffffn0307ftffn0400tfftn0401tfffn0402tfffn0403tfffn0404ffffn0405ffffn0406ffffn0407ftffn0500ffftn0501ffffn0502ffffn0503ffffn0504ffffn0505ffffn0506ffffn0507ftffn0600ffftn0601ffffn0602ffffn0603ffffn0604ffffn0605ffffn0606ffffn0607ftffn0700ffttn0701fftfn0702fftfn0703fftfn0704fftfn0705fftfn0706fftfn0707fttf"}
          // timeBoundary={"5959590"}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default PlayPage;
