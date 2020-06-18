import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";
import { useSelector } from "react-redux";

const PlayerAvatarInfo = () => {
  return (
    <Spacing
      vertical
      {...{
        position: "absolute",
        absoluteBottom: `${SPACING}px`,
        absoluteLeft: `${2 * SPACING}px`,
      }}
    >
      <Spacing horizontal {...{ align: "flex-end", bottom: 1 }}>
        <Player />
        <Spacing width={`${12 * SPACING}px`} />
        <Prestige />
      </Spacing>
      <PlayerXpBar />
    </Spacing>
  );
};

export default PlayerAvatarInfo;

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
        }}
      >
        player
      </Spacing>
    </Spacing>
  );
};

const Prestige = () => {
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const prestige = useSelector(state => state.player.prestige);

  return (
    <Spacing
      center
      {...{
        width: `${4 * SPACING}px`,
        height: `${4 * SPACING}px`,
        borderRadius: "100%",
        background: "red",
        border: `4px solid ${secondary}`,
        z: "1",
      }}
    >
      <div>{prestige}</div>
    </Spacing>
  );
};

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
