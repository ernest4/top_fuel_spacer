import React from "react";
import Spacing from "../../../../layout/Spacing";
import Container from "../../../../layout/Container";
import Text from "../../../../layout/Text";
import SVG from "../../../../svg/SVG";

const NoteButton = () => {
  return (
    <Spacing pointer center {...{ hover: <Hover />, children: <SVG {...{ name: "Note", size: 6 }} /> }} />
  );
};

export default NoteButton;

const Hover = () => {
  return (
    <Container border>
      <Text extraSmall>
        Click and drag the <Text primary extraSmall bold children="music player" />.
      </Text>
    </Container>
  );
};
