import React from "react";
import Scroller from "./Scroller";
import { useSelector } from "react-redux";
import middleComponents from "./middle/index";

// exclude the 1st one (on earth) from future random selection as you're already in space
const components = middleComponents.slice(1, middleComponents.length);

const Middle = () => {
  const running = useSelector(state => state.game.running);

  return (
    <Scroller
      {...{
        play: running,
        duration: 10,
        components,
        initialComponent: middleComponents[0],
        overflow: "hidden",
        height: "100vh",
      }}
    />
  );
};

export default Middle;
