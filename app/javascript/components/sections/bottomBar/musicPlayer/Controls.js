import React from "react";
import Spacing from "../../../layout/Spacing";
import Line from "../../../layout/Line";
import { useSelector } from "react-redux";
import Navigation from "./controls/Navigation";
import Play from "./controls/Play";
import Volume from "./controls/Volume";
// import * as musicActions from "../../../store/actions/music";

const Controls = () => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  return (
    <Spacing vertical {...{ background: closest, all: 1, borderRadius: "0px 0px 4px 4px" }}>
      <Line />
      <Spacing horizontal {...{ top: 1 }}>
        <Navigation direction="previous" />
        <Spacing {...{ left: 2 }} />
        <Play />
        <Spacing {...{ left: 2 }} />
        <Navigation direction="next" />
        <Spacing {...{ left: 2 }} />
        <Line vertical />
        <Spacing {...{ left: 2 }} />
        <Volume />
      </Spacing>
    </Spacing>
  );
};

export default Controls;
