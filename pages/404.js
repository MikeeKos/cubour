import Head from "next/head";
import Link from "next/link";
import React from "react";
import useMeasure from "react-use-measure";

export default function Custom404() {
  const [ref, { height, width }] = useMeasure();

  return (
    <React.Fragment>
      <Head>
        <title>Not Found</title>
      </Head>
      <div
        ref={ref}
        className="w-full h-screen relative bg-page4 overflow-y-scroll"
      >
        <div
          className={`absolute w-full ${height > 710 ? "h-full" : "h-[43rem]"}`}
        >
          <div className="w-full h-full bg-page1 border-2 border-pageMenu">
            <div className="w-full h-[65%]  md:grid md:grid-cols-12">
              <div className="w-full h-1/2 md:h-full md:col-span-5 md:border-pageMenu border-2 border-pageMenu">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden bg-page1 p-5">
                    not found...
                  </span>
                </div>
              </div>
              <div className="w-full h-1/2 md:h-full md:col-span-7 flex items-center justify-center border-2 border-pageMenu">
                <div className="w-80 h-40 border-4 border-pageMenu overflow-hidden flex items-center justify-center">
                  <span className="text-9xl font-page font-extrabold text-center text-pageMenu">
                    404
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-[35%] border-2 border-pageMenu flex items-center justify-center">
              <div className="w-80 h-20 bg-pageMenu hover:w-96 hover:h-24 duration-200 active:w-72 active:h-16">
                <Link
                  href={"/"}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="font-page text-4xl text-page1 tracking-widest flex items-center justify-center font-extrabold animate-pulse">
                    go back
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
