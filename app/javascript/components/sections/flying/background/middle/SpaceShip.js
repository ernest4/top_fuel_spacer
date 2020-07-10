import React from "react";
import Spacing from "../../../../layout/Spacing";
import { getComplementary, generateHSLA } from "../../../../utils/Color";
import SVG from "../../../../svg/SVG";

// NOTE: initial direction for ships is LEFTward
const SpaceShip = ({ size, box, circle, triangle, ...props }) => {
  const background = generateHSLA({ saturation: 65, lightness: 50, alpha: 1 });
  const complementary = getComplementary({ hsla: background });

  if (triangle)
    return (
      <Spacing {...props}>
        {/* bias transform, to point in the right initial direction  */}
        <Spacing {...{ transform: "rotate(30deg)" }}>
          <SVG {...{ name: "Triangle", size: Math.round(size / 10), fill: background }} />
        </Spacing>
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
        border: `2px solid ${complementary}`,
        boxShadow: box
          ? `inset -2px 0px 0px 0px ${background}, inset -4px 0px 0px 0px ${complementary}`
          : "",
        ...props,
      }}
    />
  );
};

export default SpaceShip;
