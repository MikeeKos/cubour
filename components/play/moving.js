import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Moving(props) {
  const [pointPosition, setPointPosition] = useState({
    x: props.x,
    y: props.y,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      let newPosition = { ...pointPosition };
      switch (e.key) {
        case "ArrowUp":
        case "w":
          newPosition.y = Math.max(0, newPosition.y - 1);
          break;
        case "ArrowDown":
        case "s":
          newPosition.y = Math.min(
            props.dynamicGridCount - 1,
            newPosition.y + 1
          );
          break;
        case "ArrowLeft":
        case "a":
          newPosition.x = Math.max(0, newPosition.x - 1);
          break;
        case "ArrowRight":
        case "d":
          newPosition.x = Math.min(
            props.dynamicGridCount - 1,
            newPosition.x + 1
          );
          break;
        default:
          break;
      }
      setPointPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pointPosition]);

  const gridItems = [];

  for (let i = 0; i < props.dynamicGridCount; i++) {
    for (let j = 0; j < props.dynamicGridCount; j++) {
      if (i === pointPosition.y && j === pointPosition.x) {
        gridItems.push(
          <motion.div
            className="col-span-1 row-span-1 border-2 border-pageMenu flex items-center justify-center"
            key={`row${i}col${j}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
          >
            X
          </motion.div>
        );
      } else {
        gridItems.push(
          <div
            className="col-span-1 row-span-1 border-2 border-pageMenu flex items-center justify-center"
            key={`row${i}col${j}`}
          />
        );
      }
    }
  }

  return (
    <React.Fragment>
      <div className="w-full h-full grid grid-cols-12 grid-rows-12 bg-page3">
        {gridItems}
        <div className="absolute row-span-2 col-span-2">
          {pointPosition.x}
          {pointPosition.y}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Moving;
