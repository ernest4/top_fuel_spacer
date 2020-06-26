import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../../layout/Spacing";
import MusicPlayer from "./closest/MusicPlayer";
import PlayerAvatarInfo from "./closest/PlayerAvatarInfo";
import Morality from "./closest/Morality";

const Closest = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  return (
    <Spacing horizontal {...{ background: closest, all: 1 }}>
      <MusicPlayer />
      <PlayerAvatarInfo />
      <div /> {/* dummy for auto spacing */}
      <Spacing {...{ width: "80%", right: 2 }}>
        <Morality />
      </Spacing>
    </Spacing>
  );
};

export default Closest;
