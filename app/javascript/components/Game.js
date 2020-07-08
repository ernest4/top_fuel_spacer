import React, { useEffect } from "react";
import Debug from "./Debug";
import Spacing from "./layout/Spacing";
import Flying from "./sections/Flying";
import AntFarm from "./sections/AntFarm";
import Info from "./sections/Info";
import TopBar from "./sections/TopBar";
import BottomBar from "./sections/BottomBar";
import Divider from "./sections/Divider";

const Game = ({ debug, ...props }) => {
  // TODO: need better - in game, alert with link to settngs.
  //   useEffect(() => {
  //     alert(`NOTE: this is a resource intensive game. We advise closing all other browser tabs and applications before playing this game.

  // If performance is still an issue, check out the settings section on the right for more performance options.
  //     `);
  //   }, []);

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
      {debug && <Debug {...props} />}
    </div>
  );
};

export default Game;
