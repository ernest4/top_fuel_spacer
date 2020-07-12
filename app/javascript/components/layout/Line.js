import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

// TODO: vertical is buggy ???
const Line = ({ size, vertical, ...props }) => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const background = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);

  return (
    <Spacing
      {...{
        background,
        height: vertical ? "auto" : `${size || 1}px`,
        width: vertical ? `${size || 1}px` : "100%",
        ...props,
      }}
    />
  );
};

export default Line;
