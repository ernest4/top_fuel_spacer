import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";

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
      <Spacing horizontal align="flex-end">
        <Player />
        <Prestige />
      </Spacing>
      {/* <ProgressBar /> */}
      <div>progress</div>
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
