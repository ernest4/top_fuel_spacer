import React from "react";
import Spacing from "../../../../layout/Spacing";
import { useSelector } from "react-redux";
import Title from "../../../../layout/pane/Title";
import Line from "../../../../layout/Line";
import DockButton from "./DockButton";
import NoteButton from "./NoteButton";
import Controls from "./Controls";
import SongProgressBar from "./SongProgressBar";
import AudioSource from "./AudioSource";
import { formatTime, getMinuteSeconds } from "../../../../utils/Time";
import Text from "../../../../layout/Text";
import Container from "../../../../layout/Container";

const Player = () => {
  const basic = useSelector(state => state.settings.graphics.musicPlayer.basic);

  return (
    <Spacing horizontal>
      <DockButton />
      <Line vertical />
      <Spacing left={1} />
      <Spacing
        vertical
        center
        {...{
          interactiveHover: <Controls />,
          hoverProps: { placement: "bottom", followCursor: false },
          width: "450px",
        }}
      >
        {!basic && (
          <>
            <ArtistAndSong />
            <Spacing top={0.5} />
            <SongProgressBar />
          </>
        )}
        <AudioSource />
      </Spacing>
      <Spacing left={1} />
      <Line vertical />
      <NoteButton />
    </Spacing>
  );
};

export default Player;

const ArtistAndSong = () => {
  const currentSongId = useSelector(state => state.music.currentSongId);
  const artist = useSelector(state => state.music.songs[currentSongId]?.artist);
  const title = useSelector(state => state.music.songs[currentSongId]?.title);
  const credit = useSelector(state => state.music.songs[currentSongId]?.credit);

  const currentTime = useSelector(state => state.music.currentTime);
  const duration = useSelector(state => state.music.duration);

  const currentTimeString = formatTime(getMinuteSeconds(currentTime));
  const remainderTimeString = formatTime(getMinuteSeconds(duration - currentTime));

  return (
    <Title
      {...{
        title: artist,
        subtitles: [title, `${currentTimeString}s`, `-${remainderTimeString}s`],
        overflow: "scroll",
        height: "50px",
        width: "100%",
        hover: (
          <Container border>
            <Text extraSmall {...{ children: credit }} />
          </Container>
        ),
      }}
    />
  );
};
