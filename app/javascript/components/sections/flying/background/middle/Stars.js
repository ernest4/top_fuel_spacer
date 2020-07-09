import React from "react";
import Base from "../Base";

import Star from "./Star";

const Stars = () => {
  const absoluteLeft = Math.random() * 33;

  return (
    <Base>
      <Star
        {...{
          maxSize: `${33 - absoluteLeft}vw`,
          absoluteLeft: `${absoluteLeft}vw`,
          absoluteTop: `${Math.random() * 100}vh`,
        }}
      />
    </Base>
  );
};

export default Stars;
