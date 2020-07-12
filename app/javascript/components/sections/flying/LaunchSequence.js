import React from "react";
import Spacing from "../../layout/Spacing";
import Rocket from "./Rocket";
import Booster from "./launchSequence/Booster";
import LaunchOrchestrator from "./launchSequence/LaunchOrchestrator";
import LeftSupportPlatform from "./launchSequence/LeftSupportPlatform";
import RightSupportPlatform from "./launchSequence/RightSupportPlatform";
import Ground from "./launchSequence/Ground";
import { useSelector } from "react-redux";

const LaunchSequence = () => {
  const running = useSelector(state => state.game.running);

  if (running) return <Rocket />;

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
