import React from "react";
import Base from "../Base";
import { getRandomNumber, getRandom } from "../../../../utils/Array";
import SpaceShip from "./SpaceShip";
import Spacing from "../../../../layout/Spacing";

const SpaceShips = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  const seed = 0.78; // TODO: use random;

  return (
    <Base>
      <ShipCluster {...{ seed, absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default SpaceShips;

const ShipCluster = ({ seed, maxSize, maxShipSize, minShipSize, ...props }) => {
  const shipCount = Math.floor(seed * (maxSize || 4));
  const size = Math.floor(seed * (maxShipSize || 30)) + (minShipSize || 15);

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

const SHIP_TYPES = ["box", "circle", "triangle"];

const getShipType = () => ({ [getRandom(SHIP_TYPES)]: true });
