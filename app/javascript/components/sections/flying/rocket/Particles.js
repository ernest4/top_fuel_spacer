import React, { memo } from "react";
import Spacing from "../../../layout/Spacing";
import { css, keyframes } from "styled-components";

const COLOR_PRESETS = {
  fire: {
    initialColor: "#FEDC00",
    middleColor: "#FEAC00",
    finalColor: "#F73C00",
  },
  steam: {
    initialColor: "#b9c8d4",
    middleColor: "#e5ecf0",
    finalColor: "white",
  },
};

// TODD: optimize and useMemo !!!?!?!
const Particles = ({ count, angle, duration, length, ...props }) => {
  console.log("rendered");
  return (
    <Spacing
      {...{
        // position: "absolute",
        // absoluteTop: "59vh",
        // absoluteBottom: "-32px",
        // width: "50px",
        // height: "50px",
        width: "100%",
        height: "100%",
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
          return <Particle {...{ key, count, duration, length, ...getColors(props) }} />;
        })}
      </Spacing>
    </Spacing>
  );
};

export default memo(Particles);

const Particle = ({
  initialColor,
  middleColor,
  finalColor,
  count,
  duration,
  length: lengthOverride,
}) => {
  const length = lengthOverride || 1;

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
              100% {transform: translate(${length * -150}%, ${
              length * 170
            }%) scale(0); background-color:  ${finalColor}; }
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
              100% { transform: translate(${length * -170}%, ${
              length * 150
            }%) scale(0); background-color: ${finalColor}; }
            `};

            animation-duration: ${duration}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }

          ${Array.from(Array(count || 4)).map(
            (particle, index) => css`
              &:nth-child(${index + 1}) {
                animation-delay: ${(duration / (count || 4)) * index}s;
              }
            `
          )}
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
