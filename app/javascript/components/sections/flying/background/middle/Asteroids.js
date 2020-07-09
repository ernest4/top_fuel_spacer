import React from "react";
import Base from "../Base";

import Asteroid from "./Asteroid";

const Asteroids = () => {
  const absoluteLeft = `${Math.random() * 33}vw`;
  const absoluteTop = `${Math.random() * 100}vh`;

  return (
    <Base>
      <Asteroid {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default Asteroids;
