import React from "react";
import Spacing from "../../../../layout/Spacing";

const Planet = ({ ...props }) => {
  return (
    <Spacing
      {...{
        background: "green",
        position: "absolute",
        borderRadius: "100%",
        width: "50px",
        height: "50px",
        ...props,
      }}
    />
  );
};

export default Planet;
