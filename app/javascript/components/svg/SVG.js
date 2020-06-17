import React from "react";
import svgs from "./index";

// TODO: add wrapper settings and controlls for the wrapped svg
const SVG = ({ name }) => {
  return svgs[name];
};

export default SVG;
