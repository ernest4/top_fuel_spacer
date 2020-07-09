import React from "react";
import Planet from "./Planet";

const Star = ({ ...props }) => {
  return (
    <Planet
      {...{
        filter: "blur(4px)",
        background: "hsla(53, 100%, 80%, 1)",
        boxShadow: "0px 0px 0px 8px white",
        ...props,
      }}
    />
  );
};

export default Star;
