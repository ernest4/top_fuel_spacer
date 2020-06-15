import React from "react";
import { useSelector } from "react-redux";
import Spacing from "./Spacing";

const Hover = ({ children, header, body, footer }) => {
  const {
    theme: {
      color: { secondary, furthest, closest },
    },
  } = useSelector(state => state.theme);

  // TODO: follow cookie clicker style, [header (name), body (explanation), footer (funny line)]
  return (
    <Spacing
      vertical
      {...{
        border: `2px solid ${secondary}`,
        boxShadow: `inset 0px 0px 0px 2px ${furthest}`,
        borderRadius: "4px",
        background: closest,
        all: 1,
        opacity: "0.9",
      }}
    >
      {header}
      <Divider />
      {body}
      {children}
      <Divider />
      {footer}
    </Spacing>
  );
};

export default Hover;

const Divider = () => {
  return <div>SPAAACE!</div>;
};
