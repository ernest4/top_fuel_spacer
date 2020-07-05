import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import Score from "./flying/Score";
import Rocket from "./flying/Rocket";
import Itinerary from "./flying/Itinerary";
import Background from "./flying/Background";
import LaunchButton from "./flying/LaunchButton";
import LaunchSequence from "./flying/LaunchSequence";
import useTheme from "../hooks/useTheme";

const Flying = () => {
  const { black } = useTheme();

  const running = useSelector(state => state.game.running);

  return (
    <Spacing
      horizontal
      {...{ justify: "center", height: "100vh", width: "100%", background: black }}
    >
      <Background />
      {running && <Itinerary />}
      <Spacing vertical {...{ justify: "flex-start", position: "absolute" }}>
        <Spacing {...{ justify: "flex-start", height: "28vh", width: "188px" }}>
          <Spacing top={9} />
          {running ? <Score /> : <LaunchButton />}
        </Spacing>
        <LaunchSequence />
      </Spacing>
    </Spacing>
  );
};

export default Flying;
