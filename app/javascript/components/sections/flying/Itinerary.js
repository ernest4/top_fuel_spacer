import React, { useEffect } from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { setAlpha } from "../../utils/Color";
import useTheme from "../../hooks/useTheme";
import { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { REDUX_UPDATE_INTERVAL } from "./Score";
import Card from "../../layout/Card";
import Text from "../../layout/Text";
import { generateNextLocations } from "../../store/actions/locations";

const Itinerary = () => {
  const dispatch = useDispatch();

  const { secondary } = useTheme();

  const distance = useSelector(state => state.score.distance);

  const locations = useSelector(state => state.locations.locations);

  const speed = useSelector(state => state.rocket.speed);
  const contactRange = useSelector(state => state.rocket.contactRange);

  // Generate initial set of locations
  useEffect(() => {
    if (!(0 < distance)) return;
    if (locations?.length !== 0) return;
    if (!(0 < contactRange)) return;

    dispatch(generateNextLocations({ count: 4, distance, contactRange }));
  }, [distance, dispatch, locations, contactRange]);

  useEffect(() => {
    // dispatch(generateNextLocations());
    // TODO: update distance to locations
    // locations.map(location => {});
  }, [distance]);

  useEffect(() => {
    // DEBUGGING
    console.log(locations);
  }, [locations]);

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
        const yDisplacement = (1 - (distanceToRocket - distance) / contactRange) * 100;
        {
          /* const absoluteTop =  */
        }

        if (key === 0 && 100 < yDisplacement) {
          dispatch(generateNextLocations({ count: 4, distance, contactRange }));
        }

        return (
          <Spacing
            {...{
              key,
              position: "absolute",
              width: "70px",
              background: "green",
              // absoluteTop,
              // TODO: the distance transform needs to be tweaked to account for changing distances and speed
              css: css`
                ${"" /* transition: all ${(REDUX_UPDATE_INTERVAL / 1000) * 1.5}s linear; */}
                transform: translate(0, ${yDisplacement - 100}vh);
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
