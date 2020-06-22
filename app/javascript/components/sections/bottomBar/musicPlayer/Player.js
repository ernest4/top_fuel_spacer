import React, { useState } from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Title from "../../../layout/pane/Title";
import Line from "../../../layout/Line";
import DockButton from "./DockButton";
import NoteButton from "./NoteButton";
import Controls from "./Controls";
import ProgressBar from "../../../misc/ProgressBar";

const Player = () => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  const artist = useSelector(state => state.music.currentSong.artist);
  const title = useSelector(state => state.music.currentSong.title);
  const time = useSelector(state => state.music.currentSong.time);
  const songLength = useSelector(state => state.music.currentSong.songLength);
  // const filename = useSelector(state => state.music.currentSong.filename)

  return (
    <Spacing horizontal>
      <DockButton />
      <Line vertical />
      <Spacing
        vertical
        {...{
          left: 1,
          right: 1,
          interactiveHover: <Controls />,
          hoverProps: { placement: "bottom", followCursor: false },
          width: "450px",
        }}
      >
        <Title {...{ title: artist, subtitles: [title, `${time}s`, `-${songLength - time}s`] }} />
        <Spacing top={0.5} />
        <SongProgressBar />
      </Spacing>
      <Line vertical />
      <NoteButton />
    </Spacing>
  );
};

export default Player;

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
