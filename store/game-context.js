import React, { createContext, useState } from "react";

const GameContext = createContext({
  keyPressed: null,
  isGameOver: false,
  grid: [],
  pointPosition: { x: 0, y: 0 },
  keyPressedCount: 0,
  win: false,
  isTeleporting: false,
  firstTeleportEndPoint: { x: 0, y: 0 },
  secondTeleportEndPoint: { x: 0, y: 0 },
  firstVisitBlockCount: 0,
  secondVisitBlockCount: 0,
  setKeyPressed: () => {},
  setIsGameOver: () => {},
  setGrid: () => {},
  setPointPosition: () => {},
  setKeyPressedCount: () => {},
  setWin: () => {},
  setIsTeleporting: () => {},
  setFirstTeleportEndPoint: () => {},
  setSecondTeleportEndPoint: () => {},
  setFirstVisitBlockCount: () => {},
  setSecondVisitBlockCount: () => {},
});

export function GameContextProvider(props) {
  const [keyPressed, setKeyPressed] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [grid, setGrid] = useState([]);
  const [pointPosition, setPointPosition] = useState({ x: 0, y: 0 });
  const [keyPressedCount, setKeyPressedCountState] = useState(0);
  const [win, setWin] = useState(false);
  const [isTeleporting, setIsTeleporting] = useState(false);
  const [firstTeleportEndPoint, setFirstTeleportEndPoint] = useState({
    x: 0,
    y: 0,
  });
  const [secondTeleportEndPoint, setSecondTeleportEndPoint] = useState({
    x: 0,
    y: 0,
  });
  const [firstVisitBlockCount, setFirstVisitBlockCount] = useState(0);
  const [secondVisitBlockCount, setSecondVisitBlockCount] = useState(0);

  const setKeyPressedCount = () => {
    setKeyPressedCountState((prevCount) => prevCount + 1);
  };

  const resetGameContext = () => {
    setKeyPressed(null);
    setIsGameOver(false);
    setGrid([]);
    // setPointPosition({ x: 0, y: 0 });
    setKeyPressedCountState(0);
    setWin(false);
    setIsTeleporting(false);
    // setFirstTeleportEndPoint({ x: 0, y: 0 });
    // setSecondTeleportEndPoint({ x: 0, y: 0 });
    setFirstVisitBlockCount(0);
    setSecondVisitBlockCount(0);
  };

  const context = {
    keyPressed,
    isGameOver,
    grid,
    pointPosition,
    keyPressedCount,
    win,
    isTeleporting,
    firstTeleportEndPoint,
    secondTeleportEndPoint,
    firstVisitBlockCount,
    secondVisitBlockCount,
    setKeyPressed,
    setIsGameOver,
    setGrid,
    setPointPosition,
    setKeyPressedCount,
    setWin,
    setIsTeleporting,
    setFirstTeleportEndPoint,
    setSecondTeleportEndPoint,
    setFirstVisitBlockCount,
    setSecondVisitBlockCount,
    resetGameContext,
  };

  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext;
