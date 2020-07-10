import React from "react";
import Base from "../Base";
import { getRandom } from "../../../../utils/Array";
import SpaceShip from "./SpaceShip";
import Spacing from "../../../../layout/Spacing";

const SpaceShips = () => {
  return (
    <Base>
      {[1, 2, 3].map(_ => {
        const seed = Math.random();

        const absoluteLeft = `${seed * 33}vw`;
        const absoluteTop = `${Math.random() * 100}vh`;

        return <ShipCluster {...{ key: seed, seed, maxShipCount: 6, absoluteLeft, absoluteTop }} />;
      })}
    </Base>
  );
};

export default SpaceShips;

const ShipCluster = ({ seed, maxShipCount, maxShipSize, minShipSize, ...props }) => {
  const shipCount = Math.floor(seed * (maxShipCount || 4));

  const min = minShipSize || 15;
  const max = maxShipSize || 15;
  const size = Math.floor(seed * (max - min)) + min;

  // TODO: not working ... !??!?!
  const initialXOffset = Math.round(Math.random() * 20) - 10; // range: [-10, 10]

  return (
    <Spacing {...{ position: "absolute", ...props }}>
      {Array.from(Array(shipCount)).map((_, key) => {
        return (
          <Spacing {...{ key, bottom: seed, transform: `translate(${initialXOffset}px, 0px)` }}>
            <SpaceShip {...{ size, ...getShipType() }} />
          </Spacing>
        );
      })}
    </Spacing>
  );
};

const SHIP_TYPES = ["box", "circle", "triangle"];

const getShipType = () => ({ [getRandom(SHIP_TYPES)]: true });
