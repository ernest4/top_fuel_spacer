import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import Planet from "./Planet";

const Planets = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  return (
    <Base>
      <Planet {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default Planets;
