import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { setAlpha } from "../../utils/Color";
// import { useSelector } from "react-redux";
import useTheme from "../../hooks/useTheme";

const Itinerary = () => {
  const { secondary } = useTheme();

  // const currentThemeId = useSelector(state => state.theme.currentThemeId);
  // const secondary = useSelector(state => state.theme.themes[currentThemeId].color.secondary);

  return (
    <Spacing
      {...{
        position: "absolute",
        absoluteLeft: "0px",
        height: "100vh",
        width: `${2 * SPACING}px`,
        // background: "red",
        background: setAlpha({ hsla: secondary, alpha: 0.5 }),
      }}
    >
      left bar
    </Spacing>
  );
};

export default Itinerary;
