import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import Asteroid from "./Asteroid";

const Asteroids = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  return (
    <Base>
      <Asteroid {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default Asteroids;
