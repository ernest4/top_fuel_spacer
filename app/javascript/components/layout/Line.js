import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

const Line = ({ size, vertical }) => {
  const background = useSelector(state => state.theme.theme.color.secondary);

  return (
    <Spacing
      {...{
        background,
        height: vertical ? "auto" : `${size || 1}px`,
        width: vertical ? `${size || 1}px` : "100%",
      }}
    />
  );
};

export default Line;
