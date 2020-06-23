import React, { useState } from "react";
import ProgressBar from "../../../misc/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../../layout/Container";
import Text from "../../../layout/Text";
import * as musicActions from "../../../store/actions/music";

const RESOLUTION = 50;

const SongProgressBar = () => {
  const dispatch = useDispatch();

  const [hoverTime, setHoverTime] = useState();

  const currentTime = useSelector(state => state.music.currentSong.time);
  const duration = useSelector(state => state.music.currentSong.duration);
  const primary = useSelector(state => state.theme.theme.color.primary);

  const onBarHover = ({ index }) => setHoverTime(index);
  const onClick = ({ index }) => {
    dispatch(musicActions.setCurrentTime((index / RESOLUTION) * duration));
  };

  return (
    <ProgressBar
      {...{
        value: currentTime,
        range: duration,
        resolution: RESOLUTION,
        barBackground: primary,
        hover: <Hover {...{ hoverTime }} />,
        onBarHover,
        onClick,
      }}
    />
  );
};

export default SongProgressBar;

const Hover = ({ hoverTime }) => {
  const duration = useSelector(state => state.music.currentSong.duration);

  const normalizedTime = (hoverTime / RESOLUTION) * duration;

  const hoverTimeString = formatTime(getMinuteSeconds(normalizedTime));
  const durationTimeString = formatTime(getMinuteSeconds(duration));

  return (
    <Container border>
      <Text extraSmall>
        Set <Text primary extraSmall bold children="time" /> to{" "}
        <Text secondary extraSmall bold children={`${hoverTimeString}/${durationTimeString}`} />.
      </Text>
    </Container>
  );
};

const getMinuteSeconds = time => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time - minutes * 60);

  return { minutes, seconds };
};

const formatTime = ({ minutes, seconds }) => {
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
