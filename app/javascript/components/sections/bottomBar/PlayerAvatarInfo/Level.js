import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";

const Level = () => {
  const background = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const level = useSelector(state => state.player.level);

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
        {...{
          width: `${6 * SPACING}px`,
          height: `${6 * SPACING}px`,
          borderRadius: "100%",
          background: "red",
          border: `4px solid ${secondary}`,
          z: "1",
          children: <div>{level}</div>,
        }}
      />
    </Spacing>
  );
};

export default Level;
