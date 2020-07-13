import React from "react";
import { useSelector } from "react-redux";
import Text from "../../layout/Text";
import Spacing from "../../layout/Spacing";
import Card from "../../layout/Card";

const RocketName = () => {
  const name = useSelector(state => state.rocket.name);

  return (
    <Spacing center all={3} hover={<Hover />} pointer>
      <Text children={name} />
    </Spacing>
  );
};

export default RocketName;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Rocket Name",
          subtitles: ["work in progress (wip)"],
        },
        body: "Click to change the name of your rocket.",
        footer: "This is fine.",
      }}
    />
  );
};
