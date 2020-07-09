import React from "react";
import Spacing from "../../../../layout/Spacing";

const SpaceShip = ({ size, square, circle, triangle, ...props }) => {
  // TODO: square, circle, triangle
  // TODO: borders for all

  return (
    <Spacing
      {...{
        background: "pink",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: circle ? "100%" : "",
        ...props,
      }}
    />
  );
};

export default SpaceShip;
