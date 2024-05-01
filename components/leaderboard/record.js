import React from "react";
import Link from "next/link";

const decorationSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2.979 -12 66.96 14"
    className="w-full h-full"
  >
    <path
      fill="none"
      className="stroke-pageMenu fill-page2"
      stroke="red"
      d="M0 0h61c6 0-3-11-9-11H9C3-11-6 0 0 0m0 1"
    ></path>
  </svg>
);

function Record(props) {
  // console.log(props);

  // props.leaderboard.map((el) => {
  //   // console.log(el);
  //   // leaderboard.find(el => el.place === place);
  // });
  // console.log(props.id)

  function repeatString(word) {
    return new Array(200).fill(word).join(" ");
  }

  const leftArrowBoxSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-14 md:w-24 rotate-90 md:rotate-0"
    >
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        d="M11 9l-3 3m0 0l3 3m-3-3h8m-8.8 8h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C20 18.48 20 17.92 20 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C5.52 20 6.08 20 7.2 20z"
      ></path>
    </svg>
  );

  const rightArrowBoxSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-14 md:w-24 rotate-[270deg] md:rotate-0"
    >
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        d="M13 15l3-3m0 0l-3-3m3 3H8m-.8 8h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C20 18.48 20 17.92 20 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C5.52 20 6.08 20 7.2 20z"
      ></path>
    </svg>
  );

  const controllerSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      strokeWidth="0.304"
      className="w-full h-full fill-page1 rotate-12"
      viewBox="0 0 16 16"
    >
      <g>
        <path
          className="stroke-page1"
          d="M11.5 6.027a.5.5 0 11-1 0 .5.5 0 011 0zm-1.5 1.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm-1.5 1.5a.5.5 0 100-1 .5.5 0 000 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"
        ></path>
        <path
          className="stroke-page1"
          d="M3.051 3.26a.5.5 0 01.354-.613l1.932-.518a.5.5 0 01.62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 01.622-.399l1.932.518a.5.5 0 01.306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 01-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 01-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 01.433-.335.504.504 0 01-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 00-.748 2.295 12.351 12.351 0 00-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 00.426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 00.426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 00-.339-2.406 13.753 13.753 0 00-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"
        ></path>
      </g>
    </svg>
  );

  const curvedArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      className="w-full h-full stroke-page1"
      strokeWidth="0.672"
      viewBox="0 0 24 24"
    >
      <path
        className="fill-page1"
        fill="#000"
        fillRule="evenodd"
        d="M17.53 13.97a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06 0l-5-5a.75.75 0 111.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 010-1.5c2.244 0 3.72.952 4.609 2.187.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 011.06 0z"
        clipRule="evenodd"
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
    <React.Fragment>
      {props.level % 3 === 1 && (
        <div className="w-full h-16 sm:h-24 md:h-36 bg-page1">
          <div className="w-full h-full relative bg-page4 border-t-4 border-x-4 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]">
            <div className="w-full h-full absolute flex items-center justify-center z-20">
              <div className="w-full h-full absolute flex items-center justify-center">
                <div className="font-page text-pageMenu tracking-widest font-extrabold text-lg sm:text-4xl md:text-5xl opacity-[25%]">
                  {props.difficultyName}
                </div>
              </div>
              <div className="h-[50%] aspect-square">
                {props.difficultyIcon}
              </div>
            </div>
            <div className="w-full h-full absolute top-1 sm:top-1 md:top-2">
              {decorationSVG}
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-[36rem] md:h-[22rem] bg-page2 md:grid md:grid-cols-12">
        <div
          className={`${
            props.level % 2 === 0 && "order-2"
          } w-full h-[60%] md:col-span-5 md:w-full md:h-full border-t-4 border-x-4 md:border-r-4 border-pageMenu relative`}
        >
          <div className="w-full h-full absolute overflow-hidden p-2 opacity-10">
            <span className="font-page text-pageMenu tracking-widest font-extrabold text-4xl animate-pulse">
              {repeatString(props.level)}
            </span>
          </div>
          <div className="max-w-md h-full grid grid-cols-3 mx-auto">
            <div className="col-span-1 flex items-end">
              <div className="w-full h-[50%] bg-page5 rounded-t-3xl relative flex justify-center">
                <div className="w-full h-full absolute flex items-end">
                  <div className="w-full h-[60%] mx-2">
                    <div className="relative w-full h-16 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                      <div className="absolute w-full h-full">
                        <div className="w-full h-1/2 font-page tracking-wide text-page1 text-base sm:text-xl font-extrabold flex items-center justify-center">
                          <span className="truncate mx-1">
                            {props.leaderboard.find((el) => el.place === 2) ? (
                              <div>
                                {
                                  props.leaderboard.find((el) => el.place === 2)
                                    .leaderUsername
                                }
                              </div>
                            ) : (
                              "- - -"
                            )}
                          </span>
                        </div>
                        <div className="w-full h-1/2 font-page tracking-wide text-page1 text-xs sm:text-base font-extrabold flex items-center justify-center underline">
                          {props.leaderboard.find((el) => el.place === 2) ? (
                            <div>
                              {formatTimeString(
                                props.leaderboard.find((el) => el.place === 2)
                                  .time
                              )}
                            </div>
                          ) : (
                            "- - -"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] aspect-square bg-pageMenu rounded-full absolute -top-14 sm:-top-16 p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-wave-smooth">
                  <div className="w-full h-full bg-page2 rounded-full p-1 flex items-center justify-center">
                    <div className="w-full h-full bg-pageMenu rounded-full flex items-center justify-center">
                      <div className="w-full h-full rounded font-page text-page1 tracking-widest font-extrabold text-4xl sm:text-5xl flex items-center justify-center pl-1 sm:pl-2">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-end">
              <div className="w-full h-[65%] bg-page4 rounded-t-3xl relative flex justify-center">
                <div className="w-full h-full absolute flex items-end">
                  <div className="w-full h-[70%] mx-2">
                    <div className="relative w-full h-16 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                      <div className="absolute w-full h-full">
                        <div className="w-full h-1/2 font-page tracking-wide text-page1 text-base sm:text-xl font-extrabold flex items-center justify-center">
                          <span className="truncate mx-1">
                            {props.leaderboard.find((el) => el.place === 1) ? (
                              <div>
                                {
                                  props.leaderboard.find((el) => el.place === 1)
                                    .leaderUsername
                                }
                              </div>
                            ) : (
                              "- - -"
                            )}
                          </span>
                        </div>
                        <div className="w-full h-1/2 font-page tracking-wide text-page1 text-xs sm:text-base font-extrabold flex items-center justify-center underline">
                          {props.leaderboard.find((el) => el.place === 1) ? (
                            <div>
                              {formatTimeString(
                                props.leaderboard.find((el) => el.place === 1)
                                  .time
                              )}
                            </div>
                          ) : (
                            "- - -"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] aspect-square bg-pageMenu rounded-full absolute -top-14 sm:-top-16 p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-wave-smooth">
                  <div className="w-full h-full bg-page2 rounded-full p-1">
                    <div className="w-full h-full bg-pageMenu rounded-full">
                      <div className="w-full h-full rounded font-page text-page1 tracking-widest font-extrabold text-4xl sm:text-5xl flex items-center justify-center pl-1 sm:pl-2">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-end">
              <div className="w-full h-[40%] bg-page3 rounded-t-3xl relative flex justify-center">
                <div className="w-full h-full absolute flex items-end">
                  <div className="w-full h-[50%] mx-2">
                    <div className="relative w-full h-16 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                      <div className="absolute w-full h-full">
                        <div className="w-full h-1/2 font-page tracking-wide text-page1 text-base sm:text-xl font-extrabold flex items-center justify-center">
                          <span className="truncate mx-1">
                            {props.leaderboard.find((el) => el.place === 3) ? (
                              <div>
                                {
                                  props.leaderboard.find((el) => el.place === 3)
                                    .leaderUsername
                                }
                              </div>
                            ) : (
                              "- - -"
                            )}
                          </span>
                        </div>
                        <div className="w-full h-1/2 font-page tracking-wide text-page1 text-xs sm:text-base font-extrabold flex items-center justify-center underline">
                          {props.leaderboard.find((el) => el.place === 3) ? (
                            <div>
                              {formatTimeString(
                                props.leaderboard.find((el) => el.place === 3)
                                  .time
                              )}
                            </div>
                          ) : (
                            "- - -"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] aspect-square bg-pageMenu rounded-full absolute -top-14 sm:-top-16 p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-wave-smooth">
                  <div className="w-full h-full bg-page2 rounded-full p-1">
                    <div className="w-full h-full bg-pageMenu rounded-full">
                      <div className="w-full h-full rounded font-page text-page1 tracking-widest font-extrabold text-4xl sm:text-5xl flex items-center justify-center pl-1 sm:pl-2">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            props.level % 2 === 0 && "order-1"
          } w-full h-[40%] md:col-span-7 md:w-full md:h-full p-5 border-t-4 border-x-4 md:border-x-0 ${
            props.level % 2 === 0 ? "md:border-l-4" : "md:border-r-4 "
          } border-pageMenu bg-page2`}
        >
          <div className="w-full h-full">
            <div className="w-full h-full grid grid-cols-12">
              <div
                className={`${
                  props.level % 2 !== 0 && "order-2"
                } col-span-10 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]`}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <div className="-top-10 w-full h-full absolute flex items-center justify-center opacity-0 sm:opacity-100 md:opacity-0 lg:opacity-100">
                    <div className="flex flex-row w-28 h-14 lg:w-48 lg:h-24 animate-wave-smooth">
                      <div className="w-1/2 h-full">{controllerSVG}</div>
                      <div className="w-1/2 h-full -rotate-[36deg]">
                        {curvedArrow}
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-full h-full">
                    <div className="flex items-end justify-start w-full h-full bottom-0 p-5">
                      <div className="font-page text-page1 tracking-widest font-extrabold text-xs sm:text-4xl md:text-2xl lg:text-5xl opacity-50 animate-swing-slow">
                        {props.difficultyName}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/play/${props.id}`}
                    className="absolute w-36 h-36 hover:w-40 hover:h-40 sm:w-64 sm:h-64 sm:hover:w-80 sm:hover:h-80 hover:cursor-pointer active:w-32 active:h-32 sm:active:w-60 sm:active:h-60 duration-200 bg-page2 rounded-full -bottom-10 -right-12 sm:-bottom-28 sm:-right-28"
                  >
                    <div className="absolute z-50 w-16 h-16 sm:w-24 sm:h-24 -top-7 bg-page5 rounded-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
                    <div className="absolute top-1/2 right-1/2 z-50 w-16 h-16 sm:w-24 sm:h-24 bg-page5 rounded-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
                    <div className="absolute top-10 left-36 z-50 w-16 h-16 sm:w-24 sm:h-24 bg-page5 rounded-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
                    <div className="w-full h-full pt-10 pl-6 sm:pt-20 sm:pl-5 font-page text-pageMenu tracking-widest font-extrabold text-2xl sm:text-4xl rounded-2xl animate-growUp">
                      PLAY
                    </div>
                  </Link>
                  <div className="absolute left-6 top-6">
                    <div className="font-page text-pageMenu tracking-widest font-extrabold text-2xl sm:text-4xl bg-page1 p-2 rounded-2xl">
                      lvl {props.level}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${props.level % 2 !== 0 && "order-1"} col-span-2`}
              >
                <div
                  className={`w-full h-full flex flex-col items-center justify-between ${
                    props.level % 2 === 0 ? "ml-2 md:ml-3 lg:ml-2" : "pr-4"
                  }`}
                >
                  <div>
                    {props.level % 2 === 0 ? (
                      <div>{rightArrowBoxSVG}</div>
                    ) : (
                      <div>{leftArrowBoxSVG}</div>
                    )}
                  </div>
                  <div>
                    {props.level % 2 === 0 ? (
                      <div>{rightArrowBoxSVG}</div>
                    ) : (
                      <div>{leftArrowBoxSVG}</div>
                    )}
                  </div>
                  <div>
                    {props.level % 2 === 0 ? (
                      <div>{rightArrowBoxSVG}</div>
                    ) : (
                      <div>{leftArrowBoxSVG}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Record;
