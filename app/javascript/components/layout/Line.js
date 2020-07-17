import React from "react";
import Spacing from "./Spacing";
import useTheme from "../hooks/useTheme";

const Line = ({ size, vertical, primary, ...props }) => {
  const { primary: primaryBackground, secondary: secondaryBackground } = useTheme();

  return (
    <Spacing
      {...{
        background: primary ? primaryBackground : secondaryBackground,
        height: vertical ? "auto" : `${size || 1}px`,
        width: vertical ? `${size || 1}px` : "100%",
        ...props,
      }}
    />
  );
};

export default Line;
