import React from "react";
import Base from "./Base";
import Stars from "./Stars";

const StarGradient = () => {
  return (
    <Base
      {...{
        background:
          "linear-gradient(0deg, transparent, hsl(227, 99%, 36%, 0.5), hsl(340, 100%, 63%, 0.5), transparent)",

        children: <Stars size={2} count={50} />,
      }}
    />
  );
};

export default StarGradient;
