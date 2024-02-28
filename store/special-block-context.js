import React, { createContext, useState } from "react";

const SpecialBlockContext = createContext({
  specialMode: false,
  gameComponent: null,
  completedSpecialGames: [],
  setSpecialMode: () => {},
  setGameComponent: () => {},
  setCompletedSpecialGames: () => {},
});

export function SpecialBlockContextProvider(props) {
  const [specialMode, setSpecialMode] = useState(false);
  const [gameComponent, setGameComponent] = useState(null);
  const [completedSpecialGames, setCompletedSpecialGames] = useState([]);

  const context = {
    specialMode,
    gameComponent,
    completedSpecialGames,
    setSpecialMode,
    setGameComponent,
    setCompletedSpecialGames,
  };

  return (
    <SpecialBlockContext.Provider value={context}>
      {props.children}
    </SpecialBlockContext.Provider>
  );
}

export default SpecialBlockContext;
