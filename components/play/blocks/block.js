import React from "react";

function Block(props) {
  // <Block
  //   key={`row${i}col${j}`}
  //   i={row}
  //   j={col}
  //   top={top}
  //   right={right}
  //   bottom={bottom}
  //   left={left}
  //   gridCount={dynamicGridCount}
  //   isSelected={true}
  // />;

  // const [ref, { height, width }] = useMeasure();

  const isEven = (props.i + props.j) % 2 !== 0;
  const bgColorClass = isEven ? "bg-page2" : "bg-page4";

  const pawn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="fill-pageMenu w-full h-full top-2 -translate-y-[1px]"
    >
      <path d="M16 9c-2.2 0-4 1.8-4 4 0 1.2.559 2.266 1.406 3h-1.5c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h.5l-1.406 3.563L10.375 23H8.906a1.003 1.003 0 00-.926.855c-.066.465.204.918.645 1.082l-1.344 1.344-.281.313V29h18v-2.406l-.281-.313-1.344-1.343c.457-.172.727-.649.633-1.13A.998.998 0 0023 23h-1.375l-.719-1.438L19.5 18h.5c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-1.406C19.44 15.266 20 14.2 20 13c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-1.313 7h2.626l1.75 4.375.03.031v.032l.282.562h-6.75l.281-.563v-.03l.031-.032zm-3.25 7h9.126l2 2H9.438z"></path>
    </svg>
  );

  const cornerFix = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -1 1 1"
      className="fill-pageMenu w-[4px] h-[4px]"
    >
      <path d="M0 0h1v-1H0v1"></path>
    </svg>
  );

  let borderClasses = [];
  let borderFixClasses = [
    "border-t-4",
    "border-r-4",
    "border-b-4",
    "border-l-4",
  ];

  if (props.top) {
    borderClasses.push("border-t-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-t-4"
    );
  }
  if (props.right) {
    borderClasses.push("border-r-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-r-4"
    );
  }
  if (props.bottom) {
    borderClasses.push("border-b-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-b-4"
    );
  }
  if (props.left) {
    borderClasses.push("border-l-4");
    borderFixClasses = borderFixClasses.filter(
      (className) => className !== "border-l-4"
    );
  }
  const borderClassesString = borderClasses.join(" ");
  const borderFixClassessString = borderFixClasses.join(" ");

  return (
    <React.Fragment>
      <div
        className={`col-span-1 row-span-1 overflow-hidden relative ${bgColorClass} ${borderClassesString} border-pageMenu`}
      >
        <div
          className={`w-full h-full ${borderFixClassessString} border-transparent flex items-center justify-center`}
        >
          <div className="w-full h-full relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full h-full justify-center items-center">{props.isSelected && <div>{pawn}</div>}</div>
              <div className="w-full h-full relative">
                <div className="absolute flex w-full h-full justify-end items-end">
                  <div className="right-0 bottom-0 translate-x-1 translate-y-1">
                    {cornerFix}
                  </div>
                </div>
                <div className="absolute flex w-full h-full justify-end items-start">
                  <div className="rigth-0 top-0 translate-x-1 -translate-y-1">
                    {cornerFix}
                  </div>
                </div>
                <div className="absolute flex w-full h-full justify-start items-start">
                  <div className="left-0 top-0 -translate-x-1 -translate-y-1">
                    {cornerFix}
                  </div>
                </div>
                <div className="absolute flex w-full h-full justify-start items-end">
                  <div className="left-0 bottom-0 -translate-x-1 translate-y-1">
                    {cornerFix}
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

export default Block;

{
  /* <div className="w-full h-full block">
                <div className="font-page text-[8px]">{props.i}</div>
                <div className="font-page text-[8px]">{props.j}</div>
              </div> */
}
