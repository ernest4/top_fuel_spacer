import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { setAlpha } from "../../utils/Color";
import useTheme from "../../hooks/useTheme";
import { css } from "styled-components";

const Itinerary = () => {
  const { secondary } = useTheme();

  const locations = ["planet", "satelite", "station", "meteor"]; // TODO: ... wip

  return (
    <Spacing
      pointer
      {...{
        position: "absolute",
        absoluteLeft: "0px",
        height: "100vh",
        width: `${2 * SPACING}px`,
        background: setAlpha({ hsla: secondary, alpha: 0.5 }),
        css: css`
          transition: width 0.25s;

          &:hover {
            width: ${6 * SPACING}px;
            background: ${setAlpha({ hsla: secondary, alpha: 0.75 })};
          }

          ${"" /* animate movemenet */}
          ${"" /* transform: translate(0px, 292px); */}
        `,
      }}
    >
      {locations.map((location, key) => {
        return <Spacing {...{ key, width: "70px", background: "green" }}>{location}</Spacing>;
      })}
    </Spacing>
  );
};

export default Itinerary;
