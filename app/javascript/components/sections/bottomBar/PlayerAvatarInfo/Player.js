import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";

const Player = () => {
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const background = useSelector(state => state.theme.theme.color.closest);

  return (
    <Spacing
      center
      {...{
        width: `${14 * SPACING}px`,
        height: `${14 * SPACING}px`,
        borderRadius: "100%",
        background,
        position: "fixed",
        absoluteBottom: `${3 * SPACING}px`,
        absoluteLeft: `${1 * SPACING}px`,
      }}
    >
      <Spacing
        center
        {...{
          width: `${12 * SPACING}px`,
          height: `${12 * SPACING}px`,
          borderRadius: "100%",
          background: "transparent",
          border: `6px solid ${secondary}`,
          children: <div>player</div>,
        }}
      />
    </Spacing>
  );
};

export default Player;
