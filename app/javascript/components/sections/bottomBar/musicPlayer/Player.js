import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Title from "../../../layout/pane/Title";
import Line from "../../../layout/Line";
import DockButton from "./DockButton";
import NoteButton from "./NoteButton";
import Controls from "./Controls";

const Player = () => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  const artist = useSelector(state => state.music.currentSong.artist);
  const title = useSelector(state => state.music.currentSong.title);
  // const filename = useSelector(state => state.music.currentSong.filename)

  const playTime = 50; // TESTING
  const songLength = 500; // TESTING

  return (
    <Spacing horizontal>
      <DockButton />
      <Line vertical />
      <Spacing {...{ left: 1, right: 1 }}>
        <Title
          {...{
            title: artist,
            subtitles: [title, `${playTime}s`, `-${songLength - playTime}s`],
            interactiveHover: <Controls />,
            hoverProps: { placement: "bottom", followCursor: false },
          }}
        />
      </Spacing>
      <Line vertical />
      <NoteButton />
    </Spacing>
  );
};

export default Player;
