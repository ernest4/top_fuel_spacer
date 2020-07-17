import React from "react";
import Card from "../../../layout/Card";
import Progress from "./Progress";

const TotalProgress = ({ reducerName, itemsLength: required, doneCount: completed }) => {
  return (
    <Card
      {...{
        primary: completed === required,
        header: {
          subtitles: [
            "Total Progress",
            `${completed}/${required}`,
            `${Math.round((completed / required) * 100)}%`,
          ],
        },
        body: `Progress for all the ${reducerName}.`,
        footer: <Progress {...{ required, completed }} />,
      }}
    />
  );
};

export default TotalProgress;
