import React from "react";
import Debug from "./Debug";
import Spacing from "./layout/Spacing";
// import * as gameActions from "./store/actions/game";
import { useSelector, useDispatch } from "react-redux";
import Flying from "./sections/Flying";
import AntFarm from "./sections/AntFarm";
import Info from "./sections/Info";
import TopBar from "./sections/TopBar";
import BottomBar from "./sections/BottomBar";

const Game = ({ debug }) => {
  // const dispatch = useDispatch();

  const {
    theme: {
      color: { black },
    },
  } = useSelector(state => state.theme);

  return (
    <div>
      <Spacing>
        <TopBar />
        <Spacing horizontal>
          <Flying />
          <Spacing {...{ width: "5%", height: "100vh", background: black }} />
          <AntFarm />
          <Spacing {...{ width: "5%", height: "100vh", background: black }} />
          <Info />
        </Spacing>
        <BottomBar />
      </Spacing>
      {debug && <Debug />}
    </div>
  );
};

export default Game;
