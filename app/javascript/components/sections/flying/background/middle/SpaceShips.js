import React from "react";
import Base from "../Base";
import { getRandomNumber, getRandom } from "../../../../utils/Array";
import SpaceShip from "./SpaceShip";
import Spacing from "../../../../layout/Spacing";

const SpaceShips = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  const seed = 3; // TODO: use random;

  return (
    <Base>
      <ShipCluster {...{ seed, absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default SpaceShips;

const ShipCluster = ({ seed, maxSize, maxShipSize, ...props }) => {
  const shipCount = Math.floor(seed * (maxSize || 4));
  const size = Math.floor(seed * (maxShipSize || 4));
  // const bottom = Math.floor(seed);

  return (
    <Spacing {...{ position: "absolute", ...props }}>
      {Array.from(Array(shipCount)).map((_, key) => {
        return (
          <Spacing {...{ key, bottom: seed }}>
            <SpaceShip {...{ size, ...getShipType() }} />
          </Spacing>
        );
      })}
    </Spacing>
  );
};

const SHIP_TYPES = ["square", "circle", "triangle"];

const getShipType = () => ({ [getRandom(SHIP_TYPES)]: true });
