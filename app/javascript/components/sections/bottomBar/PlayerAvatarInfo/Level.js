import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import { Hover } from "./PlayerXpBar";

const Level = () => {
  const background = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);
  const level = useSelector(state => state.player.level);

  // TODO: onclick, take to level stats and upgrades

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
          children: <div>{level}</div>,
          hover: <Hover {...{ xp, levelUpXp, level }} />,
        }}
      />
    </Spacing>
  );
};

export default Level;
