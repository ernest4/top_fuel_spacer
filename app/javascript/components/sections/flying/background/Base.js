import React from "react";
import Spacing from "../../../layout/Spacing";

const Base = ({ background, ...props }) => {
  return (
    <Spacing
      {...{ background: background || "transparent", width: "100%", height: "100vh", ...props }}
    />
  );
};

export default Base;
