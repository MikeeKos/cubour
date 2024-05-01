import React from "react";
import Link from "next/link";

function Podium(props) {
  function repeatString(word) {
    return new Array(200).fill(word).join(" ");
  }

  function formatTimeString(timeString) {
    const minutes = timeString.substring(0, 2);
    const seconds = timeString.substring(2, 4);
    const milliseconds = timeString.substring(4);

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  return (
    <React.Fragment>
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
                            props.leaderboard.find((el) => el.place === 2).time
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
                            props.leaderboard.find((el) => el.place === 1).time
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
                            props.leaderboard.find((el) => el.place === 3).time
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
    </React.Fragment>
  );
}

export default Podium;
