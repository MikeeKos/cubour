import React, { useState } from "react";
import Link from "next/link";
import { loadingSVG } from "../../../SVG/levels";

function SkullLevels(props) {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingLevel, setLoadingLevel] = useState();

  const checkIsCompleted = (level) => {
    if (props.levelCompleted === "notLoggedIn") {
      return false;
    }
    const thisLevel = props.levelCompleted.find((el) => {
      return el.level === level;
    });
    return thisLevel.isCompleted;
  };

  const loadingHandler = (level) => {
    setShowLoading(true);
    setLoadingLevel(level);
    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  };

  const skullWithBonesSVG = (color, level, levelNumber) => {
    return (
      <Link href={`/play/${level}`} onClick={() => loadingHandler(levelNumber)}>
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
      </Link>
    );
  };

  return (
    <React.Fragment>
      <div className="w-full h-[20rem] grid grid-cols-2 grid-rows-1">
        <div className="col-span-1 row-span-1 border-r-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[90%] h-full"></div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-end relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1 relative">
                {showLoading && loadingLevel === 17 && (
                  <div className="absolute -right-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {skullWithBonesSVG("fill-pageMenu", props.level17.id)}
                <Link
                  href={`/play/${props.level17.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-pageMenu md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(17)}
                >
                  lvl 17
                </Link>
              </div>
              {checkIsCompleted(17) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[75%] h-full"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-l-4 border-pageMenu">
          <div className="w-full h-full grid grid-rows-3 grid-cols-1">
            <div className="col-span-1 row-span-1 flex justify-start relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1 relative">
                {showLoading && loadingLevel === 16 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {skullWithBonesSVG("fill-pageMenu", props.level16.id)}
                <Link
                  href={`/play/${props.level16.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-pageMenu md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(16)}
                >
                  lvl 16
                </Link>
              </div>
              {checkIsCompleted(16) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[80%] h-full"></div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start relative">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1 relative">
                {showLoading && loadingLevel === 18 && (
                  <div className="absolute -left-14 -bottom-6 w-12 h-12">
                    {loadingSVG}
                  </div>
                )}
                {skullWithBonesSVG("fill-pageMenu", props.level18.id)}
                <Link
                  href={`/play/${props.level18.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-pageMenu md:text-xl lg:text-2xl text-page1 font-extrabold tracking-widest animate-levitate-delay"
                  onClick={() => loadingHandler(18)}
                >
                  lvl 18
                </Link>
              </div>
              {checkIsCompleted(18) && (
                <div className="absolute w-full h-8 -bottom-8">
                  <div className="font-page font-extrabold text-xs sm:text-sm text-page1 tracking-wider flex justify-center">
                    completed
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SkullLevels;
