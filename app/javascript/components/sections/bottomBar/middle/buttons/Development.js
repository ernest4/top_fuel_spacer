import React from "react";
import Button from "../../../../misc/Button";
import PageButton from "./PageButton";

const Development = () => {
  return <PageButton secondary {...{ pageId: 3, children: "Development" }} />;
};

export default Development;
