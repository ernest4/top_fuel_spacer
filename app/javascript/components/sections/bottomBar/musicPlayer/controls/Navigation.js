import React from "react";
import Container from "../../../../layout/Container";
import Text from "../../../../layout/Text";
import Spacing from "../../../../layout/Spacing";
import SVG from "../../../../svg/SVG";
import { useSelector } from "react-redux";

const Navigation = ({ direction }) => {
  const fontDefault = useSelector(state => state.theme.theme.color.fontDefault);

  return (
    <Spacing
      horizontal
      {...{
        hover: <NavigationHover {...{ direction }} />,
        hoverProps: { placement: "bottom" },
        transform: `scale(${direction === "next" ? "-" : ""}1, 1)`,
      }}
    >
      <Spacing
        {...{ borderRadius: "4px", background: fontDefault, all: 1, left: 0.5, right: 0.5 }}
      />
      <Spacing transform={`rotate(-90deg)`}>
        <SVG {...{ name: "Triangle", size: 3, fill: fontDefault }} />
      </Spacing>
    </Spacing>
  );
};

export default Navigation;

const NavigationHover = ({ direction }) => {
  return (
    <Container border>
      <Text extraSmall>
        <Text secondary extraSmall bold children="Skip" /> to{" "}
        <Text primary extraSmall bold children={direction} /> song.
      </Text>
    </Container>
  );
};
