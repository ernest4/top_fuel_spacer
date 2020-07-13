import React from "react";
import Spacing from "../../../layout/Spacing";
import Card from "../../../layout/Card";

const Cargo = () => {
  return (
    <Spacing {...{ background: "#e5ecf0", width: "100%", height: "100%", hover: <Hover /> }}>
      Cargo
    </Spacing>
  );
};

export default Cargo;

const Hover = () => {
  return (
    <Card
      border
      {...{
        header: {
          title: "Cargo",
          subtitles: ["work in progress (wip)"],
        },
        body: "All provisions, equipment and other stuff is kept here. Keep it safe from pirates! (wip)",
        footer: "This rat is packin'.",
      }}
    />
  );
};
