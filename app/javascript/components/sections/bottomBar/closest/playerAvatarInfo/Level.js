import React from "react";
import Spacing, { SPACING } from "../../../../layout/Spacing";
import { useSelector } from "react-redux";
import Text from "../../../../layout/Text";
import XpHover from "./XpHover";
import useTheme from "../../../../hooks/useTheme";

const Level = () => {
  const { closest: background, secondary } = useTheme();

  const level = useSelector(state => state.player.level);

  // TODO: onclick, take to level stats and upgrades

  // TODO: do a +1 animation of a +1 number popping up and floating away and fading when you level
  // up. Also some kinda blinking on the level to indicate level up, which will allow you to
  // upgrade your skills.
  return (
    <Spacing
      center
      {...{
        width: `${8 * SPACING}px`,
        height: `${8 * SPACING}px`,
        borderRadius: "100%",
        background,
        position: "absolute",
        absoluteLeft: `${11 * SPACING}px`,
        absoluteBottom: `0px`,
      }}
    >
      <Spacing
        center
        pointer
        {...{
          width: `${6 * SPACING}px`,
          height: `${6 * SPACING}px`,
          borderRadius: "100%",
          background,
          border: `4px solid ${secondary}`,
          z: "1",
          children: <Text primary bold {...{ children: level }} />,
          hover: <XpHover />,
          bubble: <Text primary bold large transform="skew(-15deg, 0deg)" children="+1" />,
          bubbleTrigger: level,
          // bubbleMaxHorizontal: "5vw",
        }}
      />
    </Spacing>
  );
};

export default Level;
