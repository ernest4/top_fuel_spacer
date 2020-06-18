import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

const Line = () => {
  const background = useSelector(state => state.theme.theme.color.secondary);

  return <Spacing {...{ background, height: "2px", width: "100%" }} />;
};

export default Line;
