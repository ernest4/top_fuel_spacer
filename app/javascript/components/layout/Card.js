import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";
import Line from "./Line";

const Card = ({ children, header, body, footer, right, fillColor }) => {
  const {
    theme: {
      color: { secondary, furthest, closest },
    },
  } = useSelector(state => state.theme);

  // TODO: follow style [header(s) (name), body(s) (explanation), footer(s) (funny line)]

  // const items = [...header, <Line />, ...body, <Line />, ...footer];
  // const items = [...header, ...body, ...footer];

  // return (
  //   <Container {...{ fillColor: fillColor || closest, right, items: [header, body, footer] }} />
  // );

  return (
    <Container {...{ fillColor: fillColor || closest, right, children: [header, body, footer] }} />
  );
};

export default Card;
