import React, { useState, useCallback, memo } from "react";
import ProgressBar from "../../../misc/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../../layout/Container";
import Text from "../../../layout/Text";
import * as musicActions from "../../../store/actions/music";
import { formatTime, getMinuteSeconds } from "../../../utils/Time";

const RESOLUTION = 50;

const SongProgressBar = () => {
  const dispatch = useDispatch();

  const [hoverTime, setHoverTime] = useState();

  const currentTime = useSelector(state => state.music.currentSong.currentTime);
  const duration = useSelector(state => state.music.currentSong.duration);
  const primary = useSelector(state => state.theme.theme.color.primary);

  const onBarHover = useCallback(({ index }) => setHoverTime(index), []);
  const onClick = useCallback(
    ({ index }) => {
      dispatch(musicActions.setSkipTime((index / RESOLUTION) * (duration || 0)));
    },
    [dispatch, duration]
  );

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

const Hover = memo(({ hoverTime }) => {
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
});
