import React, { useState, useCallback, memo } from "react";
import ProgressBar from "../../../../misc/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../../../layout/Container";
import Text from "../../../../layout/Text";
import * as musicActions from "../../../../store/actions/music";
import { formatTime, getMinuteSeconds } from "../../../../utils/Time";

const RESOLUTION = 50;

const SongProgressBar = () => {
  const dispatch = useDispatch();

  // const [hoverTime, setHoverTime] = useState();

  const currentTime = useSelector(state => state.music.currentTime);
  const duration = useSelector(state => state.music.duration);
  const primary = useSelector(state => state.theme.theme.color.primary);

  const onBarClick = useCallback(
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
        barHover: Hover,
        onBarClick,
      }}
    />
  );
};

export default SongProgressBar;

const Hover = memo(({ index: hoverTime }) => {
  const duration = useSelector(state => state.music.duration);

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
