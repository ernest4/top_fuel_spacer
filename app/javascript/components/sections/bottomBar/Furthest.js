import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { useSelector } from "react-redux";

// TODO: this should only be displayed when a section is selected (or the height of it migth change from low to high)
const Furthest = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const furthest = useSelector(state => state.theme.themes[currentThemeId]?.color.furthest);

  const selectedSection = {}; // TODO: from redux
  // const selectedSection = false;

  if (!selectedSection) return null;

  return (
    <Spacing
      {...{
        width: "100%",
        background: furthest.replace(/, 1\)/, ", 0.95)"),
        position: "absolute",
        absoluteLeft: `${14 * SPACING}px`,
        absoluteBottom: "0px",
        transform: "skewX(-30deg)",
        height: `${20 * SPACING}px`, // TODO: bit hight? will see how it looks with buttons, might need to be lowered
        borderRadius: "100px 0px 0px 0px",
        z: -1,
      }}
    />
  );
};

export default Furthest;
