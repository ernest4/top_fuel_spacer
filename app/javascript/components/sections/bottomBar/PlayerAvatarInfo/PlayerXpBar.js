import React from "react";
import { SPACING } from "../../../layout/Spacing";
import ProgressBar from "../../../misc/ProgressBar";
import { useSelector } from "react-redux";

const PlayerXpBar = () => {
  const primary = useSelector(state => state.theme.theme.color.primary);
  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);

  return (
    <ProgressBar
      skewLeft
      {...{
        value: xp,
        range: levelUpXp,
        resolution: 10,
        height: `${2 * SPACING}px`,
        barBackground: primary,
      }}
    />
  );
};

export default PlayerXpBar;
