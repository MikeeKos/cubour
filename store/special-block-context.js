import React, { createContext, useState } from "react";

const SpecialBlockContext = createContext({
  specialMode: false,
  gameComponent: null,
  completedSpecialGames: [],
  setSpecialMode: () => {},
  setGameComponent: () => {},
  setCompletedSpecialGames: () => {},
  resetSpecialBlockContext: () => {},
});

export function SpecialBlockContextProvider(props) {
  const [specialMode, setSpecialMode] = useState(false);
  const [gameComponent, setGameComponent] = useState(null);
  const [completedSpecialGames, setCompletedSpecialGames] = useState([]);

  const resetSpecialBlockContext = () => {
    setSpecialMode(false);
    setGameComponent(null);
    setCompletedSpecialGames([]);
  };

  const context = {
    specialMode,
    gameComponent,
    completedSpecialGames,
    setSpecialMode,
    setGameComponent,
    setCompletedSpecialGames,
    resetSpecialBlockContext,
  };

  return (
    <SpecialBlockContext.Provider value={context}>
      {props.children}
    </SpecialBlockContext.Provider>
  );
}

export default SpecialBlockContext;
