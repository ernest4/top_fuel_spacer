import React from "react";
import Debug from "./Debug";

const Game = ({ debug }) => {
  return (
    <div>
      <div>Game here</div>
      {debug && <Debug />}
    </div>
  );
};

export default Game;
