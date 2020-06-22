import React, { useEffect } from "react";
import Spacing from "../../../layout/Spacing";
import Container from "../../../layout/Container";
import Text from "../../../layout/Text";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../store/actions/music";
// DANGER: react-intersection-observer consumes 30% CPU, never use it !!!!
// import { useInView } from "react-intersection-observer";

const DockButton = () => {
  const dispatch = useDispatch();
  const background = useSelector(state => state.theme.theme.color.fontDefault);

  const onDock = () => dispatch(musicActions.setDock(true));

  return (
    <Spacing horizontal pointer {...{ all: 1, right: 2, hover: <Hover />, onClick: onDock }}>
      <Spacing vertical center>
        <Spacing
          {...{
            transform: "skewX(-30deg)",
            all: 1,
            background: "transparent",
            borderRadius: `4px 4px 0px 0px`,
            border: `2px solid ${background}`,
            borderWidth: `2px 2px 0px 2px`,
          }}
        ></Spacing>
        <Spacing
          {...{
            transform: "skewX(30deg)",
            all: 1,
            background: "transparent",
            borderRadius: `0px 0px 4px 4px`,
            border: `2px solid ${background}`,
            borderWidth: `0px 2px 2px 2px`,
          }}
        ></Spacing>
      </Spacing>
    </Spacing>
  );
};

export default DockButton;

const Hover = () => {
  return (
    <Container border>
      <Text extraSmall>
        Click to dock the <Text primary extraSmall bold children="music player" /> back to{" "}
        <Text secondary extraSmall bold children="sidebar" />.
      </Text>
    </Container>
  );
};
