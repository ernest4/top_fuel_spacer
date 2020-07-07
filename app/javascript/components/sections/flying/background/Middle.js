import React from "react";
import Spacing from "../../../layout/Spacing";

const Middle = () => {
  return (
    <Spacing
      {...{
        position: "absolute",
        width: "33vw",
        height: "100vh",
        // absoluteTop: "-100vh",
        absoluteTop: "-75vh",
        background: "red",
        opacity: 0.5,
        // background: red;
        // z-index: -1;
      }}
    >
      <div>some planet here etc.</div>
    </Spacing>
  );
};

export default Middle;
