import React, { useContext, useEffect } from "react";
import Block from "./block";

function StartBlock(props) {
  const design = (
    <div className="w-full h-full flex items-center justify-center opacity-30">
      <svg
        className="fill-pageMenu animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -6 7 6"
      >
        <path d="M0 0h1v-1H0v1m2 0h1v-1H2v1m2 0h1v-1H4v1m2 0h1v-1H6v1m0-1v-1H5v1h1M4-1v-1H3v1h1M2-1v-1H1v1h1M1-2v-1H0v1h1m1 0h1v-1H2v1m2 0h1v-1H4v1m2 0h1v-1H6v1M1-3h1v-1H1v1m2 0h1v-1H3v1m2 0h1v-1H5v1M1-4v-1H0v1h1m1 0h1v-1H2v1m2 0h1v-1H4v1m2 0h1v-1H6v1M1-5h1v-1H1v1m2 0h1v-1H3v1m2 0h1v-1H5v1"></path>
      </svg>
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default StartBlock;
