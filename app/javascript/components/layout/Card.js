import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";
import Spacing from "./Spacing";
import Line from "./Line";
import Title from "./pane/Title";
import Body from "./pane/Body";
import Footer from "./pane/Footer";

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

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  const header = customHeader || <Title {...defaultHeaderProps} />;
  const bodyComponent = typeof body === "string" ? <Body text={body} /> : body;
  const footerComponent = typeof footer === "string" ? <Footer text={footer} /> : footer;

  const items = [header];

  if (body) items.push(<Divider />, bodyComponent);
  if (footer) items.push(<Divider />, footerComponent);

  return (
    <Container
      {...{
        background: background || closest,
        children: items.map((item, key) => <Spacing key={key} children={item} />),
        ...props,
      }}
    />
  );
};

export default Card;

const Divider = () => <Spacing {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line /> }} />;
