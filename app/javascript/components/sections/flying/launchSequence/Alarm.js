import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import { css, keyframes } from "styled-components";
import Triangle from "../../../svg/Triangle";

const Alarm = () => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);

  const active = 1 <= currentStageId;

  return (
    <Spacing
      {...{
        background: "#f8c602",
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        css:
          active &&
          css`
            animation-name: ${keyframes`
              0% { transform: rotate(0deg); }
              50% { transform: rotate(180deg); }
              100% { transform: rotate(360deg); }
            `};

            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          `,
      }}
    >
      {active && <Lights />}
    </Spacing>
  );
};

export default Alarm;

const Lights = () => {
  return (
    <>
      <Spacing
        {...{
          position: "absolute",
          width: "20px",
          height: "20px",
          transform: "translate(10px, 10px) rotate(78deg)",
          css: css`
            animation-name: ${keyframes`
                0% { opacity: 1;}
                50% { opacity: 0;}
                100% { opacity: 1;}
            `};

            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          `,
          children: <Triangle fill="#f8c602" />,
        }}
      />
      <Spacing
        {...{
          position: "absolute",
          width: "20px",
          height: "20px",
          transform: "translate(-20px, -20px) rotate(12deg)",
          css: css`
            animation-name: ${keyframes`
                0% { opacity: 1;}
                50% { opacity: 0;}
                100% { opacity: 1;}
            `};

            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          `,
          children: <Triangle fill="#f8c602" />,
        }}
      />
    </>
  );
};
