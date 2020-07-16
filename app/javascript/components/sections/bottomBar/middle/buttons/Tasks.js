import React from "react";
import PageButton from "./PageButton";

const Tasks = () => {
  return <PageButton secondary {...{ pageId: 4, children: "Tasks" }} />;
};

export default Tasks;
