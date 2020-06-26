import React from "react";
import svgs from "./index";
import { useSelector } from "react-redux";

const SCALE = 8;

const SVG = ({ name, size, width, height, fill }) => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  // const white = useSelector(state => state.theme.themes[currentThemeId]?.color.white);
  const fontDefault = useSelector(state => state.theme.themes[currentThemeId]?.color.fontDefault);

  const sizing = `${(size || 1) * SCALE}`;

  return svgs[name]({
    fill: fill || fontDefault,
    width: width || sizing,
    height: height || sizing,
  });
};

export default SVG;
