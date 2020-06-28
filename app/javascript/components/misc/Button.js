import React, { memo, useState } from "react";
import Spacing from "../layout/Spacing";
import Container from "../layout/Container";
import { useSelector } from "react-redux";
import Text from "../layout/Text";
import { setAlpha } from "../utils/Color";

const Button = ({ right, ...props }) => {
  const [hover, setHover] = useState(false);
  // TODO: extract this into const {primary, secondary, ...} = useTheme() hook? not the most efficient as it will listen to every color,
  // but on the other hand we dont expect theme to be updated live during gamplay (custom themes not withstadning).
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const _primary = useSelector(state => state.theme.themes[currentThemeId]?.color.primary);
  const _secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);
  const _white = useSelector(state => state.theme.themes[currentThemeId]?.color.white);
  const _danger = useSelector(state => state.theme.themes[currentThemeId]?.color.danger);
  const _fontDefault = useSelector(state => state.theme.themes[currentThemeId]?.color.fontDefault);
  const _muted = useSelector(state => state.theme.themes[currentThemeId]?.font.muted);

  const color = { _primary, _secondary, _danger, _white, _fontDefault, _muted };

  // TODO: onHover, change style !
  /* background / border color change wip */
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  return (
    <Spacing
      pointer
      {...{
        ...props,
        ...getBackground({ hover, color, ...props }),
        transform: `skew(${right ? "-" : ""}30deg, 0deg)`,
        border: `1px solid ${getBorderColor({ color, ...props })}`,
        borderRadius: "8px",
        borderWidth: "1px 1px 1px 1px",
        children: getChildren({ right, hover, ...props }),
        onMouseEnter,
        onMouseLeave,
        ...getSize(props),
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

export default memo(Button);

const getBackground = ({ primary, secondary, tertiary, danger, color, hover }) => {
  let background = "transparent";

  if (primary) background = setAlpha({ hsla: color._primary, alpha: hover ? 0.9 : 0.1 });
  if (secondary) background = setAlpha({ hsla: color._secondary, alpha: hover ? 0.9 : 0.1 });
  if (danger) background = setAlpha({ hsla: color._danger, alpha: hover ? 0.9 : 0.1 });

  // default tertiary, transparent
  return { background };
};

const getBorderColor = ({ primary, secondary, tertiary, danger, color, hover }) => {
  if (hover) return color._white;

  if (primary) return color._primary;
  if (secondary) return color._secondary;
  if (tertiary) return color._secondary;
  if (danger) return color._danger;

  // default tertiary, secondary
  return color._secondary;
};

const getChildren = ({
  right,
  small: extraSmall,
  children,
  primary,
  secondary,
  tertiary,
  danger,
  hover,
  ...props
}) => {
  if (typeof children !== "string") return children;

  const transform = `skew(${right ? "" : "-"}30deg, 0deg)`;

  return (
    <Text
      {...{
        extraSmall,
        transform,
        ...getColor({ primary, secondary, tertiary, danger, hover }),
        children,
        ...props,
      }}
    />
  );
};

const getColor = ({ primary, secondary, tertiary, danger, hover }) => {
  if (hover) return { white: true };

  if (primary) return { primary: true };
  if (secondary) return { secondary: true };
  if (tertiary) return { secondary: true };
  if (danger) return { danger: true };

  // default tertiary, secondary
  return { secondary: true };
};

const getSize = ({ small, medium, large }) => {
  if (small) return { all: 0.5, left: 1, right: 1 };
  if (large) return { all: 2, left: 4, right: 4 };

  // default is medium
  return { all: 1, left: 2, right: 2 };
};
