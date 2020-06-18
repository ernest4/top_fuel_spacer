import React from "react";
import Debug from "./Debug";
import Spacing from "./layout/Spacing";
import Flying from "./sections/Flying";
import AntFarm from "./sections/AntFarm";
import Info from "./sections/Info";
import TopBar from "./sections/TopBar";
import BottomBar from "./sections/BottomBar";
import Divider from "./sections/Divider";

const Game = ({ debug }) => {
  return (
    <div>
      <Spacing>
        <TopBar />
        <Spacing horizontal>
          <Flying />
          <Divider />
          <AntFarm />
          <Divider />
          <Info />
        </Spacing>
        <BottomBar />
      </Spacing>
      {debug && <Debug />}
    </div>
  );
};

export default Game;
