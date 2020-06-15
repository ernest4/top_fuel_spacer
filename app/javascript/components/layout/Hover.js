import React from "react";
import { useSelector } from "react-redux";
import Spacing from "./Spacing";
import Container from "./Container";

const Hover = ({ children, header, body, footer, right }) => {
  const {
    theme: {
      color: { secondary, furthest, closest },
    },
  } = useSelector(state => state.theme);

  // TODO: follow cookie clicker style, [header (name), body (explanation), footer (funny line)]

  // return (
  //   <Container {...{ fillColor: closest, right }}>
  //     {header}
  //     <Divider />
  //     {body}
  //     {children}
  //     <Divider />
  //     {footer}
  //   </Container>
  // );

  return (
    <Container
      {...{
        fillColor: closest,
        right,
        items: [header, <Divider />, body, <Divider />, footer],
      }}
    ></Container>
  );
};

export default Hover;

const Divider = () => {
  return <div>SPAAACE!</div>;
};
