import React from "react";

function ProfilePanel(props) {
  const pawnSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="fill-pageMenu w-16 h-16 pb-2 animate-scale-swing-rotate ml-1"
    >
      <path d="M16 9c-2.2 0-4 1.8-4 4 0 1.2.559 2.266 1.406 3h-1.5c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h.5l-1.406 3.563L10.375 23H8.906a1.003 1.003 0 00-.926.855c-.066.465.204.918.645 1.082l-1.344 1.344-.281.313V29h18v-2.406l-.281-.313-1.344-1.343c.457-.172.727-.649.633-1.13A.998.998 0 0023 23h-1.375l-.719-1.438L19.5 18h.5c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-1.406C19.44 15.266 20 14.2 20 13c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-1.313 7h2.626l1.75 4.375.03.031v.032l.282.562h-6.75l.281-.563v-.03l.031-.032zm-3.25 7h9.126l2 2H9.438z"></path>
    </svg>
  );

  return (
    <div className="w-full h-[45rem] bg-page1">
      <div className="w-full h-[66rem] md:h-[33rem] md:flex overflow-hidden">
        <div className="w-full h-[33rem] md:w-[40%] md:h-[33rem] bg-page2 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]">
          <div className="relative w-full h-28 flex items-center justify-center p-4">
            <span className="relative bg-page3 border-4 border-pageMenu h-full mx-4 w-full font-page text-3xl md:text-2xl lg:text-3xl text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
              <div className="absolute h-full aspect-square border-r-4 border-pageMenu bg-page5 left-0 flex items-center justify-center">
                {pawnSVG}
              </div>
              {props.username}
            </span>
          </div>
          <div className="w-full h-full p-8">
            <div className="w-full h-[calc(100%-7rem)] bg-page3 border-4 border-pageMenu shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
              <div className="w-full h-full grid grid-rows-3 gap-4">
                <div className="col-span-1">
                  <div className="w-full h-full bg-page1 border-b-4 border-pageMenu">
                    <div className="w-full h-full bg-page2 flex items-center justify-center">
                      <div className="relative w-[80%] h-[60%] bg-page1 rounded-xl">
                        <span className="p-1 ml-1 absolute w-full h-full font-page text-xl md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center">
                          email :
                          <span className="underline ml-2 truncate">
                            {props.email}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="w-full h-full bg-page1 border-y-4 border-pageMenu">
                    <div className="w-full h-full bg-page2 flex items-center justify-center">
                      <div className="relative w-[80%] h-[60%] bg-page1 rounded-xl">
                        <span className="ml-1 absolute w-full h-full font-page text-xl md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center">
                          current level :
                          <span className="ml-2 truncate bg-page2 p-2">
                            {/* {props.currentLevel} */}
                            12
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="w-full h-full bg-page1 border-t-4 border-pageMenu">
                    <div className="w-full h-full bg-page2 flex items-center justify-center">
                      <div className="relative w-[80%] h-[60%] bg-page1 rounded-xl">
                        <span className="ml-1 absolute w-full h-full font-page text-xl md:text-sm lg:text-xl text-pageMenu font-extrabold tracking-widest text-center truncate flex items-center justify-center">
                          records :
                          <span className="ml-2 truncate bg-page2 p-2">
                            {/* {props.recordsNumber} */}
                            12
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[33rem] md:w-[60%] md:h-[33rem] bg-page5 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]"></div>
      </div>
      <div className="w-full h-[24rem] md:h-[12rem] bg-page4">
        <div className="w-full h-full grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4">
          <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]"></div>
          <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]"></div>
          <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]"></div>
          <div className="col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620]"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
