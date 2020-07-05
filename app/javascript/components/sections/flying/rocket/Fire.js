import React from "react";
import Particles from "./Particles";
import { useSelector } from "react-redux";

const Fire = () => {
  const running = useSelector(state => state.game.running);
  const fuel = useSelector(state => state.rocket.fuel);

  return running && fuel ? <Particles fire angle={180} /> : null;
};

export default Fire;
