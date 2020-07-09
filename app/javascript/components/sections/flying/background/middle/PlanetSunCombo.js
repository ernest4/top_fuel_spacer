import React, { memo } from "react";
import Base from "../Base";
import Star from "./Star";
import Planet from "./Planet";
import { css } from "styled-components";
import { getRandomNumber } from "../../../../utils/Array";
import Dots from "../back/Dots";
import Spacing from "../../../../layout/Spacing";

const PlanetSunCombo = () => {
  const absoluteTop = getRandomNumber() * 100;
  const absoluteLeft = getRandomNumber() * 12;

  return (
    <Base>
      <Star
        {...{
          background: "hsla(53, 100%, 80%, 1)",
          height: "65px",
          width: "65px",
          absoluteTop: `${absoluteTop - 2}vh`,
          absoluteLeft: `${absoluteLeft + 11}vw`,
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
        <Spacing
          {...{
            position: "absolute",
            background: "hsla(134, 27%, 26%, 0.3)",
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
            background: "hsla(134, 27%, 25%, 0.2)",
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

export default memo(PlanetSunCombo);
