import React from "react";
import useMeasure from "react-use-measure";

function MainGame() {
  const [ref, { height, width }] = useMeasure();

  return (
    <React.Fragment>
      <div
        ref={ref}
        className="w-full h-screen relative bg-page4 overflow-y-scroll"
      >
        <div
          className={`absolute w-full ${
            height > 710 ? "h-full" : "h-[43rem]"
          } grid col-span-2 row-span-6 md:grid-cols-12 md:grid-rows-1 bg-page1 border-2 border-pageMenu shadow-xl`}
        >
          <div className="order-2 col-span-1 row-span-2 md:order-1 md:col-span-3 border-2 border-pageMenu"></div>
          <div className="order-1 col-span-2 row-span-4 md:order-2 md:col-span-6 border-2 border-pageMenu flex items-center justify-center p-5 md:p-10 lg:p-16">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="h-full w-fit md:h-fit md:w-full aspect-[50/50] md:bg-page4 bg-page5"></div>
            </div>
          </div>
          <div className="order-2 col-span-1 row-span-2 md:order-3 md:col-span-3 border-2 border-pageMenu"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainGame;
