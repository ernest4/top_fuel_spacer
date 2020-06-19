import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import Prestige from "./PlayerAvatarInfo/Prestige";
import Player from "./PlayerAvatarInfo/Player";
import Level from "./PlayerAvatarInfo/Level";
import PlayerXpBar from "./PlayerAvatarInfo/PlayerXpBar";

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
