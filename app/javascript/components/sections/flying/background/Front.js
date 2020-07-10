import React from "react";
import Scroller from "./Scroller";
import { useSelector } from "react-redux";
import frontComponents from "./front/index";

const components = frontComponents.slice(1, frontComponents.length);

const Front = () => {
  const running = useSelector(state => state.game.running);

  // return <Scroller inOrded {...{ play: running, duration: 40, components }} />;
};

export default Front;
