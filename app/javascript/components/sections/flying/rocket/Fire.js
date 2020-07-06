import React, { memo } from "react";
import Particles from "./Particles";
import { useSelector } from "react-redux";
import Spacing from "../../../layout/Spacing";

const Fire = () => {
  const running = useSelector(state => state.game.running);
  const fuel = useSelector(state => state.rocket.fuel);

  if (!running) return null;

  return (
    fuel && (
      <Spacing {...{ position: "absolute", absoluteTop: "59vh", width: "50px", height: "50px" }}>
        <Particles fire duration={0.4} count={4} length={1.5} />
      </Spacing>
    )
  );
};

export default memo(Fire);
