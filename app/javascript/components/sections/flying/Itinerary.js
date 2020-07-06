import React, { useEffect } from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { setAlpha } from "../../utils/Color";
import useTheme from "../../hooks/useTheme";
import { css } from "styled-components";
import { useSelector } from "react-redux";
import { REDUX_UPDATE_INTERVAL } from "./Score";
import Card from "../../layout/Card";
import Text from "../../layout/Text";

const Itinerary = () => {
  const { secondary } = useTheme();

  const distance = useSelector(state => state.score.distance);

  const locations = useSelector(state => state.locations.locations);

  useEffect(() => {
    // TODO: update distance to locations
  }, [distance]);

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
        hover: <Hover />,
      }}
    >
      {locations.map(({ name, distanceToRocket }, key) => {
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
                transform: translate(0, ${distanceToRocket + distance / 100}vh);
              `,
              children: name,
            }}
          />
        );
      })}
    </Spacing>
  );
};

export default Itinerary;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Itinerary",
          subtitles: ["wip"],
        },
        body: (
          <Text extraSmall>
            This shows closest items to your current{" "}
            <Text primary extraSmall bold children="flight path" />.
            <Spacing top={1} />
            Click on any of the <Text secondary extraSmall bold children="items" /> to interact.
          </Text>
        ),
        footer: <Text extraSmall muted italics children={`"Are we there yet?"`} />,
      }}
    />
  );
};
