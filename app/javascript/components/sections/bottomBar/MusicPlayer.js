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
  const closest = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);

  const onDrag = ({ newTop, newLeft }) => {
    const { absoluteTop, absoluteLeft } = initialPlayerPosition;

    if (newTop === absoluteTop && newLeft === absoluteLeft) dispatch(musicActions.setDock(false));
  };

  // TODO: bug. Docking only works the first time ?!?!?
  return (
    <Draggable
      {...{
        all: 1,
        borderRadius: "100px",
        position: "absolute",
        absoluteLeft: `-${64 * SPACING}px`,
        absoluteTop: `-${28 * SPACING}px`,
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
