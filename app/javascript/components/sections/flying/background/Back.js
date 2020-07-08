import React, { useState } from "react";
import { useSelector } from "react-redux";
import Scroller from "./Scroller";
import backComponents from "./back/index";
import { getRandom } from "../../../utils/Array";

const Back = () => {
  const running = useSelector(state => state.game.running);

  const [nextComponent, setNextComponent] = useState(backComponents[1]);
  const [currentComponent, setCurrentComponent] = useState(backComponents[0]);

  const onScrolled = () => {
    console.log("animation end"); // TESTING

    setCurrentComponent(nextComponent);
    setNextComponent(getRandom(backComponents.slice(1, backComponents.length)));
  };

  return (
    <Scroller {...{ play: running, onScrolled, duration: 20, nextComponent, currentComponent }} />
  );
};

export default Back;
