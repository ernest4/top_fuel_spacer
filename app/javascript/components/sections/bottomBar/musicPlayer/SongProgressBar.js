import React, { useState } from "react";
import ProgressBar from "../../../misc/ProgressBar";
import { useSelector } from "react-redux";

const SongProgressBar = () => {
  const [hoverTime, setHoverTime] = useState();

  const time = useSelector(state => state.music.currentSong.time);
  const songLength = useSelector(state => state.music.currentSong.songLength);
  const primary = useSelector(state => state.theme.theme.color.primary);

  const onBarHover = ({ index }) => setHoverTime(index);

  return (
    <ProgressBar
      {...{
        value: time,
        range: songLength,
        resolution: 50,
        barBackground: primary,
        hover: <div>{hoverTime}</div>,
        onBarHover,
      }}
    />
  );
};

export default SongProgressBar;
