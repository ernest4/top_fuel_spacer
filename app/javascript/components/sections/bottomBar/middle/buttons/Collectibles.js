import React from "react";
import PageButton from "./PageButton";

const Collectibles = () => {
  return <PageButton secondary {...{ pageId: 5, children: "Collectibles" }} />;
};

export default Collectibles;
