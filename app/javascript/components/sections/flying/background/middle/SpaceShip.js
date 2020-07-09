import React from "react";
import Spacing from "../../../../layout/Spacing";
import { getComplementary, generateHSLA } from "../../../../utils/Color";
import SVG from "../../../../svg/SVG";

const SpaceShip = ({ size, box, circle, triangle, ...props }) => {
  const background = generateHSLA({ saturation: 65, lightness: 50, alpha: 1 });

  if (triangle)
    return (
      <Spacing {...{ transform: "rotate(30deg)" }}>
        <SVG {...{ name: "Triangle", size: Math.round(size / 10), fill: background }} />
      </Spacing>
    );

  return (
    <Spacing
      {...{
        background,
        width: `${size}px`,
        height: box ? `${size / 2}px` : `${size}px`,
        borderRadius: circle ? "100%" : "",
        transform: box ? "skew(-15deg, 0deg)" : "",
        border: `2px solid ${getComplementary({ hsla: background })}`,
        ...props,
      }}
    />
  );
};

export default SpaceShip;
