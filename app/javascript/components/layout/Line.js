import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

const Line = ({ size }) => {
  const background = useSelector(state => state.theme.theme.color.secondary);

  return <Spacing {...{ background, height: `${size || 1}px`, width: "100%" }} />;
};

export default Line;
