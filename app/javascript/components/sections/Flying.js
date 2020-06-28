import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import Button from "../misc/Button";
import * as gameActions from "../store/actions/game";
import Score from "./flying/Score";

const Flying = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const black = useSelector(state => state.theme.themes[currentThemeId]?.color.black);

  const running = useSelector(state => state.game.running);

  return (
    <Spacing
      horizontal
      {...{ justify: "center", height: "100vh", width: "100%", background: black }}
    >
      <LeftBar />
      <Spacing vertical {...{ justify: "flex-start" }}>
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

const LaunchButton = () => {
  const dispatch = useDispatch();

  const onLaunch = () => dispatch(gameActions.setRunning(true));

  return <Button primary large {...{ children: "Launch", onClick: onLaunch }} />;
};

const LeftBar = () => {
  return <Spacing {...{ position: "absolute", absoluteLeft: "0px" }}>left bar</Spacing>;
};

const Rocket = () => {
  return <Spacing {...{ height: "33vh", background: "green" }}>rocket</Spacing>;
};
