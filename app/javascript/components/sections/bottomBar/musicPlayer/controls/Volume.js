import React from "react";
import Spacing, { SPACING } from "../../../../layout/Spacing";
import SVG from "../../../../svg/SVG";
import ProgressBar from "../../../../misc/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../../store/actions/music";

const Volume = () => {
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);

  return (
    <Spacing
      horizontal
      {...{
        interactiveHover: <VolumeHover />,
        hoverProps: { placement: "right", followCursor: false },
        // transform: `scale(${direction === "next" ? "-" : ""}1, 1)`,
      }}
    >
      <Spacing {...{ borderRadius: "4px", background: fontDefault, all: 0.1 }} />
      <Spacing transform={`rotate(-90deg)`}>
        <SVG {...{ name: "Triangle", size: 3, fill: fontDefault }} />
      </Spacing>
    </Spacing>
  );
};

export default Volume;

const VolumeHover = () => {
  const dispatch = useDispatch();
  const closest = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const volume = useSelector(state => state.music.volume);

  const onBarClick = ({ index }) => dispatch(musicActions.setVolume(index));

  return (
    <Spacing {...{ background: closest, all: 1, width: `${16 * SPACING}px`, borderRadius: "4px" }}>
      <ProgressBar
        {...{
          value: volume,
          range: 10,
          height: `${3 * SPACING}px`,
          barBackground: secondary,
          onClick: onBarClick,
        }}
      />
    </Spacing>
  );
};
