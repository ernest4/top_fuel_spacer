import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import Planet from "./Planet";

const Planets = () => {
  const absoluteLeft = getRandomNumber() * 33;

  return (
    <Base>
      <Planet
        {...{
          maxSize: `${33 - absoluteLeft}vw`,
          absoluteLeft: `${absoluteLeft}vw`,
          absoluteTop: `${getRandomNumber() * 100}vh`,
        }}
      />
    </Base>
  );
};

export default Planets;
