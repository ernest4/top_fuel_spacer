import React from "react";
import Base from "../Base";

import Planet from "./Planet";

const Planets = () => {
  const absoluteLeft = Math.random() * 33;

  return (
    <Base>
      <Planet
        {...{
          maxSize: `${33 - absoluteLeft}vw`,
          absoluteLeft: `${absoluteLeft}vw`,
          absoluteTop: `${Math.random() * 100}vh`,
        }}
      />
    </Base>
  );
};

export default Planets;
