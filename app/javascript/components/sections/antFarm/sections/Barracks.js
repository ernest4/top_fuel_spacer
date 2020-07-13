import React from "react";
import Spacing from "../../../layout/Spacing";
import Card from "../../../layout/Card";

const Barracks = () => {
  return (
    <Spacing {...{ background: "#e5ecf0", width: "100%", height: "100%", hover: <Hover /> }}>
      Barracks
    </Spacing>
  );
};

export default Barracks;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Barracks",
          subtitles: ["work in progress (wip)"],
        },
        body: "Your soldiers are stationed and train here. (wip)",
        footer: "Teeeeen-hut!",
      }}
    />
  );
};
