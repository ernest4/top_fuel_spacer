import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";
import Line from "./Line";

const Card = ({ children, headerItems, bodyItems, footerItems, right, fillColor }) => {
  const {
    theme: {
      color: { secondary, furthest, closest },
    },
  } = useSelector(state => state.theme);

  // TODO: follow style [header(s) (name), body(s) (explanation), footer(s) (funny line)]

  const items = [...headerItems, <Line />, ...bodyItems, <Line />, ...footerItems];

  return <Container {...{ fillColor: fillColor || closest, right, items }} />;
};

export default Card;
