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
  primary,
  children,
  header: defaultHeaderProps,
  customHeader,
  body,
  footer,
  background,
  split,
  noDivider,
  ...props
}) => {
  // NOTE: we dont use the 'children' directly...

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  const header = customHeader || <Title {...{ primary, ...defaultHeaderProps }} />;
  const bodyComponent = typeof body === "string" ? <Body text={body} /> : body;
  const footerComponent = typeof footer === "string" ? <Footer text={footer} /> : footer;

  const items = [header];

  if (body) {
    if (split) items.push(...bodyComponent);
    else {
      if (!noDivider) items.push(<Divider {...{ primary }} />);
      items.push(bodyComponent);
    }
  }

  if (footer) {
    if (split) items.push(footerComponent);
    else {
      if (!noDivider) items.push(<Divider {...{ primary }} />);
      items.push(footerComponent);
    }
  }

  return (
    <Container
      {...{
        background: background || closest,
        children: items.map((item, key) => <Spacing key={key} children={item} />),
        split,
        ...props,
      }}
    />
  );
};

export default Card;

const Divider = ({ primary }) => (
  <Spacing {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line {...{ primary }} /> }} />
);
