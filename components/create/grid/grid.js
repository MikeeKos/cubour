import React from "react";

function Grid(props) {
  let gridClass;
  if (props.dynamicGridCount === 8) {
    gridClass =
      "w-full h-full bg-pageMenu grid grid-cols-8 grid-rows-8 border-4 border-pageMenu";
  }

  if (props.dynamicGridCount === 10) {
    gridClass =
      "w-full h-full bg-pageMenu grid grid-cols-10 grid-rows-10 border-4 border-pageMenu";
  }

  if (props.dynamicGridCount === 12) {
    gridClass =
      "w-full h-full bg-pageMenu grid grid-cols-12 grid-rows-12 border-4 border-pageMenu";
  }

  if (props.dynamicGridCount === 14) {
    gridClass =
      "w-full h-full bg-pageMenu grid grid-cols-14 grid-rows-14 border-4 border-pageMenu";
  }

  return <div className={gridClass}>{props.gridItems}</div>;
}

export default Grid;
