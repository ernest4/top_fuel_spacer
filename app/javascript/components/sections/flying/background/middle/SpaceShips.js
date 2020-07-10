import React from "react";
import Base from "../Base";
import { getRandom } from "../../../../utils/Array";
import SpaceShip from "./SpaceShip";
import Spacing from "../../../../layout/Spacing";
import { css, keyframes } from "styled-components";

const SpaceShips = () => {
  return (
    <Base>
      {[1, 2, 3].map(_ => {
        const seed = Math.random();

        const absoluteLeft = `${seed * 33}vw`;
        const absoluteTop = `${Math.random() * 100}vh`;

        return (
          <ShipCluster
            {...{
              key: seed,
              seed,
              maxShipCount: 6,
              absoluteLeft,
              absoluteTop,
              transform: `rotate(${0.5 < seed ? "-" : ""}${seed * 80}deg)`,
            }}
          />
        );
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

  return (
    <Spacing {...{ position: "absolute", ...props }}>
      {Array.from(Array(shipCount)).map((_, key) => {
        const seed2 = Math.random();
        const initialXOffset = Math.round(seed2 * 40) - 20; // range: [-20, 20]

        return (
          <Spacing {...{ key, bottom: seed, transform: `translate(${initialXOffset}px, 0px)` }}>
            <SpaceShip
              {...{
                size,
                ...getShipType(),
                css: css`
                  animation-name: ${keyframes`
                      0% { transform: translate(0vw, 0px); }
                      100%  { transform: translate(-100vw, 0px); }
                  `};

                  animation-timing-function: linear;
                  animation-iteration-count: 1;
                  animation-fill-mode: both;
                  animation-duration: ${seed2 * 20 + 10}s;
                `,
              }}
            />
          </Spacing>
        );
      })}
    </Spacing>
  );
};

const SHIP_TYPES = ["box", "circle", "triangle"];

const getShipType = () => ({ [getRandom(SHIP_TYPES)]: true });
