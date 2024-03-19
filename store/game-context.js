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
  itemBoundaries: [
    { type: "s", avaiable: 1 },
    { type: "e", avaiable: 1 },
    { type: "t", avaiable: 1 },
    { type: "T", avaiable: 1 },
    { type: "o", avaiable: 1 },
    { type: "O", avaiable: 1 },
    { type: "v", avaiable: 1 },
    { type: "V", avaiable: 1 },
    { type: "w", avaiable: 1 },
    { type: "W", avaiable: 1 },
  ],
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
  setItemBoundaries: () => {},
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
  const [itemBoundaries, setItemBoundaries] = useState([
    { type: "s", avaiable: 1 },
    { type: "e", avaiable: 1 },
    { type: "t", avaiable: 1 },
    { type: "T", avaiable: 1 },
    { type: "o", avaiable: 1 },
    { type: "O", avaiable: 1 },
    { type: "v", avaiable: 1 },
    { type: "V", avaiable: 1 },
    { type: "w", avaiable: 1 },
    { type: "W", avaiable: 1 },
  ]);

  const setKeyPressedCount = () => {
    setKeyPressedCountState((prevCount) => prevCount + 1);
  };

  const resetGameContext = () => {
    setKeyPressed(null);
    setIsGameOver(false);
    setGrid([]);
    setKeyPressedCountState(0);
    setWin(false);
    setIsTeleporting(false);
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
    itemBoundaries,
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
    setItemBoundaries,
  };

  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext;
