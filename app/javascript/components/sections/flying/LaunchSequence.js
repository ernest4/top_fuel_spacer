import React from "react";
import Spacing from "../../layout/Spacing";
import Rocket from "./Rocket";

const LaunchSequence = () => {
  return (
    <Spacing>
      <LeftSupportPlatform />
      <Rocket />
      <Ground />
    </Spacing>
  );
};

export default LaunchSequence;

const LeftSupportPlatform = () => {
  return (
    <Spacing
      {...{
        background: "red",
        width: "50px",
        height: "33vh",
        position: "fixed",
        transform: "rotate(0deg)",
        transformOrigin: "bottom right",
        transition: "transform 5s",
      }}
    />
  );
};

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
