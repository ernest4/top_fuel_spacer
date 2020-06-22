import React from "react";
import Spacing from "../../../layout/Spacing";
import Line from "../../../layout/Line";
import Text from "../../../layout/Text";
import { useSelector } from "react-redux";
import Container from "../../../layout/Container";
import SVG from "../../../svg/SVG";
// import * as musicActions from "../../../store/actions/music";

const Controls = () => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  return (
    <Spacing vertical {...{ background: closest, all: 1, borderRadius: "0px 0px 4px 4px" }}>
      <Line />
      <Spacing horizontal {...{ top: 1 }}>
        <Navigation direction="previous" />
        <Spacing {...{ left: 2 }} />
        <Play />
        <Spacing {...{ left: 2 }} />
        <Navigation direction="next" />
      </Spacing>
    </Spacing>
  );
};

export default Controls;

const Navigation = ({ direction }) => {
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);

  return (
    <Spacing
      horizontal
      {...{
        hover: <NavigationHover {...{ direction }} />,
        hoverProps: { placement: "bottom" },
        transform: `scale(${direction === "next" ? "-" : ""}1, 1)`,
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

const Play = () => {
  const playing = useSelector(state => state.music.playing);

  return (
    <Spacing
      {...{
        hover: <PlayPauseHover />,
        hoverProps: { placement: "bottom" },
        children: playing ? <PauseButton /> : <PlayButton />,
      }}
    />
  );
};

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
