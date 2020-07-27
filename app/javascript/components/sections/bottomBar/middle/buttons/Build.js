import React from "react";
import PageButton from "./PageButton";
import Button from "../../../../misc/Button";

const Build = () => {
  // Some kinda infinite rerender issue ?!?! the page appears but very slowly and tanks performance
  // return <PageButton primary {...{ pageId: 7, children: "Build" }} />; // TODO: DISABLE FOR NOW
  return <Button primary {...{ children: "Build" }} />; // TODO: placeholder
};

export default Build;
