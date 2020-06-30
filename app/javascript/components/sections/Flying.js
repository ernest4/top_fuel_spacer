import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import Button from "../misc/Button";
import * as gameActions from "../store/actions/game";
import Score from "./flying/Score";
import Rocket from "./flying/Rocket";
import Itinerary from "./flying/Itinerary";
import Background from "./flying/Background";

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
          {running ? <Score /> : <LaunchButton />}
        </Spacing>
        <Rocket />
        <div /> {/* TODO: ... will be the ground initially */}
      </Spacing>
    </Spacing>
  );
};

export default Flying;

// TODO: add stripes animation to draw more attention!
const LaunchButton = () => {
  const dispatch = useDispatch();

  const onLaunch = () => dispatch(gameActions.setRunning(true));

  return <Button primary large {...{ children: "Launch", onClick: onLaunch }} />;
};
