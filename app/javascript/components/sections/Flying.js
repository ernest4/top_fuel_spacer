import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import Score from "./flying/Score";
import Rocket from "./flying/Rocket";
import Itinerary from "./flying/Itinerary";
import Background from "./flying/Background";
import LaunchButton from "./flying/LaunchButton";

const Flying = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const black = useSelector(state => state.theme.themes[currentThemeId]?.color.black);

  const running = useSelector(state => state.game.running);

  return (
    <Spacing
      horizontal
      {...{ justify: "center", height: "100vh", width: "100%", background: black }}
    >
      <Background />
      <Itinerary />
      <Spacing vertical {...{ justify: "flex-start", position: "absolute" }}>
        <Spacing {...{ justify: "flex-start", height: "28vh" }}>
          <Spacing top={9} />
          {running ? (
            <>
              <Score />
              {/* For maintaining dom positoin since Score is position fixed */}
              <Spacing {...{ width: "188px" }} />{" "}
            </>
          ) : (
            <LaunchButton />
          )}
        </Spacing>
        <Rocket />
        <div /> {/* TODO: ... will be the ground before launching */}
      </Spacing>
    </Spacing>
  );
};

export default Flying;
