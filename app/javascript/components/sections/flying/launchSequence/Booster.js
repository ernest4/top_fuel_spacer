import React from "react";
import Spacing from "../../../layout/Spacing";
import Beam from "../rocket/Beam";
import { css, keyframes } from "styled-components";
import { useSelector } from "react-redux";

const Booster = ({ right }) => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  const name = useSelector(state => state.launchSequence.stages[currentStageId]?.name);
  const stagesLength = useSelector(state => state.launchSequence.stages.length);

  const enginePowerUp = name === "engine power up";
  // const enginePowerUp = true;
  const liftOff = name === "lift off";
  const detach = name === "boosters detach";

  if (currentStageId === stagesLength - 1) return null;

  return (
    <Spacing
      center
      {...{
        // onClick: testy,
        // background: right ? "aqua" : "teal",
        background: "#b9c8d4",
        position: "fixed",
        absoluteLeft: right ? "17.25vw" : "11vw",
        absoluteBottom: "39vh",
        height: "40vh",
        width: "4vw",
        borderRadius: "100px 100px 0px 0px",
        transform: detach
          ? `translate(${right ? "" : "-"}30vw, 100vh) rotate(${right ? "" : "-"}90deg)`
          : "",
        transformOrigin: "bottom right",
        transition: "transform 5s",
        boxShadow: "-1px 1px 0px 1px #45afe4",
        css: css`
          border-right: 10px solid white;
          border-left: 10px solid #4a4a4a;
        `,
      }}
    >
      <Charge charging={enginePowerUp} discharging={liftOff} />
      {enginePowerUp && (
        <>
          {Array.from(Array(5)).map((circle, key) => {
            return <CircleCharger {...{ key, right, index: key }} />;
          })}
          {Array.from(Array(1)).map((ray, key) => {
            return <RayCharger {...{ key, right, index: key }} />;
          })}
        </>
      )}
      <Beam
        {...{
          background: "#fec200",
          intensityRatio: 0.5,
          absoluteTop: "100%",
          height: "100%",
          transition: "opacity 6s cubic-bezier(.74,.07,1,-0.19)",
          css:
            liftOff &&
            css`
              opacity: 0;
            `,
        }}
      />
    </Spacing>
  );
};

export default Booster;

const Charge = ({ charging, discharging }) => {
  return (
    <Spacing {...{ background: "red", width: "50%", height: "80%" }}>
      {Array.from(Array(8)).map((cell, key) => {
        return <Cell {...{ key, charging, discharging, index: key }} />;
      })}
    </Spacing>
  );
};

const Cell = ({ index, charging, discharging }) => {
  if (!charging && !discharging) return null;

  return (
    <Spacing
      {...{
        background: "#45afe4",
        width: "100%",
        height: "100%",
        css: charging
          ? css`
              animation-name: ${keyframes`
              0% { opacity: 0;}
              99% { opacity: 0;}
              100%  { opacity: 1;}
          `};

              animation-timing-function: linear;
              animation-iteration-count: 1;
              animation-fill-mode: both;
              animation-duration: 1.6s;
              animation-delay: ${8 - index}s;
            `
          : css`
              animation-name: ${keyframes`
              0% { opacity: 1;}
              99% { opacity: 1;}
              100%  { opacity: 0;}
          `};

              animation-timing-function: linear;
              animation-iteration-count: 1;
              animation-fill-mode: both;
              animation-duration: 0.5s;
              animation-delay: ${index / 2 + 0.75}s;
            `,
      }}
    />
  );
};

const CircleCharger = ({ right, index }) => {
  const duration = 0.3;

  return (
    <Spacing
      {...{
        position: "fixed",
        absoluteBottom: "26vh",
        absoluteLeft: right ? "10vw" : "4vw",
        background: "transparent",
        border: "32px solid #fec200",
        borderRadius: "100%",
        width: "200px",
        height: "200px",
        css: css`
          animation-name: ${keyframes`
                0% { transform: scale(1); opacity: 0;}
                /* 1% { transform: scale(1); opacity: 0.01;} */
                100%  { transform: scale(0); opacity: 1;}
            `};

          animation-timing-function: cubic-bezier(0.74, 0.07, 1, -0.19);
          animation-iteration-count: 1;
          animation-fill-mode: both;
          animation-duration: ${duration * 8}s;
          animation-delay: ${(duration * index) / 2 + 1.5}s;
        `,
      }}
    />
  );
};

const RayCharger = ({ right, index }) => {
  const duration = 2;

  return (
    <Spacing
      {...{
        position: "fixed",
        absoluteBottom: "26vh",
        absoluteLeft: right ? "10vw" : "4vw",
        background: "transparent",
        // background: "green",
        // border: "32px solid #fec200",
        // borderRadius: "100%",
        width: "200px",
        height: "200px",
        opacity: "0.5",
        align: "center",
        css: css`
          animation-name: ${keyframes`
                0% { transform: rotate(0deg) scale(0); opacity: 0;}
                50% { transform: rotate(3600deg) scale(2); opacity: 0.5;}
                100%  { transform: rotate(14400deg) scale(4); opacity: 1;}
            `};

          ${"" /* animation-timing-function: cubic-bezier(0.74, 0.07, 1, -0.19); */}
          animation-timing-function: linear;
          animation-iteration-count: 1;
          animation-fill-mode: both;
          animation-duration: ${duration * 8}s;
          animation-delay: ${(duration * index) / 2 + 1.5}s;
        `,
      }}
    >
      <Spacing
        {...{
          position: "absolute",
          background: "#fec200",
          width: "10px",
          height: "100%",
          transform: "rotate(0deg)",
          borderRadius: "100%",
        }}
      />
      <Spacing
        {...{
          position: "absolute",
          background: "#fec200",
          width: "10px",
          height: "100%",
          transform: "rotate(90deg)",
          borderRadius: "100%",
        }}
      />
    </Spacing>
  );
};
