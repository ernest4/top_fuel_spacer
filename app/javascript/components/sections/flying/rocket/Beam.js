import React from "react";
import Spacing from "../../../layout/Spacing";

const Beam = ({ background, intensityRatio, ...props }) => {
  return (
    <Spacing
      {...{
        position: "absolute",
        absoluteTop: "33px",
        width: "100%",
        // height: `${intensity * SPACING}px`,
        height: `${intensityRatio * 33}vh`,
        background: `linear-gradient(45deg, transparent , ${
          background ? background : `hsla(200, 75%, 58%, ${intensityRatio})`
        })`,
        ...props,
      }}
    />
  );
};

export default Beam;
