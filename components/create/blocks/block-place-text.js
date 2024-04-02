import React from "react";

function BlockPlaceText() {
  return (
    <div className="w-full h-[12rem] md:h-[14rem] border-pageMenu relative overflow-hidden">
      <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7 opacity-100 md:opacity-0 lg:opacity-100">
        <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
      </div>
      <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4 opacity-100 md:opacity-0 lg:opacity-100">
        <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
      </div>
      <div className="w-full h-full absolute flex items-end justify-end md:items-end md:justify-center lg:justify-end p-5 md:p-0 lg:p-3 opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-swing-slow"
        >
          <path
            className="fill-pageMenu"
            fill="#000"
            fillRule="evenodd"
            d="M11.207 5.68c-.116.174-.207.468-.207.82V8a1 1 0 11-2 0V7c0-.352-.09-.646-.207-.82C8.697 6.035 8.613 6 8.5 6c-.112 0-.197.035-.293.18C8.091 6.354 8 6.648 8 7v5a1 1 0 11-2 0v-2c0-.352-.09-.646-.207-.82C5.697 9.035 5.613 9 5.5 9c-.112 0-.197.035-.293.18C5.091 9.354 5 9.648 5 10v4c0 1.033.7 2.14 2.055 3.043C8.387 17.932 10.194 18.5 12 18.5c3.668 0 6-2.249 6-4.5V8.5c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18-.116.174-.207.468-.207.82V9a1 1 0 11-2 0V7c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18-.116.174-.207.468-.207.82v1.5a1 1 0 11-2 0v-2c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18zm2.079-1.34c.338-.21.745-.34 1.214-.34.888 0 1.553.465 1.957 1.07.116.174.211.36.288.552.23-.078.482-.122.755-.122.888 0 1.553.465 1.957 1.07.384.576.543 1.282.543 1.93V14c0 3.749-3.668 6.5-8 6.5-2.194 0-4.388-.681-6.055-1.793C4.3 17.61 3 15.967 3 14v-4c0-.648.16-1.354.543-1.93C3.947 7.465 4.613 7 5.5 7c.175 0 .342.018.5.052V7c0-.648.16-1.354.543-1.93C6.947 4.465 7.613 4 8.5 4c.469 0 .875.13 1.214.34.41-.489 1.014-.84 1.786-.84s1.376.351 1.786.84z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="w-full h-full flex items-center justify-center absolute">
        <div className="w-[80%] lg:w-[60%] h-full text-center pt-5">
          <span className="bg-pageMenu text-center font-page text-md text-page1 tracking-wide font-bold">
            Drag a special block icon onto the map. Each icon's function is
            described next to it
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlockPlaceText;
