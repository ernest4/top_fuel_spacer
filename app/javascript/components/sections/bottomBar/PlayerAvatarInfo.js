import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import Prestige from "./playerAvatarInfo/Prestige";
import Player from "./playerAvatarInfo/Player";
import Level from "./playerAvatarInfo/Level";
import PlayerXpBar from "./playerAvatarInfo/PlayerXpBar";

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
