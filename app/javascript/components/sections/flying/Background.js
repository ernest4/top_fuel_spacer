import React from "react";
import Spacing from "../../layout/Spacing";

const Background = () => {
  return (
    <Spacing
      {...{
        position: "absolute",
        width: "33vw",
        height: "100vh",
        // background: red;
        // z-index: -1;
      }}
    >
      <div>some planet here etc.</div>
    </Spacing>
  );
};

export default Background;
