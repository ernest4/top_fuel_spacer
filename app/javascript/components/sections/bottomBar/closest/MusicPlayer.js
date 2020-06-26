import React from "react";
import { SPACING } from "../../../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "../../../layout/Draggable";
import * as musicActions from "../../../store/actions/music";
import Player from "./musicPlayer/Player";

const initialPlayerPosition = {
  absoluteTop: `-${24 * SPACING}px`,
  absoluteLeft: `-${64 * SPACING}px`,
};

const MusicPlayer = () => {
  const dispatch = useDispatch();

  const dock = useSelector(state => state.music.dock);

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);
  const secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);

  const onDrag = ({ newTop, newLeft }) => {
    const { absoluteTop, absoluteLeft } = initialPlayerPosition;

    if (newTop === absoluteTop && newLeft === absoluteLeft) dispatch(musicActions.setDock(false));
  };

  return (
    <Draggable
      {...{
        all: 1,
        borderRadius: "100px",
        // position: "absolute",
        position: "fixed",
        ...initialPlayerPosition,
        resetPosition: dock,
        background: closest,
        border: `4px solid ${closest}`,
        boxShadow: `inset 0px 0px 0px 3px ${secondary}`,
        z: 2,
        onDrag,
        children: <Player />,
      }}
    />
  );
};

export default MusicPlayer;
