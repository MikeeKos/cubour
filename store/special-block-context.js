import React, { createContext, useState } from "react";

const SpecialBlockContext = createContext({
  specialMode: false,
  gameComponent: null,
  setSpecialMode: () => {},
  setGameComponent: () => {},
});

export function SpecialBlockContextProvider(props) {
  const [specialMode, setSpecialMode] = useState(false);
  const [gameComponent, setGameComponent] = useState(null);

  const context = {
    specialMode,
    gameComponent,
    setSpecialMode,
    setGameComponent,
  };

  return (
    <SpecialBlockContext.Provider value={context}>
      {props.children}
    </SpecialBlockContext.Provider>
  );
}

export default SpecialBlockContext;
