import React from "react";
import Button from "../../misc/Button";
import Container from "../../layout/Container";

const Patreon = () => {
  return (
    <Button
      tertiary
      small
      {...{
        interactiveHover: <Hover />,
        hoverProps: { placement: "bottom", followCursor: false },
        children: `Patreon`,
      }}
    />
  );
};

export default Patreon;

const Hover = () => {
  return (
    <Container vertical right border>
      WIP
      {/* <Button
        right
        small
        tertiary
        {...{ link: "https://trello.com/b/lEMbH9W8/top-fuel-spacer", children: "Trello" }}
      /> */}
    </Container>
  );
};
