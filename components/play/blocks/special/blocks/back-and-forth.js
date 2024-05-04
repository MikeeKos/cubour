import React, { useState } from "react";
import UniversalSpecial from "../universal-special";
import { rightSVG, leftSVG, upSVG, downSVG } from "../../../../../SVG/arrows";

function BackAndForthSpecial(props) {
  const arrowsArray = [
    "right",
    "left",
    "right",
    "left",
    "right",
    "left",
    "right",
    "left",
    "right",
    "left",
  ];

  const [pressedKey, setPressedKey] = useState("");

  const pressedKeyFunc = (data) => {
    setPressedKey(data);
  };

  function renderArrow(arrow, svg) {
    const scaleClass = pressedKey === arrow ? "scale-75" : "scale-100";
    const animationClass = `transition-transform duration-100 transform ${scaleClass}`;
    return (
      <div
        className={`${animationClass} h-full aspect-square bg-pageButton border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.3)_0px_7px_22px] rounded-lg`}
      >
        {svg}
      </div>
    );
  }

  const arrowStyle = (
    <div className="w-full h-full bg-page2 flex items-center justify-center py-[15%]">
      <div className=" w-full h-full flex justify-evenly">
        {renderArrow("left", leftSVG)}
        {renderArrow("right", rightSVG)}
      </div>
    </div>
  );

  return (
    <UniversalSpecial
      {...props}
      arrowsArray={arrowsArray}
      arrowStyle={arrowStyle}
      func={pressedKeyFunc}
    ></UniversalSpecial>
  );
}

export default BackAndForthSpecial;
