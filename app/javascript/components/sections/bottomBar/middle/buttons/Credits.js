import React from "react";
import PageButton from "./PageButton";

const Credits = () => {
  return <PageButton secondary {...{ pageId: 2, children: "Credits" }} />;
};

export default Credits;
