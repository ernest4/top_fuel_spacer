import React from "react";
import Spacing from "../../../../layout/Spacing";
import Container from "../../../../layout/Container";
import Text from "../../../../layout/Text";
import SVG from "../../../../svg/SVG";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../../store/actions/music";

const Play = () => {
  const dispatch = useDispatch();
  const playing = useSelector(state => state.music.playing);

  const onPlayPause = () => dispatch(musicActions.setPlaying(!playing));

  return (
    <Spacing
      pointer
      {...{
        hover: <PlayPauseHover />,
        hoverProps: { placement: "bottom" },
        children: playing ? <PauseButton /> : <PlayButton />,
        onClick: onPlayPause,
      }}
    />
  );
};

export default Play;

const PlayPauseHover = () => {
  const playing = useSelector(state => state.music.playing);

  return (
    <Container border>
      <Text extraSmall>
        <Text secondary extraSmall bold children={playing ? "Pause" : "Play"} /> the{" "}
        <Text primary extraSmall bold children="current" /> song.
      </Text>
    </Container>
  );
};

const PlayButton = () => {
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);

  return (
    <Spacing transform="rotate(90deg)">
      <SVG {...{ name: "Triangle", size: 3, fill: fontDefault }} />
    </Spacing>
  );
};

const PauseButton = () => {
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);

  return (
    <Spacing horizontal height="100%">
      <Spacing
        {...{ borderRadius: "4px", background: fontDefault, all: 1, left: 0.5, right: 0.5 }}
      />
      <Spacing {...{ left: 0.5 }} />
      <Spacing
        {...{ borderRadius: "4px", background: fontDefault, all: 1, left: 0.5, right: 0.5 }}
      />
    </Spacing>
  );
};
