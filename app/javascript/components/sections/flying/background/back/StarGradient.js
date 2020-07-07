import React from "react";
import Base from "./Base";

const StarGradient = () => {
  return (
    <Base
      {...{
        background:
          "linear-gradient(0deg, transparent, hsl(227, 99%, 36%), hsl(340, 100%, 63%), transparent)",
      }}
    />
  );
};

export default StarGradient;
