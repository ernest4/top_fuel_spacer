import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";

const BottomBar = () => {
  const {
    theme: {
      color: { closest },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing
      horizontal
      {...{ background: closest, all: 1, position: "fixed", absoluteBottom: "0px", width: "100%" }}
    >
      <div>player avatar info</div>
      <MoralityBar />
    </Spacing>
  );
};

export default BottomBar;

// TODO: time to implement the commonly to be used bars component https://codepen.io/xgundam05/pen/ihDep
const MoralityBar = () => {
  return <div>paragon/ranegade bar</div>;
};
