import React from "react";
import Debug from "./Debug";
import Spacing from "./layout/Spacing";
import * as gameActions from "./store/actions/game";
import { useSelector, useDispatch } from "react-redux";
import Text from "./layout/Text";

const Game = ({ debug }) => {
  const dispatch = useDispatch();

  const showUi = useSelector(state => state.showUi);

  return (
    <div>
      <Spacing horizontal background="yellow" onClick={() => dispatch(gameActions.showUI(!showUi))}>
        <Spacing background="orange">section 1: {showUi ? 1 : 2}</Spacing>
        <Spacing background="blue">
          <Text>
            spacing_test The quick brown fox jumps over the lazy dog. The quick brown fox jumped
            over the lazy dog.
          </Text>
        </Spacing>
        <Spacing background="red">section 2</Spacing>
        <Spacing background="cyan">section 3</Spacing>
      </Spacing>
      {debug && <Debug />}
    </div>
  );
};

export default Game;

const Section = ({ children }) => {
  return <div>{children}</div>;
};
