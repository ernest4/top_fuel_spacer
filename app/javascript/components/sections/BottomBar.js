import React from "react";
import Spacing from "../layout/Spacing";
import Closest from "./bottomBar/Closest";
import Middle from "./bottomBar/Middle";
import Furthest from "./bottomBar/Furthest";

const BottomBar = () => {
  return (
    <Spacing vertical {...{ position: "fixed", absoluteBottom: "0px", width: "100%" }}>
      <Furthest />
      <Middle />
      <Closest />
    </Spacing>
  );
};

export default BottomBar;
