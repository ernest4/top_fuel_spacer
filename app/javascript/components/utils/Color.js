import { getRandom } from "./Array";

export const setAlpha = ({ hsla, alpha }) => {
  return hsla?.replace(/, 1\)/, `, ${alpha})`);
};

export const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export const generateColor = () => `#${getRandom(HEX)}${getRandom(HEX)}${getRandom(HEX)}`;
