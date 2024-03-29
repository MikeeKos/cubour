import Image from "next/image";
import React from "react";
import { trophySVG } from "../../SVG/game-grid";

function SelectLevels(props) {
  const cubeDesignSVG = (color) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-12 h-12 animate-levitate hover:cursor-pointer"
      >
        <path
          className={color}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.387 7.157L12 12 3.61 7.15M12 12v9"
        ></path>
        <path
          className={color}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 2.577a2 2 0 012 0l6.66 3.846a2 2 0 011 1.732v7.69a2 2 0 01-1 1.732L13 21.423a2 2 0 01-2 0l-6.66-3.846a2 2 0 01-1-1.732v-7.69a2 2 0 011-1.732L11 2.577z"
        ></path>
      </svg>
    );
  };

  const higherDimCube = (color) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 48 48"
        className="w-12 h-12 animate-levitate hover:cursor-pointer"
      >
        <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
        <path fill="#fff" fillOpacity="0.01" d="M48 0H0v48h48V0z"></path>
        <path
          className={color}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M30 27l-6 17M18 27l6 17M18 27h12M41 34l-11-7M41 14L30 27M41 14l-17 3M30 27l-6-10M24 4v13M7 14l17 3M18 27l6-10M18 27L7 14M18 27L7 34M41.32 14L24 4 6.68 14v20L24 44l17.32-10V14z"
        ></path>
      </svg>
    );
  };

  const fireSVG = (color) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="w-12 h-12 animate-levitate hover:cursor-pointer"
      >
        <path
          className={color}
          d="M9.32 15.653a.812.812 0 01-.086-.855c.176-.342.245-.733.2-1.118a2.106 2.106 0 00-.267-.779 2.027 2.027 0 00-.541-.606 3.96 3.96 0 01-1.481-2.282c-1.708 2.239-1.053 3.51-.235 4.63a.748.748 0 01-.014.901.87.87 0 01-.394.283.838.838 0 01-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.686 4.686 0 01-.906-1.555 4.811 4.811 0 01-.263-1.797s-.133-2.463 2.837-4.876c0 0 3.51-2.978 2.292-5.18a.621.621 0 01.112-.653.558.558 0 01.623-.147l.146.058a7.63 7.63 0 012.96 3.5c.58 1.413.576 3.06.184 4.527.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325 1.055-.013.086.137 2.292 3.343 1.107 6.048a5.516 5.516 0 01-1.84 2.027 6.127 6.127 0 01-2.138.893.834.834 0 01-.472-.038.867.867 0 01-.381-.29zM7.554 7.892a.422.422 0 01.55.146c.04.059.066.126.075.198l.045.349c.02.511.014 1.045.213 1.536.206.504.526.95.932 1.298a3.06 3.06 0 011.16 1.422c.22.564.25 1.19.084 1.773a4.123 4.123 0 001.39-.757l.103-.084c.336-.277.613-.623.813-1.017.201-.393.322-.825.354-1.269.065-1.025-.284-2.054-.827-2.972-.248.36-.59.639-.985.804-.247.105-.509.17-.776.19a.792.792 0 01-.439-.1.832.832 0 01-.321-.328.825.825 0 01-.035-.729c.412-.972.54-2.05.365-3.097a5.874 5.874 0 00-1.642-3.16c-.156 2.205-2.417 4.258-2.881 4.7a3.537 3.537 0 01-.224.194c-2.426 1.965-2.26 3.755-2.26 3.834a3.678 3.678 0 00.459 2.043c.365.645.89 1.177 1.52 1.54C4.5 12.808 4.5 10.89 7.183 8.14l.372-.25z"
        ></path>
      </svg>
    );
  };

  const skullWithBonesSVG = (color) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-10 h-10 mx-2 animate-levitate hover:cursor-pointer"
      >
        <path
          className={color}
          fill="#000"
          fillRule="evenodd"
          d="M12 .035a8 8 0 00-8 8v3.133c-.527.08-1.19.246-1.83.589-1.085.583-1.663 1.59-1.936 2.517-.27.917-.28 1.88-.12 2.572a2.178 2.178 0 00.416.82c-.127.168-.2.338-.241.445a3.658 3.658 0 00-.193.792 8.546 8.546 0 00-.036 1.809c.05.614.162 1.275.37 1.82.103.27.248.565.463.814.22.255.564.518 1.04.564 2.306.22 3.557-.143 4.446-.827.278-.214.545-.49.72-.672.054-.056.1-.104.134-.137.18-.175.307-.262.485-.316l4.277-1.294 3.74 1.174.011.004c.154.046.363.156.711.372l.247.156h.001c.276.175.606.384.958.58.971.538 2.232 1.05 3.924 1.05.97 0 1.563-.692 1.867-1.293.313-.615.463-1.374.503-2.092.041-.726-.026-1.5-.222-2.175a4.056 4.056 0 00-.32-.798c.612-.82.639-1.902.476-2.743-.226-1.168-.884-2.397-1.674-3.038-.674-.547-1.611-.7-2.217-.754V8.035a8 8 0 00-8-8zM5.08 13.09h.017c.023.002.046.003.07.003.504 0 .833.379.833.75v.807a1 1 0 00.72.96l1.804.524-2.041.617a10.691 10.691 0 00-3.45-.06c-.444-.055-.701-.135-.845-.21-.092-.05-.119-.084-.134-.123-.07-.344-.074-.934.098-1.52.176-.596.495-1.067.965-1.32.435-.233.931-.346 1.345-.395a4.762 4.762 0 01.618-.033zm9.826 3.23l-2.621.764L6.82 18.74a1 1 0 01-.503.02c-1.066-.233-2.194-.218-3.107-.071-.46.074-.832.176-1.095.276a2.61 2.61 0 00-.04.22c-.051.364-.063.86-.022 1.368.04.513.13.967.245 1.268.018.047.035.086.05.119 1.857.148 2.488-.193 2.81-.441.157-.12.252-.22.384-.358.08-.082.17-.178.296-.3.3-.292.698-.614 1.3-.796l4.571-1.384.047-.013 6.643-1.661a1 1 0 01.456-.007c.786.172 1.897.066 2.705-.337.308-.153.528-.529.367-1.363-.16-.823-.629-1.587-.97-1.864-.182-.148-.6-.271-1.156-.317a6.305 6.305 0 00-.83-.012l-.029.001a1.155 1.155 0 01-.11.006c-.504 0-.833.379-.833.75v.807a1 1 0 01-.713.958l-2.374.71-.007.002zM15 13v1.204l1-.299v-.061c0-1.267.863-2.288 2-2.63v-3.18a6 6 0 00-12 0v3.18c1.137.342 2 1.363 2 2.63v.055l1 .29V13a1 1 0 112 0v1.36h2V13a1 1 0 112 0zM2.168 18.803l-.01.022a.086.086 0 01.01-.022zm14.16 1.126l-.643-.202 2.987-.747c.935.156 2.05.08 3.05-.249.03.072.062.16.092.265.122.422.177.965.147 1.508-.031.55-.145 1.012-.29 1.3a.767.767 0 01-.129.196c-1.23-.009-2.142-.374-2.908-.799a16.03 16.03 0 01-.82-.496 39.735 39.735 0 00-.3-.19c-.343-.212-.752-.455-1.185-.586zm5.189 2.089c0-.001.005-.006.015-.01-.01.009-.015.01-.015.01zM11 9c0 1.105-1.894 2-2.998 2-1.014 0-1.008-.756-1-1.735V9A2 2 0 1111 9zm5.997 0l.002.265c.007.98.013 1.735-1.001 1.735C14.894 11 13 10.105 13 9a2 2 0 113.997 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };

  const knifeSVG = (color) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-12 h-12 animate-levitate hover:cursor-pointer"
      >
        <path
          className={color}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.725 11.275L16 12.5l-5.987 5.322A12.979 12.979 0 013 21l.794-1.456c.826-1.514 1.238-2.27 1.713-2.986.42-.636.878-1.247 1.369-1.83.552-.657 1.162-1.267 2.38-2.485L12 9.498m-.5-.5l5.95-5.948A1.945 1.945 0 0120.2 5.8l-.358.358a1.166 1.166 0 01-.825.342H18l-2 2v.174c0 .49 0 .734-.055.964-.05.204-.13.4-.24.579-.123.201-.296.374-.642.72l-.813.813-2.75-2.752z"
        ></path>
      </svg>
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[45rem] bg-pageMenu">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center z-40 shadow-[inset_-12px_-8px_40px_#46464620]">
            <div className="w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-[90%] bg-page4 opacity-80 rounded-xl">
              <div className="w-full h-full overflow-y-scroll"></div>
            </div>
          </div>
          <div className="absolute w-full h-full flex justify-center items-center z-50 shadow-[inset_-12px_-8px_40px_#46464620]">
            <div className="w-[70%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-[90%] rounded-xl overflow-hidden">
              <div className="w-full h-full overflow-y-scroll">
                <div className="w-full h-[15rem]">
                  <div className="relative w-full h-[15rem]">
                    <div className="w-full h-full absolute flex items-start justify-end top-7 right-7 opacity-0 sm:opacity-100">
                      <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                    </div>
                    <div className="w-full h-full absolute flex items-start justify-end top-4 right-4 opacity-0 sm:opacity-100">
                      <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                    </div>
                    <div className="w-full h-full absolute flex items-end justify-start left-7 bottom-7 opacity-0 sm:opacity-100">
                      <div className="w-12 h-12 bg-page2 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                    </div>
                    <div className="w-full h-full absolute flex items-end justify-start left-4 bottom-4 opacity-0 sm:opacity-100">
                      <div className="w-12 h-12 bg-page1 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-growUp hover:scale-110 z-50 duration-300"></div>
                    </div>
                    <div className="w-full h-full absolute flex items-end justify-end pe-2 pb-2 lg:pe-5 lg:pb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-28 h-28 md:w-14 md:h-14 lg:w-20 lg:h-20 rotate-180 animate-pulse"
                      >
                        <path
                          className="stroke-page1"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 3v18M7 3l4 4M7 3L3 7m11-4h7m-7 6h5m-5 6h3m-3 6h1"
                        ></path>
                      </svg>
                    </div>
                    <div className="w-full h-full absolute">
                      <div className="absolute w-16 h-16 top-3 left-2 md:left-7 lg:top-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-16 h-16 animate-scale-swing-rotate"
                        >
                          <path
                            className="stroke-pageMenu"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 7.5l7.608-4.28c.143-.08.214-.12.29-.136a.5.5 0 01.204 0c.076.016.147.056.29.137L20 7.5m-16 0v8.532c0 .17 0 .256.025.332a.5.5 0 00.106.181c.054.06.128.1.277.184L12 21M4 7.5l8 4m0 9.5l7.592-4.27c.149-.084.223-.126.277-.185a.5.5 0 00.106-.181c.025-.076.025-.162.025-.332V7.5M12 21v-9.5m8-4l-8 4"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute w-full h-full flex flex-col items-center justify-center">
                      <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] mb-2 p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
                        select
                      </span>
                      <span className="animate-growUp shadow-[rgba(0,_0,_0,_0.4)_0px_15px_45px] p-2 bg-page1 rounded-2xl font-page text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-widest">
                        level
                      </span>
                    </div>
                    <div className="w-full h-full absolute shadow-[inset_-24px_-16px_80px_#46464620]"></div>
                  </div>
                </div>
                <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          <div className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"></div>
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 1
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end"></div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          <div className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"></div>
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-start"></div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          <div className="w-9 h-9 rounded-xl border-4 border-page1 animate-levitate mr-2 mb-1 hover:cursor-pointer"></div>
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 2
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full"></div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {cubeDesignSVG("stroke-page2")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 5
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[75%] h-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {cubeDesignSVG("stroke-page2")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 4
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[80%] h-full"></div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {cubeDesignSVG("stroke-page2")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {higherDimCube("stroke-page1")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 7
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end"></div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {higherDimCube("stroke-page1")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 9
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-start"></div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {higherDimCube("stroke-page1")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 8
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full"></div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {fireSVG("fill-page2")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 11
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[75%] h-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {fireSVG("fill-page2")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 10
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[80%] h-full"></div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {fireSVG("fill-page2")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 12
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {knifeSVG("stroke-page1")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 13
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end"></div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {knifeSVG("stroke-page1")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-start"></div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[80%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {knifeSVG("stroke-page1")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page1 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay">
                            lvl 14
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full"></div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                          {skullWithBonesSVG("fill-pageMenu")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-pageMenu md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest animate-levitate-delay">
                            lvl 17
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-end">
                        <div className="w-[75%] h-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
                    <div className="w-full h-full grid grid-rows-3 grid-cols-1">
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {skullWithBonesSVG("fill-pageMenu")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-pageMenu md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest animate-levitate-delay">
                            lvl 16
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[80%] h-full"></div>
                      </div>
                      <div className="col-span-1 row-span-1 flex justify-start">
                        <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                          {skullWithBonesSVG("fill-pageMenu")}
                          <span className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-pageMenu md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest animate-levitate-delay">
                            lvl 18
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="w-full h-[5rem] grid grid-cols-2 grid-rows-1">
                  <div className="col-span-1 row-span-1 border-r-4 border-pageMenu"></div>
                  <div className="col-span-1 row-span-1 border-l-4 border-pageMenu"></div>
                </div>
                <div className="w-full h-[8rem] flex items-center justify-center">
                  <div className="w-20 h-20 animate-scale-swing-rotate">{trophySVG}</div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/stage.jpg"}
            height={3967}
            width={5950}
            alt="Stage"
            // objectFit="cover"
            // objectPosition="center"
            placeholder="blur"
            blurDataURL={"/stage.jpg"}
            className="w-full h-full object-cover overflow-hidden absolute saturate-[0.8] brightness-125"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectLevels;
