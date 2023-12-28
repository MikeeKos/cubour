import React from "react";

function Block(props) {
  // const [ref, { height, width }] = useMeasure();

  const isEven = (props.i + props.j) % 2 !== 0;
  const bgColorClass = isEven ? "bg-page2" : "bg-page4";

  let borderClasses = [];
  if (props.top) {
    if (props.i !== 0) {
      borderClasses.push("border-t-4");
    }
  }
  if (props.right) {
    if (props.j !== props.gridCount - 1) {
      borderClasses.push("border-r-4");
    }
  }
  if (props.bottom) {
    if (props.i !== props.gridCount - 1) {
      borderClasses.push("border-b-4");
    }
  }
  if (props.left) {
    if (props.j !== 0) {
      borderClasses.push("border-l-4");
    }
  }
  const borderClassesString = borderClasses.join(" ");

  return (
    <React.Fragment>
      <div
        className={`col-span-1 row-span-1 bg-page1 overflow-hidden relative ${bgColorClass} ${borderClassesString} border-pageMenu`}
      >
        <div>{props.i}</div>
        <div>{props.j}</div>
      </div>
    </React.Fragment>
  );
}

export default Block;
