import React from "react";

function Record(props) {
  console.log(props);

  function repeatString(word) {
    return new Array(200).fill(word).join(" ");
  }

  return (
    <React.Fragment>
      {/* <div className="w-full h-20 bg-page2">{props.level}</div> */}

      <div className="w-full h-[36rem] md:h-[22rem] bg-page2 md:grid md:grid-cols-12">
        <div className="w-full h-[60%] md:col-span-5 md:w-full md:h-full border-t-4 border-x-4 md:border-r-4 border-pageMenu relative">
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
                    <div className="w-full h-16 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
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
                    <div className="w-full h-16 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
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
                    <div className="w-full h-16 bg-pageMenu rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
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
        <div className="w-full h-[40%] md:col-span-7 md:w-full md:h-full p-5 border-t-4 border-x-4 md:border-x-0 md:border-r-4 border-pageMenu">
          <div className="w-full h-full bg-pageMenu"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Record;
