import React from "react";
import Spacing from "../../../layout/Spacing";
import Card from "../../../layout/Card";

const LifeSupport = () => {
  return (
    <Spacing {...{ background: "#e5ecf0", width: "100%", height: "100%", hover: <Hover /> }}>
      LifeSupport
    </Spacing>
  );
};

export default LifeSupport;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Life Support",
          subtitles: ["work in progress (wip)"],
        },
        body:
          "This is your garden of Eden. Keeps everyone alive with fresh air and a micro ecosystem. (wip)",
        footer: "(Snif) Ahhh! Smells just like home.",
      }}
    />
  );
};
