import React from "react";
import Spacing from "../layout/Spacing";
import Container from "../layout/Container";
import { useSelector } from "react-redux";
import Text from "../layout/Text";

const Button = ({
  primary: primaryButton,
  secondary: secondaryButton,
  tertiary: tertiaryButton,
  small,
  medium,
  large,
  right,
  children,
  ...props
}) => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const secondary = useSelector(state => state.theme.themes[currentThemeId].color.secondary);

  // TODO: onHover, change style !
  const onMouseOver = () => {
    /* background / border color change wip */
  };

  return (
    <Spacing
      {...{
        ...getSize({ small, medium, large }),
        transform: `skew(${right ? "-" : ""}30deg, 0deg)`,
        border: `1px solid ${secondary}`,
        borderRadius: "8px",
        borderWidth: "1px 1px 1px 1px",
        children: getChildren({ children, right, small, medium, large }),
        ...props,
      }}
    />
  );

  // return (
  //   <Container
  //     pointer
  //     border
  //     {...{ transform: right ? `skewX(-30deg)` : transform, onMouseOver, right, ...props }}
  //   />
  // );
};

export default Button;

const getSize = ({ small, medium, large }) => {
  if (small) return { all: 0.5, left: 1, right: 1 };
  if (large) return { all: 2, left: 4, right: 4 };

  // default is medium
  return { all: 1, left: 2, right: 2 };
};

const getChildren = ({ children, right, small: extraSmall, medium, large }) => {
  if (typeof children !== "string") return children;

  return (
    <Text
      {...{
        extraSmall,
        medium,
        large,
        transform: `skew(${right ? "" : "-"}30deg, 0deg)`,
        children,
      }}
    />
  );
};
