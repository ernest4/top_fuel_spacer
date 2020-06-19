import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";

const Prestige = () => {
  const background = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const prestige = useSelector(state => state.player.prestige);

  return (
    <Spacing
      center
      {...{
        width: `${8 * SPACING}px`,
        height: `${8 * SPACING}px`,
        borderRadius: "100%",
        background,
        position: "absolute",
        absoluteLeft: `-${SPACING}px`,
        absoluteBottom: `${12 * SPACING}px`,
      }}
    >
      <Spacing
        center
        {...{
          width: `${6 * SPACING}px`,
          height: `${6 * SPACING}px`,
          borderRadius: "100%",
          background: "aqua",
          border: `4px solid ${secondary}`,
          z: "1",
          children: <div>{prestige}</div>,
        }}
      />
    </Spacing>
  );
};

export default Prestige;
