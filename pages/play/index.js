import SelectLevels from "../../components/levels/select-levels";
import React from "react";

function Play(props) {
  console.log(props.seed);

  return (
    <React.Fragment>
      <SelectLevels />
    </React.Fragment>
  );
}

export default Play;
