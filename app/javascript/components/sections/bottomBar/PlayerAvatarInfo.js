import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";
import { useSelector } from "react-redux";

const PlayerAvatarInfo = () => {
  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);

  console.log(xp);
  console.log(levelUpXp);

  return (
    <Spacing
      vertical
      {...{
        position: "absolute",
        absoluteBottom: `${SPACING}px`,
        absoluteLeft: `${2 * SPACING}px`,
      }}
    >
      <Spacing horizontal align="flex-end">
        <Player />
        <Prestige />
      </Spacing>
      <ProgressBar outline {...{ value: xp, range: levelUpXp, resolution: 10 }} />
    </Spacing>
  );
};

export default PlayerAvatarInfo;

const Player = () => {
  return (
    <Spacing
      {...{
        width: `${12 * SPACING}px`,
        height: `${12 * SPACING}px`,
        borderRadius: "100%",
        background: "green",
      }}
    >
      player
    </Spacing>
  );
};

const Prestige = () => {
  return (
    <Spacing
      {...{
        width: `${3 * SPACING}px`,
        height: `${3 * SPACING}px`,
        borderRadius: "100%",
        background: "red",
      }}
    >
      prestige
    </Spacing>
  );
};
