import React, { useState } from "react";
import UniversalSpecial from "../universal-special";
import { upSVG, downSVG } from "../../../../../SVG/arrows";

function UpAndDownSpecial(props) {
  const arrowsArray = [
    "up",
    "down",
    "up",
    "down",
    "up",
    "down",
    "up",
    "down",
    "up",
    "down",
  ];

  const [pressedKey, setPressedKey] = useState("");

  const pressedKeyFunc = (data) => {
    setPressedKey(data);
  };

  function renderArrow(arrow, svg) {
    const scaleClass = pressedKey === arrow ? "scale-75" : "scale-90";
    const animationClass = `transition-transform duration-100 transform ${scaleClass}`;
    return (
      <div
        className={`${animationClass} h-[100%] aspect-square bg-pageButton border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.3)_0px_7px_22px] rounded-lg`}
      >
        {svg}
      </div>
    );
  }

  const arrowStyle = (
    <div className="w-full h-full bg-page2 grid grid-rows-2 py-[5%]">
      <div className="row-span-1 flex justify-center">
        {renderArrow("up", upSVG)}
      </div>
      <div className="row-span-1 flex justify-center">
        {renderArrow("down", downSVG)}
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

export default UpAndDownSpecial;
