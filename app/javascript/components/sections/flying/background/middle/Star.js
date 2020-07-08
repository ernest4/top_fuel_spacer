import React from "react";
import Planet from "./Planet";

const Star = ({ ...props }) => {
  return <Planet {...{ filter: "blur(4px)", ...props }} />;
};

export default Star;
