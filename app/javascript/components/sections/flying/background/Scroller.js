import React from "react";
import Spacing from "../../../layout/Spacing";
import { keyframes, css } from "styled-components";

const Scroller = ({ play, duration, onScrolled, nextComponent, currentComponent }) => {
  return (
    <Spacing
      {...{
        // Forces the component to rerender and reapply the animation css (plays animation again)
        key: +new Date(),
        position: "absolute",
        width: "33vw",
        height: "200vh",
        absoluteTop: "-100vh",
        background: "transparent",
        css:
          play &&
          css`
            animation-name: ${keyframes`
              0% { transform: translate(0, 0); }
              100% { transform: translate(0, 100vh); }
            `};

            animation-duration: ${duration}s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
          `,
        onAnimationEnd: onScrolled,
        children: [nextComponent, currentComponent].map((component, key) => (
          <Spacing key={key} children={component} />
        )),
      }}
    />
  );
};

export default Scroller;
