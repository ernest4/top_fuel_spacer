import React from "react";
import { SPACING } from "../../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "../../layout/Draggable";
import * as musicActions from "../../store/actions/music";
import Player from "./musicPlayer/Player";

const initialPlayerPosition = {
  absoluteLeft: `-${4 * SPACING}px`,
  absoluteTop: `-${22 * SPACING}px`,
};

const MusicPlayer = () => {
  const dispatch = useDispatch();

  const dock = useSelector(state => state.music.dock);
  // const furthest = useSelector(state => state.theme.theme.color.furthest);
  const closest = useSelector(state => state.theme.theme.color.closest);

  const onDrag = ({ newTop, newLeft }) => {
    const { absoluteTop, absoluteLeft } = initialPlayerPosition;

    if (newTop === absoluteTop && newLeft === absoluteLeft) dispatch(musicActions.setDock(false));
  };

  return (
    <Draggable
      {...{
        all: 1,
        borderRadius: "100px",
        position: "absolute",
        absoluteLeft: `-${4 * SPACING}px`,
        absoluteTop: `-${22 * SPACING}px`,
        resetPosition: dock,
        background: closest,
        z: 2,
        onDrag,
        children: <Player />,
      }}
    />
  );
};

export default MusicPlayer;
