import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";
import Spacing from "./Spacing";
import Line from "./Line";
import Title from "./pane/Title";
import { head } from "lodash";

// TODO: react memo?
const Card = ({
  children,
  header: defaultHeaderProps,
  customHeader,
  body,
  footer,
  background,
  ...props
}) => {
  // NOTE: we dont use the 'children' directly...

  const closest = useSelector(state => state.theme.theme.color.closest);

  const header = customHeader || <Title {...defaultHeaderProps} />;

  const items = [header];

  if (body) items.push(<Divider />, body);
  if (footer) items.push(<Divider />, footer);

  return (
    <Container
      {...{
        background: background || closest,
        // children: [customHeader, header, body, footer].filter(component => component),
        children: items,
        ...props,
      }}
    />
  );
};

export default Card;

const Divider = () => <Spacing {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line /> }} />;
