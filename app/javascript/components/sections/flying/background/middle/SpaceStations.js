import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import SpaceStation from "./SpaceStation";

const SpaceStations = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  return (
    <Base>
      <SpaceStation {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default SpaceStations;
