import React, { useState } from "react";
import Image from "next/image";
import SingleRecord from "./record";
import MenuIcon from "./menu-icons";

const checkSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-6 sm:w-10"
  >
    <g>
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M6 12l4.243 4.243 8.484-8.486"
      ></path>
    </g>
  </svg>
);

const crossSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-6 sm:w-10 fill-pageMenu"
  >
    <path d="M18.8 16l5.5-5.5c.8-.8.8-2 0-2.8-.3-.4-.8-.7-1.3-.7s-1 .2-1.4.6L16 13.2l-5.5-5.5c-.8-.8-2.1-.8-2.8 0-.4.3-.7.8-.7 1.4s.2 1 .6 1.4l5.5 5.5-5.5 5.5c-.3.4-.6.9-.6 1.5 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5 5.5 5.5c.8.8 2.1.8 2.8 0 .8-.8.8-2.1 0-2.8L18.8 16z"></path>
  </svg>
);

function ProfilePanel(props) {
  console.log(props);
  // const [playVisible, setPlayVisible] = useState(false);
  props.levelCompleted.map((el) => {
    console.log(el.level);
    console.log(el.isCompleted);
  });

  const seeds = props.seeds;
  console.log(seeds);

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
    // console.log(completeArray);
    return completeArray;
  }
  const checkedList = filterAndSortLeaderboard(seeds, props.username);
  // console.log(checkedList);

  const pawnSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="fill-pageMenu w-16 h-16 pb-2 animate-scale-swing-rotate ml-1"
    >
      <path d="M16 9c-2.2 0-4 1.8-4 4 0 1.2.559 2.266 1.406 3h-1.5c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h.5l-1.406 3.563L10.375 23H8.906a1.003 1.003 0 00-.926.855c-.066.465.204.918.645 1.082l-1.344 1.344-.281.313V29h18v-2.406l-.281-.313-1.344-1.343c.457-.172.727-.649.633-1.13A.998.998 0 0023 23h-1.375l-.719-1.438L19.5 18h.5c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-1.406C19.44 15.266 20 14.2 20 13c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-1.313 7h2.626l1.75 4.375.03.031v.032l.282.562h-6.75l.281-.563v-.03l.031-.032zm-3.25 7h9.126l2 2H9.438z"></path>
    </svg>
  );

  const playSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-full h-full"
    >
      <g>
        <path
          className="stroke-pageMenu"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 17.334V6.667c0-.88 0-1.32.185-1.58a1 1 0 01.687-.412c.317-.04.705.166 1.48.58l10 5.333.004.002c.857.457 1.286.686 1.427.99.122.266.122.573 0 .839-.141.305-.571.535-1.43.993l-10 5.333c-.777.414-1.164.62-1.48.58a1 1 0 01-.688-.412C5 18.653 5 18.213 5 17.333z"
        ></path>
      </g>
    </svg>
  );

  const tutorialSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-full h-full fill-pageMenu"
    >
      <g data-name="Layer 2">
        <g data-name="menu-arrow-circle">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></path>
          <path d="M12 6a3.5 3.5 0 00-3.5 3.5 1 1 0 002 0A1.5 1.5 0 1112 11a1 1 0 00-1 1v2a1 1 0 002 0v-1.16A3.49 3.49 0 0012 6z"></path>
          <circle cx="12" cy="17" r="1"></circle>
        </g>
      </g>
    </svg>
  );

  const leaderboardSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      className="w-full h-full"
      data-name="Line Color"
      viewBox="0 0 24 24"
    >
      <path
        className="stroke-pageMenu"
        fill="none"
        stroke="#2CA9BC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.54 3.94L10.5 4.09 11.25 4.82 11.07 5.85 12 5.37 12.93 5.85 12.75 4.82 13.5 4.09 12.46 3.94 12 3 11.54 3.94z"
      ></path>
      <path
        className="stroke-pageMenu"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 21H3v-5h6zm6-11H9v11h6zm6 4h-6v7h6z"
      ></path>
    </svg>
  );

  const createSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-full h-full"
    >
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 7.5c0-.786.165-1.533.462-2.21L5.01 7.84A2 2 0 007.84 5.01L5.29 2.462a5.5 5.5 0 017.248 7.248l8.897 8.897a2 2 0 010 2.828v0a2 2 0 01-2.828 0L9.71 12.538A5.5 5.5 0 012 7.5z"
      ></path>
    </svg>
  );

  return (
    <div className="w-full h-[45rem] bg-page1">
      <div className="w-full h-[66rem] md:h-[33rem] md:flex overflow-hidden">
        <div className="w-full h-[33rem] md:w-[60%] md:h-[33rem] bg-page5 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]">
          <div className="relative w-full h-full bg-page1">
            <div className="w-[100%]  sm:w-[80%] md:w-[80%] lg:w-[60%] h-full absolute left-0 top-0 z-50">
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
                                    <div className="opacity-50">{crossSVG}</div>
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
                  <div className="w-full h-full bg-page2 border-4 border-pageMenu flex items-center justify-center font-page font-extrabold tracking-wide text-lg sm:text-xl text-pageMenu">no records yet...</div>
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
                {/* <SingleRecord
                  username={props.username}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[24rem] md:h-[12rem] bg-page2">
        <div className="w-full h-full grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4">
          <MenuIcon givenSVG={playSVG} text={"play"} />
          <MenuIcon givenSVG={tutorialSVG} text={"tutorial"} />
          <MenuIcon givenSVG={leaderboardSVG} text={"leaderboard"} />
          <MenuIcon givenSVG={createSVG} text={"create"} />
          {/* <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620] p-5">
            {tutorialSVG}
          </div>
          <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620] p-5">
            {leaderboardSVG}
          </div>
          <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620] p-5">
            {createSVG}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
