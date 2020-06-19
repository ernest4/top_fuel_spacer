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
        <Prestige />
        <Player />
        <Spacing width={`${12 * SPACING}px`} />
        <Level />
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
          children: <div>player</div>,
        }}
      />
    </Spacing>
  );
};

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

// TODO: this needs outline white background like the other two circles above!
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
