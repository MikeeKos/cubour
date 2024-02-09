import { createContext, useState, useEffect } from "react";

const GameContext = createContext({
  isTopGaveOver: null,
  isRightGameOver: null,
  isBottomGameOver: null,
  isLeftGameOver: null,
  isGameOver: null,
});

export function GameContextProvider(props) {
  // const [activeNotification, setActiveNotification] = useState();

  // useEffect(() => {
  //   if (
  //     activeNotification &&
  //     (activeNotification.status === "success" ||
  //       activeNotification.status === "error")
  //   ) {
  //     const timer = setTimeout(() => {
  //       setActiveNotification(null);
  //     }, 3000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [activeNotification]);

  // function showNotificationHandler(notificationData) {
  //   setActiveNotification(notificationData);
  // }

  // function hideNotificationHandler() {
  //   setActiveNotification(null);
  // }

  const context = {
    // notification: activeNotification,
    // showNotification: showNotificationHandler,
    // hideNotification: hideNotificationHandler,
  };

  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
}

export default NotificationContext;
