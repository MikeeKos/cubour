import React, { useState } from "react";
import Link from "next/link";

function MenuIcon(props) {
  const [visivle, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      className="relative col-span-1 row-span-1 border-2 border-pageMenu shadow-[inset_-24px_-16px_80px_#46464620] p-5 bg-page2"
    >
      <div className="w-full h-full">{props.givenSVG}</div>
      {visivle && (
        <div className="w-full h-full bg-page1 absolute top-0 left-0 animate-growUp">
          <div className="w-full h-full hover:scale-110 active:scale-90 hover:cursor-pointer duration-100 flex items-center justify-center font-page text-base md:text-base lg:text-3xl text-pageMenu tracking-wider font-extrabold text-center">
            <Link href={`/${props.text}`} className="bg-page5 px-2 py-1 sm:px-5 sm:py-3 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
              {props.text}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuIcon;
