import React from "react";
import svgs from "./index";
import { useSelector } from "react-redux";

const SCALE = 8;

// TODO: add wrapper settings and controlls for the wrapped svg
const SVG = ({ name, size, width, height, fill }) => {
  const {
    theme: {
      color: { white },
    },
  } = useSelector(state => state.theme);

  const sizing = `${(size || 1) * SCALE}`;

  return svgs[name]({ fill: fill || white, width: width || sizing, height: height || sizing });
};

export default SVG;
