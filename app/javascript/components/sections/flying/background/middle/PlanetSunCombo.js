import React from "react";
import Base from "../Base";
import Star from "./Star";
import Planet from "./Planet";
import { css } from "styled-components";
import { getRandomNumber } from "../../../../utils/Array";
import Dots from "../back/Dots";

const PlanetSunCombo = () => {
  const absoluteTop = getRandomNumber() * 100;
  const absoluteLeft = 12;

  return (
    <Base>
      <Star
        {...{
          background: "hsla(53, 100%, 80%, 1)",
          height: "50px",
          width: "50px",
          absoluteTop: `${absoluteTop - 2}vh`,
          absoluteLeft: `${absoluteLeft + 11}vw`,
          filter: "blur(10px)",
        }}
      />
      <Planet
        {...{
          height: "200px",
          width: "200px",
          background: "#264226",
          absoluteLeft: `${absoluteLeft}vw`,
          absoluteTop: `${absoluteTop}vh`,
          boxShadow: "-5px 5px 5px 0px inset #e47a44, 5px -5px 5px 0px inset #01b9ff",
          css: css`
            border-right: 3px solid hsla(20, 75%, 90%, 1);
            border-top: 3px solid hsla(20, 75%, 90%, 1);
            border-bottom: 3px solid hsla(197, 100%, 90%, 1);
            border-left: 3px solid hsla(197, 100%, 90%, 1);
          `,
        }}
      >
        <Dots {...{ minLeft: "30px", minTop: "30px", maxLeft: "170px", maxTop: "170px" }} />
        <Dots
          {...{
            size: 2,
            count: 10,
            minLeft: "40px",
            minTop: "40px",
            maxLeft: "100px",
            maxTop: "100px",
          }}
        />
        <Dots
          {...{
            size: 3,
            count: 20,
            minLeft: "100px",
            minTop: "100px",
            maxLeft: "160px",
            maxTop: "160px",
          }}
        />
      </Planet>
    </Base>
  );
};

export default PlanetSunCombo;
