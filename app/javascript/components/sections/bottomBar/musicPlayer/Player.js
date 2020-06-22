import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Title from "../../../layout/pane/Title";
import Line from "../../../layout/Line";
import DockButton from "./DockButton";
import NoteButton from "./NoteButton";
import Controls from "./Controls";
import SongProgressBar from "./SongProgressBar";
import AudioSource from "./AudioSource";

const Player = () => {
  const artist = useSelector(state => state.music.currentSong.artist);
  const title = useSelector(state => state.music.currentSong.title);
  const time = useSelector(state => state.music.currentSong.time);
  const songLength = useSelector(state => state.music.currentSong.songLength);

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
      <AudioSource />
    </Spacing>
  );
};

export default Player;
