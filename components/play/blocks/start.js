import React, { useContext, useEffect } from "react";
import Block from "./block";
import { startDesignSVG } from "../../../SVG/game-grid";

function StartBlock(props) {
  return <Block {...props} styleChange={startDesignSVG}></Block>;
}

export default StartBlock;
