import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { useSelector } from "react-redux";
import Draggable from "../../layout/Draggable";
import Container from "../../layout/Container";
import Text from "../../layout/Text";
import SVG from "../../svg/SVG";
import Title from "../../layout/pane/Title";
import Line from "../../layout/Line";

const MusicPlayer = () => {
  const furthest = useSelector(state => state.theme.theme.color.furthest);
  const closest = useSelector(state => state.theme.theme.color.closest);

  return (
    <Draggable
      {...{
        all: 1,
        borderRadius: "100px",
        position: "absolute",
        absoluteLeft: `-${4 * SPACING}px`,
        absoluteTop: `-${22 * SPACING}px`,
        background: closest,
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
          {...{ title: artist, subtitles: [title, `${playTime}s`, `-${songLength - playTime}s`] }}
        />
      </Spacing>
      <Line vertical />
      <Spacing
        pointer
        {...{ hover: <Hover />, children: <SVG {...{ name: "Note", size: 6 }} /> }}
      />
    </Spacing>
  );
};

const DockButton = () => {
  return <Spacing>dock icon</Spacing>;
};

const Hover = () => {
  return (
    <Container border>
      <Text extraSmall>
        Click and drag the <Text primary extraSmall bold children="music player" />.
      </Text>
    </Container>
  );
};
