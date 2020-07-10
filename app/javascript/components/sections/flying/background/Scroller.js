import React, { useState } from "react";
import Spacing from "../../../layout/Spacing";
import { keyframes, css } from "styled-components";
import { getRandom } from "../../../utils/Array";

const Scroller = ({
  play,
  duration,
  onScrolled: onScrolledCallback,
  initialComponent,
  components,
  ...props
}) => {
  const [nextComponent, setNextComponent] = useState(components[1]);
  const [currentComponent, setCurrentComponent] = useState(initialComponent || components[0]);

  const onScrolled = () => {
    setCurrentComponent(nextComponent);
    setNextComponent(getRandom(components));

    if (onScrolledCallback) onScrolledCallback();
  };

  // TODO: need to think about this, how to scroll without exceeding page bounds and eliminate pop in ?!?!
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
        ...props,
      }}
    />
  );
};

export default Scroller;
