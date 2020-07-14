import React from "react";
import RocketHead from "../../flying/rocket/Head";
import Card from "../../../layout/Card";

const Head = () => {
  return <RocketHead antFarm hover={<Hover />} />;
};

export default Head;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Misc",
          subtitles: ["work in progress (wip)"],
        },
        body:
          "You can access miscellaneous <s>options</s> and <p>settings</p> here. <space />(wip)",
        footer: "Lots of dials and knobs.",
      }}
    />
  );
};
