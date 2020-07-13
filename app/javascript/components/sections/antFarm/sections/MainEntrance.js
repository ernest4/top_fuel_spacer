import React from "react";
import Spacing from "../../../layout/Spacing";
import Card from "../../../layout/Card";

const MainEntrance = () => {
  return (
    <Spacing
      {...{
        background: "#e5ecf0",
        width: "100%",
        height: "100%",
        hover: <Hover />,
      }}
    >
      MainEntrance
    </Spacing>
  );
};

export default MainEntrance;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Main Entrance",
          subtitles: ["work in progress (wip)"],
        },
        body:
          "The only way on or off the rocket. Your armed forces will make a stand against the pirates here! (wip)",
        footer: "In one door and out the...same door.",
      }}
    />
  );
};
