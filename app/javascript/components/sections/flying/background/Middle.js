import React from "react";
import Scroller from "./Scroller";
import { useSelector } from "react-redux";
import components from "./middle/index";

const Middle = () => {
  const running = useSelector(state => state.game.running);

  return <Scroller {...{ play: running, duration: 10, components }} />;
};

export default Middle;
