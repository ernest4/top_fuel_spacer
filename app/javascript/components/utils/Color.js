export const setAlpha = ({ hsla, alpha }) => {
  return hsla?.replace(/, 1\)/, `, ${alpha})`);
};
