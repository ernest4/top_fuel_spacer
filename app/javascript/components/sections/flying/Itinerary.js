import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { setAlpha } from "../../utils/Color";
import useTheme from "../../hooks/useTheme";
import { css } from "styled-components";
import { useSelector } from "react-redux";
import { REDUX_UPDATE_INTERVAL } from "./Score";

const Itinerary = () => {
  const { secondary } = useTheme();

  const distance = useSelector(state => state.score.distance);

  const locations = [
    { name: "planet", distanceToRocket: 0 },
    { name: "satelite", distanceToRocket: 25 },
    { name: "station", distanceToRocket: 50 },
    { name: "meteor", distanceToRocket: 75 },
  ]; // TODO: ... wip

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
        return (
          <Spacing
            {...{
              key,
              position: "absolute",
              width: "70px",
              background: "green",
              // TODO: the distance transform needs to be tweaked to account for changing distances and speed
              css: css`
                transition: all ${(REDUX_UPDATE_INTERVAL / 1000) * 1.5}s linear;
                transform: translate(0, ${location.distanceToRocket + distance / 100}vh);
              `,
            }}
          >
            {location.name}
          </Spacing>
        );
      })}
    </Spacing>
  );
};

export default Itinerary;
