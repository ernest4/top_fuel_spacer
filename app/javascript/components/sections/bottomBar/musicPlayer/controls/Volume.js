import React, { useState } from "react";
import Spacing, { SPACING } from "../../../../layout/Spacing";
import SVG from "../../../../svg/SVG";
import ProgressBar from "../../../../misc/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../../store/actions/music";
import Text from "../../../../layout/Text";
import Container from "../../../../layout/Container";

const Volume = () => {
  const dispatch = useDispatch();
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);
  const volume = useSelector(state => state.music.volume);
  const furthest = useSelector(state => state.theme.theme.color.furthest);

  const onMute = () => dispatch(musicActions.setVolume(0 < volume ? 0 : 5));

  const color = 0 < volume ? fontDefault : furthest;

  return (
    <Spacing
      horizontal
      pointer
      center
      {...{
        interactiveHover: <Hover />,
        hoverProps: { placement: "right", followCursor: false },
        onClick: onMute,
        // transform: `scale(${direction === "next" ? "-" : ""}1, 1)`,
      }}
    >
      <Spacing
        {...{
          borderRadius: "4px",
          background: color,
          all: 0.5,
          left: 1,
          height: `${2 * SPACING}px`,
          position: "absolute",
          absoluteRight: `${3 * SPACING}px`,
        }}
      />
      <Spacing transform={`rotate(-90deg)`}>
        <SVG {...{ name: "Triangle", size: 3, fill: color }} />
      </Spacing>
    </Spacing>
  );
};

export default Volume;

const Hover = () => {
  const dispatch = useDispatch();

  const [volumeHover, setVolumeHover] = useState();

  const closest = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const volume = useSelector(state => state.music.volume);

  const onBarClick = ({ index }) => dispatch(musicActions.setVolume(index + 1));
  const onBarHover = ({ index }) => setVolumeHover(index);

  const volumeRange = 10;

  return (
    <Spacing
      {...{
        background: closest,
        all: 1,
        width: `${16 * SPACING}px`,
        borderRadius: "4px",
        hover: <VolumeHover {...{ volumeHover, volumeRange }} />,
        hoverProps: { placement: "bottom" },
      }}
    >
      <ProgressBar
        {...{
          value: volume,
          range: volumeRange,
          height: `${3 * SPACING}px`,
          barBackground: secondary,
          onClick: onBarClick,
          onBarHover,
        }}
      />
    </Spacing>
  );
};

const VolumeHover = ({ volumeHover, volumeRange }) => {
  return (
    <Container border>
      <Text extraSmall>
        Set <Text primary extraSmall bold children="volume" /> to{" "}
        <Text secondary extraSmall bold children={`${volumeHover + 1}/${volumeRange}`} />.
      </Text>
    </Container>
  );
};
