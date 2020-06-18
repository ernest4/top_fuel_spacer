import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";

// TODO: react memo?
const Card = ({ children, header, body, footer, right, fillColor }) => {
  const closest = useSelector(state => state.theme.color.closest);

  // TODO: follow style [header(s) (name), body(s) (explanation), footer(s) (funny line)]

  return (
    <Container {...{ fillColor: fillColor || closest, right, children: [header, body, footer] }} />
  );
};

export default Card;
