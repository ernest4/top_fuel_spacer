import React from "react";
import Spacing from "../../../layout/Spacing";
import { css, keyframes } from "styled-components";
import { useSelector } from "react-redux";

const Fire = () => {
  const running = useSelector(state => state.game.running);
  const fuel = useSelector(state => state.rocket.fuel);

  if (!running || fuel === 0) return null;

  return (
    <Spacing
      {...{
        position: "absolute",
        absoluteBottom: "-8%",
        width: "50px",
        height: "50px",
        // filter: "blur(4px)",
        css: css`
          align-self: center;
        `,
        z: "-1",
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
        {Array.from(Array(4)).map((flame, key) => {
          return <Flame {...{ key }} />;
        })}
      </Spacing>
    </Spacing>
  );
};

export default Fire;

const Flame = () => {
  const yellow = "#FEDC00";
  const orange = "#FEAC00";
  const red = "#F73C00";

  const animationTime = 0.4;

  return (
    <Spacing
      {...{
        borderRadius: "4px",
        position: "absolute",
        background: yellow,
        width: "100%",
        height: "100%",
        css: css`
          &:nth-child(2n + 1) {
            animation-name: ${keyframes`
              0% { transform: translate(0%, 0%) scale(0); background-color: ${yellow}; }
              25% { transform: translate(-1%, 2%) scale(1); }
              40% { background-color: ${orange}; }
              100% { transform: translate(-150%, 170%) scale(0); background-color:  ${red}; }
            `};

            animation-duration: ${animationTime}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          &:nth-child(2n) {
            animation-name: ${keyframes`
              0% { transform: translate(0%, 0%) scale(0); background-color: ${yellow}; }
              25% { transform: translate(2%, -1%) scale(1); }
              40% { background-color: ${orange}; }
              100% { transform: translate(-170%, 150%) scale(0); background-color: ${red}; }
            `};

            animation-duration: ${animationTime}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          &:nth-child(1) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: ${animationTime / 4}s;
          }
          &:nth-child(3) {
            animation-delay: ${(animationTime / 4) * 2}s;
          }
          &:nth-child(4) {
            animation-delay: ${(animationTime / 4) * 3}s;
          }
        `,
      }}
    />
  );
};
