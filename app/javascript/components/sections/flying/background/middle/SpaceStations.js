import React from "react";
import Base from "../Base";

import SpaceStation from "./SpaceStation";

const SpaceStations = () => {
  const absoluteLeft = `${Math.random() * 33}vw`;
  const absoluteTop = `${Math.random() * 100}vh`;

  return (
    <Base>
      <SpaceStation {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default SpaceStations;
