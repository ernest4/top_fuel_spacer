import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import SpaceShip from "./SpaceShip";

const SpaceShips = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  return (
    <Base>
      <SpaceShip {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default SpaceShips;
