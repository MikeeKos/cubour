import React from "react";
import Link from "next/link";

function FireLevels(props) {
  const fireSVG = (color, level) => {
    return (
      <Link href={`/play/${level}`}>
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
            <div className="col-span-1 row-span-1 flex justify-end">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end pb-1">
                {fireSVG("fill-page2", props.level11.id)}
                <Link
                  href={`/play/${props.level11.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                >
                  lvl 11
                </Link>
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
                {fireSVG("fill-page2", props.level10.id)}
                <Link
                  href={`/play/${props.level10.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                >
                  lvl 10
                </Link>
              </div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[80%] h-full"></div>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start">
              <div className="w-[90%] h-full border-b-8 border-pageMenu flex items-end justify-end pb-1">
                {fireSVG("fill-page2", props.level12.id)}
                <Link
                  href={`/play/${props.level12.id}`}
                  className="opacity-90 hover:cursor-pointer shadow-[rgba(0,_0,_0,_0.8)_0px_15px_45px] p-1 rounded-xl font-page text-sm bg-page2 md:text-xl lg:text-2xl text-pageMenu font-extrabold tracking-widest animate-levitate-delay"
                >
                  lvl 12
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FireLevels;
