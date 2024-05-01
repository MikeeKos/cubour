"use client";

import React, { useState } from "react";
import { rightSVG, leftSVG } from "../../SVG/arrows";
import TutorialCarousel from "./tutorial-carousel";
import TextCarousel from "./text-carousel";
import useMeasure from "react-use-measure";
import SideAction from "../ui/side-action";

function TutorialPage() {
  const [ref, { height, width }] = useMeasure();
  const [carouselCounter, setCarouselCounter] = useState(0);
  const firstObj = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  const maxCount = firstObj.length - 1;

  const toTheLeftHandler = () => {
    setCarouselCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const toTheRightHandler = () => {
    setCarouselCounter((prev) => (prev < maxCount ? prev + 1 : maxCount));
  };

  return (
    <div
      ref={ref}
      className="w-full h-screen relative bg-page4 overflow-y-scroll"
    >
      <div className="w-full h-full overflow-hidden absolute">
        <SideAction position={3} theme={"dark"} goBackPath={"/"} />
      </div>
      <div
        className={`absolute w-full ${height > 710 ? "h-full" : "h-[43rem]"}`}
      >
        <div className="w-full h-full bg-page1 p-5">
          <div className="w-full h-full border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="w-full h-full grid grid-rows-6 grid-cols-1 md:grid-rows-6 md:grid-cols-12">
              <div className="row-span-1 col-span-1 md:row-span-2 md:col-span-5 flex items-center justify-center border-b-4 border-pageMenu overflow-hidden">
                <div className="w-full h-full grid grid-cols-12">
                  <div className="col-span-3 p-5 flex justify-center md:items-center scale-75 sm:scale-100">
                    <div className="h-full aspect-square md:w-full md:aspect-square md:h-auto border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] hover:cursor-pointer hover:scale-110 active:scale-90 duration-100">
                      <div className="w-full h-full relative bg-page2">
                        <div
                          onClick={toTheLeftHandler}
                          className="absolute w-full h-full"
                        >
                          {leftSVG}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 flex items-center justify-center">
                    <span className="font-page text-2xl sm:text-5xl md:text-4xl text-pageMenu tracking-wider font-extrabold text-center overflow-hidden ">
                      tutorial
                    </span>
                  </div>
                  <div className="col-span-3 p-5 flex justify-center md:items-center scale-75 sm:scale-100">
                    <div className="h-full aspect-square md:w-full md:aspect-square md:h-auto border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] hover:cursor-pointer hover:scale-110 active:scale-90 duration-100">
                      <div className="w-full h-full relative">
                        <div
                          onClick={toTheRightHandler}
                          className="absolute w-full h-full bg-page2"
                        >
                          {rightSVG}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-span-3 col-span-1 border-b-4 md:border-b-0 md:border-l-4 border-pageMenu md:row-span-6 md:col-span-7 bg-page4">
                <div className="w-full h-full md:p-5 md:shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px]">
                  <TutorialCarousel
                    onLeftClick={toTheLeftHandler}
                    onRightClick={toTheRightHandler}
                    count={carouselCounter}
                    firstObj={firstObj}
                  />
                </div>
              </div>
              <div className="row-span-2 col-span-1 md:row-span-6 md:col-span-5 bg-page3 md:p-5 md:shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px]">
                <TextCarousel
                  onLeftClick={toTheLeftHandler}
                  onRightClick={toTheRightHandler}
                  count={carouselCounter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialPage;
