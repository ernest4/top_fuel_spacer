import React from "react";
import Spacing from "../../layout/Spacing";
import Rocket from "./Rocket";
import Booster from "./launchSequence/Booster";
import LaunchOrchestrator from "./launchSequence/LaunchOrchestrator";
import LeftSupportPlatform from "./launchSequence/LeftSupportPlatform";
import RightSupportPlatform from "./launchSequence/RightSupportPlatform";
import Ground from "./launchSequence/Ground";

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
      <LaunchOrchestrator />
    </Spacing>
  );
};

export default LaunchSequence;
