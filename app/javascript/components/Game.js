import React from "react";
import Debug from "./Debug";
import Spacing from "./layout/Spacing";
import * as gameActions from "./store/actions/game";
import { useSelector, useDispatch } from "react-redux";

const Game = ({ debug }) => {
  const dispatch = useDispatch();

  const showUi = useSelector(state => state.showUi);

  return (
    <div>
      <Spacing horizontal onClick={() => dispatch(gameActions.showUI(!showUi))}>
        <Section>section 1: {showUi ? 1 : 2}</Section>
        <Section>section 2</Section>
        <Section>section 3</Section>
      </Spacing>
      {debug && <Debug />}
    </div>
  );
};

export default Game;

const Section = ({ children }) => {
  return <div>{children}</div>;
};
