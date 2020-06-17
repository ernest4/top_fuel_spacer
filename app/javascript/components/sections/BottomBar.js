import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import Morality from "./bottomBar/Morality";

const BottomBar = () => {
  const {
    theme: {
      color: { closest, furthest, secondary },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing
      horizontal
      {...{ background: closest, all: 1, position: "fixed", absoluteBottom: "0px", width: "100%" }}
    >
      <div>player avatar info</div>
      <Spacing {...{ width: "80%", right: 2 }}>
        <Morality />
      </Spacing>
    </Spacing>
  );
};

export default BottomBar;
