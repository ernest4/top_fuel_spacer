import React from "react";
import PageButton from "./PageButton";

const Info = () => {
  return <PageButton secondary {...{ pageId: 1, children: "Info" }} />;
};

export default Info;
