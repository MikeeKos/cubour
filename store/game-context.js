import React, { createContext, useState } from "react";

const GameContext = createContext({
  keyPressed: null,
  isGameOver: false,
  grid: [],
  pointPosition: { x: 0, y: 0 },
  keyPressedCount: 0,
  win: false,
  setKeyPressed: () => {},
  setIsGameOver: () => {},
  setGrid: () => {},
  setPointPosition: () => {},
  setKeyPressedCount: () => {},
  setWin: () => {},
});

export function GameContextProvider(props) {
  const [keyPressed, setKeyPressed] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [grid, setGrid] = useState([]);
  const [pointPosition, setPointPosition] = useState({ x: 0, y: 0 });
  const [keyPressedCount, setKeyPressedCountState] = useState(0);
  const [win, setWin] = useState(false);

  const setKeyPressedCount = () => {
    setKeyPressedCountState(prevCount => prevCount + 1);
  };

  const context = {
    keyPressed,
    isGameOver,
    grid,
    pointPosition,
    keyPressedCount,
    win,
    setKeyPressed,
    setIsGameOver,
    setGrid,
    setPointPosition,
    setKeyPressedCount,
    setWin,
  };

  return <GameContext.Provider value={context}>{props.children}</GameContext.Provider>;
}

export default GameContext;
