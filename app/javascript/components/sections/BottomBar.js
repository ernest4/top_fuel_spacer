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
      BottomBar
    </Spacing>
  );
};

export default BottomBar;
