import { getRandom } from "./Array";

export const setAlpha = ({ hsla, alpha }) => hsla?.replace(/, 1\)/, `, ${alpha})`);

export const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export const generateRGB = () => `#${getRandom(HEX)}${getRandom(HEX)}${getRandom(HEX)}`;

export const generateHSLA = ({
  hue: hueOverride,
  saturation: saturationOverride,
  lightness: lightnessOverride,
  alpha: alphaOverride,
}) => {
  const seed = Math.random();

  const hue = hueOverride || Math.round(seed * 360);
  const saturation = saturationOverride || Math.round(seed * 100);
  const lightness = lightnessOverride || Math.round(seed * 100);
  const alpha = alphaOverride || seed;

  return stringifyHSLA({ hue, saturation, lightness, alpha });
};

export const getComplementary = ({ hsla }) => {
  const { hue, ...rest } = parseHSLA(hsla);

  // NOTE: +180 degree hue shift will give you complementary on a 360 color wheel.
  // NOTE: the browser will cycle over when value is over 360. 360 + 180 = 540  <- is fine !
  return stringifyHSLA({ hue: hue + 180, ...rest });
};

export const parseHSLA = hsla => {
  const [hue, saturation, lightness, alpha] = hsla
    .replace("hsla(", "")
    .split(",")
    .map(value => parseInt(value));

  return { hue, saturation, lightness, alpha };
};

export const stringifyHSLA = ({ hue, saturation, lightness, alpha }) => {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
};
