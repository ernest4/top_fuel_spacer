import React from "react";
import Spacing from "../../../../layout/Spacing";
import { getComplementary, generateHSLA } from "../../../../utils/Color";

const SpaceShip = ({ size, box, circle, triangle, ...props }) => {
  // TODO: square, circle, triangle

  const background = generateHSLA({ lightness: 50, alpha: 1 });

  return (
    <Spacing
      {...{
        background,
        width: `${size}px`,
        height: box ? `${size / 2}px` : `${size}px`,
        borderRadius: circle ? "100%" : "",
        transform: box ? "skew(-10deg, 0deg)" : "",
        border: `2px solid ${getComplementary({ hsla: background })}`,
        ...props,
      }}
    />
  );
};

export default SpaceShip;
