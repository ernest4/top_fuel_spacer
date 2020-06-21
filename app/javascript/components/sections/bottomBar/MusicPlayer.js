import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { useSelector } from "react-redux";
import Draggable from "../../layout/Draggable";

const MusicPlayer = () => {
  const furthest = useSelector(state => state.theme.theme.color.furthest);

  return (
    <Draggable
      {...{
        all: 4,
        borderRadius: "100%",
        position: "absolute",
        absoluteLeft: `-${4 * SPACING}px`,
        absoluteTop: `-${22 * SPACING}px`,
        background: furthest,
        z: 2,
      }}
    >
      <Player />
    </Draggable>
  );
};

export default MusicPlayer;

const Player = () => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  return (
    <Draggable useButton {...{ background: closest, width: "500px" }}>
      Player here
    </Draggable>
  );
};
