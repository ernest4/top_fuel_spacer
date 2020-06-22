import React from "react";
import Spacing from "../../../../layout/Spacing";
import SVG from "../../../../svg/SVG";

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
  const closest = useSelector(state => state.theme.theme.color.closest);

  return <Spacing {...{ background: closest, all: 1 }}>{/* <ProgressBar /> */}</Spacing>;
};
