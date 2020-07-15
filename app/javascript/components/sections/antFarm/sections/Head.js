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
        header: { title: "Misc" },
        body: "You can access miscellaneous <s>options</s> and <p>settings</p> here. <space />",
        footer: "Lots of dials and knobs.",
      }}
    />
  );
};
