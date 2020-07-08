import React, { memo, useMemo } from "react";
import { generateColor } from "../../../../utils/Color";
import styled from "styled-components";

// TODO: need to optimize this!! might just memo everything....??
// NOTE: memo is also needed because the scroller rerenders this component so if random every time
// the stars jump around in position!!!

const generateStars = ({ count, randomColor }) => {
  return Array.from(Array(count))
    .map(
      i =>
        `${Math.random() * 33}vw ${Math.random() * 100}vh ${
          randomColor ? generateColor() : "white"
        }`
    )
    .join(",");
};

const Stars = ({ size, count, randomColor, ...props }) => {
  const boxShadow = useMemo(() => generateStars({ count: count || 100, randomColor }), [
    count,
    randomColor,
  ]);

  return (
    <Container {...{ boxShadow, width: `${size || 1}px`, height: `${size || 1}px`, ...props }} />
  );
};

export default Stars;

const Container = styled.div`
  position: absolute;

  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;

// const Stars = styled.div`
//   position: absolute;
//   width: ${({ size }) => `${size || 1}px`};
//   height: ${({ size }) => `${size || 1}px`};
//   box-shadow: ${({ count, randomColor }) =>
//     useMemo(() => generateStars({ count: count || 100, randomColor }), [count, randomColor])};
// `;

// TODO: bug. memo not stopping stars from jumping??
