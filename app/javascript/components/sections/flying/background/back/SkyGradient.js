import React from "react";
import Base from "./Base";

const SkyGradient = () => {
  return (
    <Base
      {...{
        background:
          "linear-gradient(0deg, hsla(205, 70%, 75%, 1), hsla(205, 70%, 75%, 1), transparent)",
      }}
    />
  );
};

export default SkyGradient;
