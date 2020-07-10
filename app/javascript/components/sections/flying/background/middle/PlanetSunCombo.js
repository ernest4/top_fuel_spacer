import React from "react";
import Base from "../Base";
import Star from "./Star";
import Planet from "./Planet";
import { css } from "styled-components";
import { getRandom } from "../../../../utils/Array";
import Dots from "../back/Dots";
import Spacing from "../../../../layout/Spacing";

const SCALES = ["1,1", "-1,1", "1,-1", "-1,-1"];

const PlanetSunCombo = ({ day }) => {
  const seed = Math.random();

  const absoluteTop = seed * 100;
  const absoluteLeft = Math.random() * 12;

  return (
    <Base {...{ transform: `scale(${getRandom(SCALES)})` }}>
      <Star
        {...{
          background: "hsla(53, 100%, 80%, 1)",
          height: "65px",
          width: "65px",
          absoluteTop: `${absoluteTop - 2}vh`,
          absoluteLeft: `${absoluteLeft + 11}vw`,
          transform: `scale(${seed},${seed})`,
        }}
      />
      <Planet
        {...{
          height: "200px",
          width: "200px",
          background: day ? "#1f96c1" : "#264226",
          absoluteLeft: `${absoluteLeft}vw`,
          absoluteTop: `${absoluteTop}vh`,
          boxShadow: day
            ? `-1px 1px 5px 0px inset #01b9ff, 0px 0px 5px 0px inset #01b9ff,
                ${seed * 100}px -${seed * 100}px 5px 0px inset #264227`
            : "-5px 5px 5px 0px inset #e47a44, 5px -5px 5px 0px inset #01b9ff",
          css: css`
            border-right: 3px solid hsla(20, 75%, 90%, 1);
            border-top: 3px solid hsla(20, 75%, 90%, 1);
            border-bottom: 3px solid hsla(197, 100%, 90%, 1);
            border-left: 3px solid hsla(197, 100%, 90%, 1);

            ${day ? "border-color: hsla(197, 100%, 90%, 1)" : ""}
          `,
          transform: `scale(${seed},${seed})`,
        }}
      >
        <Dots {...{ minLeft: "30px", minTop: "30px", maxLeft: "170px", maxTop: "170px" }} />
        <Spacing
          {...{
            position: "absolute",
            background: day ? "hsla(134, 80%, 38%, 0.3)" : "hsla(134, 27%, 26%, 0.3)",
            width: "80px",
            height: "80px",
            absoluteLeft: "18%",
            absoluteTop: "20%",
            borderRadius: "54px 0px 31px 31px",
            transform: "rotate(73deg)",
          }}
        >
          <Dots
            {...{
              size: 2,
              count: 20,
              minLeft: "10px",
              minTop: "10px",
              maxLeft: "70px",
              maxTop: "70px",
            }}
          />
        </Spacing>
        <Spacing
          {...{
            position: "absolute",
            background: day ? "hsla(134, 80%, 38%, 0.3)" : "hsla(134, 27%, 25%, 0.2)",
            width: "80px",
            height: "80px",
            absoluteLeft: "44%",
            absoluteTop: "44%",
            borderRadius: "54px 0px 31px 31px",
            transform: "rotate(-73deg)",
          }}
        >
          <Dots
            {...{
              size: 3,
              count: 20,
              minLeft: "10px",
              minTop: "10px",
              maxLeft: "70px",
              maxTop: "70px",
            }}
          />
        </Spacing>
      </Planet>
    </Base>
  );
};

export default PlanetSunCombo;
