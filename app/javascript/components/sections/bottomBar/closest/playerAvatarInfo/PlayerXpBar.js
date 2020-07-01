import React from "react";
import { SPACING } from "../../../../layout/Spacing";
import ProgressBar from "../../../../misc/ProgressBar";
import { useSelector } from "react-redux";
import { getXpRequired } from "../../../../utils/Progression";
import useTheme from "../../../../hooks/useTheme";
import XpHover from "./XpHover";

const PlayerXpBar = () => {
  const { primary } = useTheme();

  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);

  // TODO: onclick, take to level stats and upgrades

  return (
    <ProgressBar
      skewLeft
      pointer
      {...{
        // value: normalizedXp,
        // range: normalizedLevelUpXp,
        value: xp,
        range: levelUpXp,
        resolution: 10,
        height: `${2 * SPACING}px`,
        barBackground: primary,
        hover: <XpHover />,
      }}
    />
  );
};

export default PlayerXpBar;
