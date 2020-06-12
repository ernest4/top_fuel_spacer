import React from "react";
import Debug from "./Debug";
import Spacing from "./layout/Spacing";
// import * as gameActions from "./store/actions/game";
import { useSelector, useDispatch } from "react-redux";
import Text from "./layout/Text";

const Game = ({ debug }) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <Spacing>
        <TopBar />
        <Spacing horizontal>
          <div>left most section</div>
          <div>left Section</div>
          <div>divider</div>
          <div>middle Section</div>
          <div>divider</div>
          <div>right Section</div>
        </Spacing>
        <div>bottom section</div>
      </Spacing>
      {debug && <Debug />}
    </div>
  );
};

export default Game;

const Section = ({ children }) => {
  return <div>{children}</div>;
};

const TopBar = () => {
  const version = useSelector(state => state.game.version);

  return (
    <Spacing horizontal>
      <Spacing horizontal>
        <Text extraSmall>Top Fuel Spacer ©</Text>
        <Text extraSmall>OutlierStudio</Text>
        <Text extraSmall>{new Date().getFullYear()}</Text>
        <Text extraSmall>Twitter</Text>
        <Text extraSmall>Patreon</Text>
        <Text extraSmall>Luminaries</Text>
      </Spacing>
      <Text extraSmall>Version {version}</Text>
    </Spacing>
  );
};
