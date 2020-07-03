import React from "react";
import Spacing from "../../layout/Spacing";
import Rocket from "./Rocket";
import Booster from "./launchSequence/Booster";

// TODO: the launch button will begin launch sequence.
// Once launch sequence is complete, then the game state will be set to 'running'.
// Till then, launch sequence is cancellable via page refresh.
const LaunchSequence = () => {
  return (
    <Spacing>
      <LeftSupportPlatform />
      <Booster />
      <Rocket />
      <Booster right />
      <RightSupportPlatform /> {/* TODO: add astronaut in a little car */}
      <Ground />
    </Spacing>
  );
};

export default LaunchSequence;

const LeftSupportPlatform = () => {
  // TODO: add 2 talking astronauts

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

const RightSupportPlatform = () => {
  // TODO: add 2 talking astronauts

  return (
    <Spacing
      {...{
        background: "pink",
        width: "50px",
        height: "16vh",
        position: "absolute",
        // absoluteBottom: "39vh",
        absoluteLeft: "138px",
        absoluteBottom: "0px",
        // transform: "rotate(0deg)",
        // transformOrigin: "bottom right",
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
