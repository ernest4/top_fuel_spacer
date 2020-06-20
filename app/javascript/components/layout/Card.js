import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";

// TODO: react memo?
const Card = ({ children, header, body, footer, right, fillColor }) => {
  const closest = useSelector(state => state.theme.theme.color.closest);

  return (
    <Container
      {...{
        fillColor: fillColor || closest,
        right,
        children: [header, body, footer].filter(component => component),
      }}
    />
  );
};

export default Card;
