import React from "react";
import Spacing from "../../../layout/Spacing";

// TODO: use Scroller !!!
const Front = () => {
  return (
    <Spacing
      {...{
        position: "absolute",
        width: "33vw",
        height: "100vh",
        // absoluteTop: "-100vh",
        absoluteTop: "-25vh",
        background: "blue",
        opacity: 0.5,
        // background: red;
        // z-index: -1;
      }}
    >
      <div>some planet here etc.</div>
    </Spacing>
  );
};

export default Front;
