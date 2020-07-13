import React from "react";
import Spacing from "../../../layout/Spacing";
import Card from "../../../layout/Card";

const Command = () => {
  return (
    <Spacing
      {...{
        background: "#e5ecf0",
        width: "100%",
        height: "100%",
        hover: <Hover />,
      }}
    >
      command
    </Spacing>
  );
};

export default Command;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Command",
          subtitles: ["work in progress (wip)"],
        },
        body: "Command the ship from here commander! (wip)",
        footer: "Now that I have one piece I want the second one!",
      }}
    />
  );
};
