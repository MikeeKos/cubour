import React from "react";

function Flashing(props) {
  return (
    <React.Fragment>
      <div className="w-full h-[12rem] lg:h-[10rem]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-[10rem]">
            <div className="w-full h-[5rem] flex items-center justify-center">
              <div
                className="bg-pageMenu w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 relative shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] flex items-center justify-center hover:cursor-grab"
                draggable="true"
                id={props.id}
                onDragStart={props.handleDragStart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-[90%] h-[90%]"
                >
                  <path
                    className="fill-page1"
                    fill="#000"
                    fillRule="evenodd"
                    d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.25A1.75 1.75 0 003.25 17C2.56 17 2 16.44 2 15.75V11C2 5.477 6.477 1 12 1s10 4.477 10 10v4.75c0 .69-.56 1.25-1.25 1.25A1.75 1.75 0 0019 18.75V21zm-2-1v-1.25a3.751 3.751 0 013-3.675V11a8 8 0 10-16 0v4.075c1.712.348 3 1.86 3 3.675V20h2v-2a1 1 0 112 0v2h2v-2a1 1 0 112 0v2h2zm-6-7.5c0 1.38-2.368 2.5-3.748 2.5-1.267 0-1.26-.945-1.25-2.17l.001-.33a2.5 2.5 0 114.997 0zm6.998.33l-.001-.33a2.5 2.5 0 10-4.997 0c0 1.38 2.368 2.5 3.747 2.5 1.268 0 1.26-.945 1.251-2.17z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-center">
                <span className="font-page text-5xl md:text-3xl lg:text-5xl font-extrabold text-pageMenu pb-2 md:pb-1 lg:pb-2">
                  x
                </span>
              </div>
              <div className="w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-16 relative flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -64 640 640"
                  className="w-20 h-20"
                >
                  <path
                    className="fill-pageMenu"
                    d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full h-[5rem] text-center pt-3">
              <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
                A blinking block that blinks every {props.time} milliseconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Flashing;
