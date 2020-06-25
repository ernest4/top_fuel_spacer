import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { useSelector } from "react-redux";

// TODO: this should only be displayed when a section is selected (or the height of it migth change from low to high)
const Furthest = () => {
  const furthest = useSelector(state => state.theme.theme.color.furthest);

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
        height: `${20 * SPACING}px`,
        borderRadius: "100px 0px 0px 0px",
        z: -1,
      }}
    >
      furthest
    </Spacing>
  );
};

export default Furthest;
