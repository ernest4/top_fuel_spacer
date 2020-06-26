import React, { useEffect } from "react";
import Container from "../../../../../layout/Container";
import Text from "../../../../../layout/Text";
import Spacing from "../../../../../layout/Spacing";
import SVG from "../../../../../svg/SVG";
import { useSelector, useDispatch, batch } from "react-redux";
import * as musicActions from "../../../../../store/actions/music";

const Navigation = ({ direction }) => {
  const dispatch = useDispatch();

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const fontDefault = useSelector(state => state.theme.themes[currentThemeId]?.color.fontDefault);
  const songsLength = useSelector(state => state.music.songs.length);
  const currentSongId = useSelector(state => state.music.currentSongId);
  const finished = useSelector(state => state.music.finished);

  const onSkipSong = () => {
    const songDirection = direction === "next" ? 1 : -1;
    let nextIndex = currentSongId + songDirection;

    if (nextIndex < 0) nextIndex = songsLength - 1;
    if (songsLength - 1 < nextIndex) nextIndex = 0;

    // NOTE: each dispatch triggers rerender, can batch them together to trigger rerender once
    batch(() => {
      dispatch(musicActions.setCurrentSongId(nextIndex));
      dispatch(musicActions.setDuration(0));
      dispatch(musicActions.setCurrentTime(0));
      dispatch(musicActions.setSkipTime(0));
    });
  };

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
