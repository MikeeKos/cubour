import React, { useState } from "react";
import Digit from "./digit/digit";
import DigitUnit from "./digit/digit-unit";

function SetTimeBlock(props) {
  const [timeLimit, setTimeLimit] = useState("0000000");

  const directionIndicator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      className="w-[80%] h-[80%] flex items-center justify-center"
      data-name="Line Color"
      viewBox="0 0 24 24"
    >
      <path
        className="stroke-pageMenu"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7"
        d="M21 18L12 6 3 18"
      ></path>
    </svg>
  );

  const updateDigit = (action, index, isMaxSix) => {
    let digits = timeLimit.split("");
    let digit = parseInt(digits[index], 10);
    let checkDigit = parseInt(digits[index + 1], 10);

    if (action === "add") {
      if (isMaxSix) {
        if (digit < 5) {
          digit++;
        }
      } else {
        if (digit < 9) {
          digit++;
        }
      }
    } else if (action === "sub") {
      if (digit > 0) {
        digit--;
      }
    }

    digits[index] = digit.toString();
    const result = digits.join("");
    setTimeLimit(result);
    props.timeFunc(result);
  };

  return (
    <React.Fragment>
      <div className="w-full h-full bg-page4 shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center">
        <div className="w-[85%] sm:w-[60%] md:w-[90%] lg:w-[90%] h-[80%]">
          <div className="w-full h-[30%] flex items-center justify-center">
            <span className="shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] animate-growUp p-1 rounded-xl font-page text-2xl md:text-lg lg:text-xl bg-page1 text-pageMenu font-extrabold tracking-widest">
              Set time limit
              {/* {timeLimit} */}
            </span>
          </div>
          <div className="w-full h-[70%] bg-page2 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="w-full h-full grid grid-cols-9 grid-rows-1 p-2 gap-2 md:p-1 md:gap-1 lg:p-2 lg:gap-2">
              <Digit
                timeLimit={timeLimit}
                directionIndicator={directionIndicator}
                func={updateDigit}
                index={0}
                isMaxSix={true}
              />
              <Digit
                timeLimit={timeLimit}
                directionIndicator={directionIndicator}
                func={updateDigit}
                index={1}
                isMaxSix={false}
              />
              <DigitUnit digitUnit={"m"} />
              <Digit
                timeLimit={timeLimit}
                directionIndicator={directionIndicator}
                func={updateDigit}
                index={2}
                isMaxSix={true}
              />
              <Digit
                timeLimit={timeLimit}
                directionIndicator={directionIndicator}
                func={updateDigit}
                index={3}
                isMaxSix={false}
              />
              <DigitUnit digitUnit={"s"} />
              <Digit
                timeLimit={timeLimit}
                directionIndicator={directionIndicator}
                func={updateDigit}
                index={4}
                isMaxSix={true}
              />
              <Digit
                timeLimit={timeLimit}
                directionIndicator={directionIndicator}
                func={updateDigit}
                index={5}
                isMaxSix={false}
              />
              <DigitUnit digitUnit={"ms"} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SetTimeBlock;
