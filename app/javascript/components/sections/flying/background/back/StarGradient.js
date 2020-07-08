import React from "react";
import Base from "../Base";
import Dots from "./Dots";

const StarGradient = () => {
  return (
    <Base
      {...{
        background:
          "linear-gradient(0deg, transparent, hsl(227, 99%, 36%, 0.5), hsl(340, 100%, 63%, 0.5), transparent)",
      }}
    >
      <Dots size={2} count={50} />
      <Dots size={4} count={10} />
    </Base>
  );
};

export default StarGradient;
