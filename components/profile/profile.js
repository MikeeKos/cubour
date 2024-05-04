import React, { useState } from "react";
import Image from "next/image";
import SingleRecord from "./record";
import MenuIcon from "./menu-icons";
import useMeasure from "react-use-measure";
import SideAction from "../ui/side-action";
import {
  checkSVG,
  crossSVG,
  pawnSVG,
  playSVG,
  tutorialSVG,
  leaderboardSVG,
  createSVG,
} from "../../SVG/profile";

function ProfilePanel(props) {
  const [ref, { height, width }] = useMeasure();

  const seeds = props.seeds;

  function filterAndSortLeaderboard(entries, username) {
    const filteredAndProcessed = entries
      .map((entry) => ({
        ...entry,
        leaderboard: entry.leaderboard.filter(
          (leader) => leader.leaderUsername === username
        ),
      }))
      .filter((entry) => entry.leaderboard.length > 0);
    const sorted = filteredAndProcessed.sort(
      (a, b) => Number(a.level) - Number(b.level)
    );
    let completeArray = [];
    sorted.map((el) => {
      let place;
      let time;
      let level = el.level;
      el.leaderboard.map((entry) => {
        place = entry.place;
        time = entry.time;
        completeArray.push({ level, place, time });
      });
    });
    return completeArray;
  }
  const checkedList = filterAndSortLeaderboard(seeds, props.username);

  return (
    <div
      ref={ref}
      className="w-full h-screen relative bg-page4 overflow-y-scroll overflow-x-hidden"
    >
      <SideAction position={1} theme={"dark"} goBackPath={"/"} />
      <div
        className={`absolute w-full ${height > 710 ? "h-full" : "h-[43rem]"}`}
      >
        <div className="w-full h-full bg-page4">
          <div className="w-full h-[66rem] md:h-[33rem] md:flex overflow-hidden">
            <div className="w-full h-[33rem] md:w-[60%] md:h-[33rem] bg-page5 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]">
              <div className="relative w-full h-full bg-page1">
                <div className="w-[100%]  sm:w-[80%] md:w-[80%] lg:w-[60%] h-full absolute left-0 top-0 z-40">
                  <div className="w-full h-full">
                    <div className="relative w-full h-28 flex items-center justify-center p-4">
                      <span className="relative bg-page3 border-4 border-pageMenu h-full mx-4 w-full font-page text-xl md:text-2xl lg:text-3xl text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                        <div className="absolute h-full aspect-square border-r-4 border-pageMenu bg-page4 left-0 flex items-center justify-center">
                          {pawnSVG}
                        </div>
                        {props.username}
                      </span>
                    </div>
                    <div className="w-full h-full p-8">
                      <div className="w-full h-[calc(100%-7rem)] bg-page3 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                        <div className="w-full h-full">
                          <div className="w-full h-[25%] bg-page3 border-b-4 border-pageMenu flex items-center justify-center">
                            <div className="font-page text-pageMenu text-2xl bg-page1 p-1 font-extrabold tracking-wider rounded-xl shadow-2xl">
                              completed levels
                            </div>
                          </div>
                          <div className="w-full h-[75%] bg-page2">
                            <div className="w-full h-full grid grid-cols-3 grid-rows-6 gap-1 p-1">
                              {props.levelCompleted.map((el) => (
                                <div
                                  key={el.level}
                                  className={`${
                                    el.level % 6 <= 3 &&
                                    el.level % 6 !== 0 &&
                                    "bg-page4"
                                  } row-span-1 col-span-1 border-4 border-pageMenu shadow-2xl`}
                                >
                                  <div className="w-full h-full flex flex-row overflow-hidden relative">
                                    <div className="absolute w-[30%] h-full flex items-center justify-center">
                                      <div className="font-page text-pageMenu bg-page1 font-extrabold flex items-center justify-center px-2 ">
                                        {el.level}
                                      </div>
                                    </div>
                                    <div className="absolute w-full h-full flex items-center justify-center">
                                      {el.isCompleted ? (
                                        <div>{checkSVG}</div>
                                      ) : (
                                        <div className="opacity-50">
                                          {crossSVG}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={"/bulb.jpg"}
                  height={3456}
                  width={4608}
                  alt="Stage"
                  placeholder="blur"
                  blurDataURL={"/bulb.jpg"}
                  className="w-full h-full object-cover overflow-hidden saturate-[0.8] brightness-[120%] opacity-[85%]"
                />
              </div>
            </div>
            <div className="w-full h-[33rem] md:w-[40%] md:h-[33rem] bg-page2 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]">
              <div className="w-full h-full bg-page3">
                <div className="w-full h-28 p-5">
                  <div className="w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-page2 flex items-center justify-center border-4 border-pageMenu">
                    <span className="font-page text-5xl text-pageMenu tracking-wider font-extrabold text-center">
                      Records
                    </span>
                  </div>
                </div>
                <div className="w-full h-[calc(100%-7rem)] p-5">
                  <div className="w-full h-full overflow-y-scroll">
                    {checkedList.length === 0 ? (
                      <div className="w-full h-full bg-page2 border-4 border-pageMenu flex items-center justify-center font-page font-extrabold tracking-wide text-lg sm:text-xl text-pageMenu">
                        no records yet...
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        {checkedList.map((el) => (
                          <SingleRecord
                            key={`${el.level}-${el.place}-${el.time}`}
                            username={props.username}
                            level={el.level}
                            place={el.place}
                            time={el.time}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[24rem] md:h-[12rem] bg-page2 border-b-2 border-pageMenu">
            <div className="w-full h-full grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4">
              <MenuIcon givenSVG={playSVG} text={"play"} />
              <MenuIcon givenSVG={tutorialSVG} text={"tutorial"} />
              <MenuIcon givenSVG={leaderboardSVG} text={"leaderboard"} />
              <MenuIcon givenSVG={createSVG} text={"create"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
