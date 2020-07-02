import React from "react";
import Spacing from "../../layout/Spacing";
import Rocket from "./Rocket";

const LaunchSequence = () => {
  return (
    <Spacing>
      <Rocket />
      <Ground />
    </Spacing>
  );
};

export default LaunchSequence;

const Ground = () => {
  return (
    <Spacing
      {...{
        background: "green",
        width: "32vw",
        position: "fixed",
        absoluteTop: "61vh",
        absoluteLeft: "0px",
        height: "100%",
      }}
    />
  );
};
