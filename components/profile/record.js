import React from "react";

function SingleRecord(props) {
  const crownSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-10 h-10 mr-1"
    >
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 19h12"
      ></path>
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.558 16H7.442a2 2 0 01-1.898-1.367L3.707 9.12C3.447 8.338 4.262 7.631 5 8l.71.355a2 2 0 002.31-.374l2.566-2.567a2 2 0 012.828 0l2.567 2.567a2 2 0 002.308.374L19 8c.738-.369 1.554.338 1.293 1.121l-1.837 5.511A2 2 0 0116.558 16z"
      ></path>
    </svg>
  );

  function formatTimeString(timeString) {
    const minutes = timeString.substring(0, 2);
    const seconds = timeString.substring(2, 4);
    const milliseconds = timeString.substring(4);

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  return (
    <div className="w-full h-32 bg-page3 mb-6">
      <div className="w-full h-1/3 bg-pageMenu flex">
        <div className="w-[30%] h-full bg-page1 flex items-center justify-center">
          <span className="w-full h-full font-page text-lg md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            LVL {props.level}
          </span>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="line-clamp-1 w-full h-full font-page text-lg md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest text-center truncate flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            {props.username}
          </div>
        </div>
        <div className="w-[20%] h-full bg-page1 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="fill-pageMenu w-12 h-12 pb-1"
          >
            <path d="M16 9c-2.2 0-4 1.8-4 4 0 1.2.559 2.266 1.406 3h-1.5c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h.5l-1.406 3.563L10.375 23H8.906a1.003 1.003 0 00-.926.855c-.066.465.204.918.645 1.082l-1.344 1.344-.281.313V29h18v-2.406l-.281-.313-1.344-1.343c.457-.172.727-.649.633-1.13A.998.998 0 0023 23h-1.375l-.719-1.438L19.5 18h.5c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-1.406C19.44 15.266 20 14.2 20 13c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-1.313 7h2.626l1.75 4.375.03.031v.032l.282.562h-6.75l.281-.563v-.03l.031-.032zm-3.25 7h9.126l2 2H9.438z"></path>
          </svg>
        </div>
      </div>
      <div className="w-full h-2/3 bg-page2 flex">
        <div className="w-[40%] h-full">
          <span className="w-full h-full font-page text-lg md:text-base lg:text-lg text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div
              className={`flex items-center justify-center ${
                props.place === 1 && "bg-page4 p-1 rounded-2xl"
              }`}
            >
              {crownSVG}: {props.place}
            </div>
          </span>
        </div>
        <div className="w-[60%] h-full bg-page4">
          <span className="w-full h-full font-page text-lg md:text-base lg:text-lg text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <span className="truncate mx-2">
              TIME: {formatTimeString(props.time)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleRecord;
