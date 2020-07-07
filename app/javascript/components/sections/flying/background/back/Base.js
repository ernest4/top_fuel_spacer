import React from "react";
import Spacing from "../../../../layout/Spacing";

const Base = ({ background, children }) => {
  return (
    <Spacing
      {...{ background: background || "transparent", width: "100%", height: "100vh", children }}
    />
  );
};

export default Base;
