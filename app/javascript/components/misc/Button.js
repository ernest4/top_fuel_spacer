import React from "react";
import Spacing from "../layout/Spacing";
import Container from "../layout/Container";
import { useSelector } from "react-redux";
import Text from "../layout/Text";

const Button = ({
  // primary: primaryButton,
  // secondary: secondaryButton,
  // tertiary: tertiaryButton,
  // small,
  // medium,
  // large,
  right,
  // children,
  ...props
}) => {
  // TODO: extract this into const {primary, secondary, ...} = useTheme() hook? not the most efficient as it will listen to every color,
  // but on the other hand we dont expect theme to be updated live during gamplay (custom themes not withstadning).
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const secondary = useSelector(state => state.theme.themes[currentThemeId].color.secondary);

  // TODO: onHover, change style !
  const onMouseOver = () => {
    /* background / border color change wip */
  };

  return (
    <Spacing
      pointer
      {...{
        ...props,
        ...getBackground(props),
        ...getSize(props),
        transform: `skew(${right ? "-" : ""}30deg, 0deg)`,
        border: `1px solid ${secondary}`,
        borderRadius: "8px",
        borderWidth: "1px 1px 1px 1px",
        children: getChildren({ right, ...props }),
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

const getBackground = ({ primary, secondary, tertiary, danger }) => {
  if (secondary) return { background: secondary };
  if (primary) return { background: primary };

  // default tertiary
  return { background: "transparent" };
};

const getSize = ({ small, medium, large }) => {
  if (small) return { all: 0.5, left: 1, right: 1 };
  if (large) return { all: 2, left: 4, right: 4 };

  // default is medium
  return { all: 1, left: 2, right: 2 };
};

const getChildren = ({
  children,
  right,
  small: extraSmall,
  medium,
  large,
  primary,
  secondary,
  tertiary,
  danger,
}) => {
  if (typeof children !== "string") return children;

  const transform = `skew(${right ? "" : "-"}30deg, 0deg)`;

  return (
    <Text
      {...{
        extraSmall,
        medium,
        large,
        transform,
        children,
        primary,
        secondary: secondary || tertiary || !primary || !danger,
        danger,
      }}
    />
  );
};
