import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

const Line = () => {
  const {
    theme: {
      color: { secondary: background },
    },
  } = useSelector(state => state.theme);

  return <Spacing {...{ background, height: "2px", width: "100%" }} />;
};

export default Line;
