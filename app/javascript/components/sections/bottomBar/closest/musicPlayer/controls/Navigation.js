import React, { useEffect } from "react";
import Container from "../../../../../layout/Container";
import Text from "../../../../../layout/Text";
import Spacing from "../../../../../layout/Spacing";
import SVG from "../../../../../svg/SVG";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../../../store/actions/music";

const Navigation = ({ direction }) => {
  const dispatch = useDispatch();
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);
  const songs = useSelector(state => state.music.songs);
  const currentSongPosition = useSelector(state => state.music.currentSong.position);
  const duration = useSelector(state => state.music.currentSong.duration);
  const currentTime = useSelector(state => state.music.currentSong.currentTime);
  const finished = useSelector(state => state.music.currentSong.finished);

  const onSkipSong = () => {
    const songDirection = direction === "next" ? 1 : -1;
    let nextIndex = currentSongPosition + songDirection;

    if (nextIndex < 0) nextIndex = songs.length - 1;
    if (songs.length - 1 < nextIndex) nextIndex = 0;

    dispatch(
      musicActions.setCurrentSong({ ...songs[nextIndex], duration: 0, currentTime: 0, skipTime: 0 })
    );
  };

  // useEffect(() => {
  //   if (duration && Math.round(currentTime) === Math.round(duration)) onSkipSong();
  // }, [duration, dispatch, currentTime]);

  useEffect(() => {
    if (finished) onSkipSong();
  }, [finished]);

  return (
    <Spacing
      horizontal
      pointer
      {...{
        hover: <NavigationHover {...{ direction }} />,
        hoverProps: { placement: "bottom" },
        transform: `scale(${direction === "next" ? "-" : ""}1, 1)`,
        onClick: onSkipSong,
      }}
    >
      <Spacing
        {...{ borderRadius: "4px", background: fontDefault, all: 1, left: 0.5, right: 0.5 }}
      />
      <Spacing transform={`rotate(-90deg)`}>
        <SVG {...{ name: "Triangle", size: 3, fill: fontDefault }} />
      </Spacing>
    </Spacing>
  );
};

export default Navigation;

const NavigationHover = ({ direction }) => {
  return (
    <Container border>
      <Text extraSmall>
        <Text secondary extraSmall bold children="Skip" /> to{" "}
        <Text primary extraSmall bold children={direction} /> song.
      </Text>
    </Container>
  );
};
