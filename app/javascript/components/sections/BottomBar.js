import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import Morality from "./bottomBar/Morality";
import PlayerAvatarInfo from "./bottomBar/PlayerAvatarInfo";
import MusicPlayer from "./bottomBar/MusicPlayer";

const BottomBar = () => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  return (
    <Spacing
      horizontal
      {...{ background: closest, all: 1, position: "fixed", absoluteBottom: "0px", width: "100%" }}
    >
      <MusicPlayer />
      <PlayerAvatarInfo />
      <div /> {/* dummy for auto spacing */}
      <Spacing {...{ width: "80%", right: 2 }}>
        <Morality />
      </Spacing>
    </Spacing>
  );
};

export default BottomBar;
