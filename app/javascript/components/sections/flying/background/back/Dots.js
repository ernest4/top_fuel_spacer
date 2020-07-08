import React, { memo, useMemo } from "react";
import { generateColor } from "../../../../utils/Color";
import styled from "styled-components";
import { getRandomNumber } from "../../../../utils/Array";
import { parseNumberUnit } from "../../../../utils/Props";
import Spacing from "../../../../layout/Spacing";

// TODO: need to optimize this!! might just memo everything....??
// NOTE: memo is also needed because the scroller rerenders this component so if random every time
// the Dots jump around in position!!!

const generateBoxShadowDots = ({ count, randomColor, maxWith, maxHeight }) => {
  const { number: maxWithNumber, unit: maxWithUnit } = parseNumberUnit(maxWith || "33vw");
  const { number: maxHeightNumber, unit: maxHeightUnit } = parseNumberUnit(maxHeight || "100vh");

  return Array.from(Array(count))
    .map(
      i =>
        `${getRandomNumber() * maxWithNumber}${maxWithUnit} ${
          getRandomNumber() * maxHeightNumber
        }${maxHeightUnit} ${randomColor ? generateColor() : "white"}`
    )
    .join(",");
};

const Dots = ({ size, count, randomColor, maxWith, maxHeight, square, ...props }) => {
  const boxShadow = useMemo(
    () => generateBoxShadowDots({ count: count || 100, randomColor, maxWith, maxHeight }),
    [count, randomColor, maxWith, maxHeight]
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
