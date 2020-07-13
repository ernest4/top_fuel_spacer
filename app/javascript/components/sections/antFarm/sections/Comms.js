import React from "react";
import Spacing from "../../../layout/Spacing";
import Card from "../../../layout/Card";
import { useSelector } from "react-redux";

const Comms = () => {
  return (
    <Spacing
      {...{
        background: "#e5ecf0",
        width: "100%",
        height: "100%",
        hover: <Hover />,
      }}
    >
      coms
    </Spacing>
  );
};

export default Comms;

const Hover = () => {
  const name = useSelector(state => state.player.name);

  return (
    <Card
      border
      {...{
        header: {
          title: "Comms",
          subtitles: ["work in progress (wip)"],
        },
        body: "This is your communications hub. (wip)",
        footer: `This is Ground Control to Commander ${name}. You've really made the grade`,
      }}
    />
  );
};
