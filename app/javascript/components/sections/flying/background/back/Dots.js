import React, { memo, useMemo } from "react";
import { generateRGB } from "../../../../utils/Color";
import { getRandomNumber } from "../../../../utils/Array";
import { parseNumberUnit } from "../../../../utils/Props";
import Spacing from "../../../../layout/Spacing";

// TODO: need to optimize this!! might just memo everything....??
// NOTE: memo is also needed because the scroller rerenders this component so if random every time
// the Dots jump around in position!!!

const generateBoxShadowDots = ({ count, randomColor, minLeft, minTop, maxLeft, maxTop }) => {
  const { number: minLeftNumber, unit: minLeftUnit } = parseNumberUnit(minLeft || "0vw");
  const { number: minTopNumber, unit: minTopUnit } = parseNumberUnit(minTop || "0vh");

  const { number: maxLeftNumber, unit: maxLeftUnit } = parseNumberUnit(maxLeft || "33vw");
  const { number: maxTopNumber, unit: maxTopUnit } = parseNumberUnit(maxTop || "100vh");

  return Array.from(Array(count))
    .map(
      i =>
        `${minLeftNumber + getRandomNumber() * (maxLeftNumber - minLeftNumber)}${maxLeftUnit} ${
          minTopNumber + getRandomNumber() * (maxTopNumber - minTopNumber)
        }${maxTopUnit} ${randomColor ? generateRGB() : "white"}`
    )
    .join(",");
};

const Dots = ({ size, count, randomColor, minLeft, minTop, maxLeft, maxTop, square, ...props }) => {
  const boxShadow = useMemo(
    () =>
      generateBoxShadowDots({
        count: count || 100,
        randomColor,
        minLeft,
        minTop,
        maxLeft,
        maxTop,
      }),
    [count, randomColor, minLeft, minTop, maxLeft, maxTop]
  );

  return (
    <Spacing
      {...{
        position: "absolute",
        borderRadius: square ? "none" : "100%",
        boxShadow,
        width: `${size || 1}px`,
        height: `${size || 1}px`,
        ...props,
      }}
    />
  );
};

export default Dots;

// TODO: bug. memo not stopping Dots from jumping??
