import React from "react";
import Button from "../../misc/Button";
import { useSelector } from "react-redux";
import Container from "../../layout/Container";

const Development = () => {
  const version = useSelector(state => state.game.version);

  return (
    <Button
      right
      small
      tertiary
      {...{
        interactiveHover: <Hover />,
        hoverProps: { placement: "bottom", followCursor: false },
        children: `Version ${version}`,
      }}
    />
  );
};

export default Development;

const Hover = () => {
  return (
    <Container vertical right border>
      <Button
        right
        small
        tertiary
        {...{ link: "https://trello.com/b/lEMbH9W8/top-fuel-spacer", children: "Trello" }}
      />
    </Container>
  );
};
