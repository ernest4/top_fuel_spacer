import React from "react";
import { useSelector } from "react-redux";
import Scroller from "./Scroller";
import backComponents from "./back/index";

// exclude the 1st one (blue sky) from future random selection as you're already in space
const components = backComponents.slice(1, backComponents.length);

const Back = () => {
  const running = useSelector(state => state.game.running);

  return <Scroller {...{ play: running, components, initialComponent: backComponents[0] }} />;
};

export default Back;
