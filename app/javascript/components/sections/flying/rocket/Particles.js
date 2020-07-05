import React from "react";
import Spacing from "../../../layout/Spacing";
import { css, keyframes } from "styled-components";

const COLOR_PRESETS = {
  fire: {
    initialColor: "#FEDC00",
    middleColor: "#FEAC00",
    finalColor: "#F73C00",
  },
  steam: {
    // TODO: ...
    initialColor: "",
    middleColor: "",
    finalColor: "",
  },
};

// TODD: optimize with memo and useMemo !!!
const Particles = ({ count, angle, duration, ...props }) => {
  return (
    <Spacing
      {...{
        position: "absolute",
        // absoluteBottom: "-32px",
        absoluteTop: "59vh",
        width: "50px",
        height: "50px",
        // filter: "blur(4px)",
        css: css`
          align-self: center;
        `,
        z: "-2",
        transform: `rotate(${angle || 0}deg)`,
      }}
    >
      <Spacing
        {...{
          position: "absolute",
          absoluteLeft: "50%",
          width: "100%",
          height: "100%",
          transform: "translateX(-50%) rotate(-45deg)",
        }}
      >
        {Array.from(Array(count || 4)).map((particle, key) => {
          return <Particle {...{ key, duration, ...getColors(props) }} />;
        })}
      </Spacing>
    </Spacing>
  );
};

export default Particles;

const Particle = ({ initialColor, middleColor, finalColor, duration: durationOverride }) => {
  const duration = durationOverride || 0.4;

  return (
    <Spacing
      {...{
        borderRadius: "4px",
        position: "absolute",
        background: initialColor,
        width: "100%",
        height: "100%",
        css: css`
          &:nth-child(2n + 1) {
            animation-name: ${keyframes`
              0% { transform: translate(0%, 0%) scale(0); background-color: ${initialColor}; }
              25% { transform: translate(-1%, 2%) scale(1); }
              40% { background-color: ${middleColor}; }
              100% { transform: translate(-150%, 170%) scale(0); background-color:  ${finalColor}; }
            `};

            animation-duration: ${duration}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          &:nth-child(2n) {
            animation-name: ${keyframes`
              0% { transform: translate(0%, 0%) scale(0); background-color: ${initialColor}; }
              25% { transform: translate(2%, -1%) scale(1); }
              40% { background-color: ${middleColor}; }
              100% { transform: translate(-170%, 150%) scale(0); background-color: ${finalColor}; }
            `};

            animation-duration: ${duration}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          &:nth-child(1) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: ${duration / 4}s;
          }
          &:nth-child(3) {
            animation-delay: ${(duration / 4) * 2}s;
          }
          &:nth-child(4) {
            animation-delay: ${(duration / 4) * 3}s;
          }
        `,
      }}
    />
  );
};

const getColors = ({ initialColor, middleColor, finalColor, fire, steam }) => {
  if (fire) return COLOR_PRESETS.fire;
  if (steam) return COLOR_PRESETS.steam;

  // default is given colors
  return { initialColor, middleColor, finalColor };
};
