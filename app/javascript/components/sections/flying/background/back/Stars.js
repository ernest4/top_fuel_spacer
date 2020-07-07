import React from "react";
import { getRandom } from "../../../../utils/Array";
import styled from "styled-components";

// TODO: need to optimize this. might just memo everything....
// NOTE: memo is also needed because the scroller rerenders this component so if random every time
// the stars jump around in position!!!

// TODO: HEX and generateColor can probs be extracted to general utils
const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateColor = () => `#${getRandom(HEX)}${getRandom(HEX)}${getRandom(HEX)}`;

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

const Stars = styled.div`
  position: absolute;
  width: ${({ size }) => `${size || 1}px`};
  height: ${({ size }) => `${size || 1}px`};
  box-shadow: ${({ count, randomColor }) => generateStars({ count: count || 100, randomColor })};
`;

export default Stars;
