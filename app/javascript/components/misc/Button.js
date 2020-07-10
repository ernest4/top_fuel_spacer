import React, { memo, useState } from "react";
// import Spacing from "../layout/Spacing";
import Container from "../layout/Container";
import { useSelector } from "react-redux";
import Text from "../layout/Text";
// import { setAlpha } from "../utils/Color";
import { css } from "styled-components";

const Button = ({ right, innerProps, link, ...props }) => {
  const [hover, setHover] = useState(false);
  // TODO: extract this into const {primary, secondary, ...} = useTheme() hook? not the most efficient as it will listen to every color,
  // but on the other hand we dont expect theme to be updated live during gamplay (custom themes not withstadning).
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const _closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);
  const _primary = useSelector(state => state.theme.themes[currentThemeId]?.color.primary);
  const _secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);
  const _white = useSelector(state => state.theme.themes[currentThemeId]?.color.white);
  const _danger = useSelector(state => state.theme.themes[currentThemeId]?.color.danger);
  const _fontDefault = useSelector(state => state.theme.themes[currentThemeId]?.color.fontDefault);
  const _muted = useSelector(state => state.theme.themes[currentThemeId]?.font.muted);

  const color = { _closest, _primary, _secondary, _danger, _white, _fontDefault, _muted };

  // TODO: onHover, change style !
  /* background / border color change wip */
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  // return (
  //   <Spacing
  //     pointer
  //     {...{
  //       ...props,
  //       ...getBackground({ hover, color, ...props }),
  //       transform: `skew(${right ? "-" : ""}30deg, 0deg)`,
  //       borderRadius: "8px",
  //       border: `solid ${getBorderColor({ hover, color, ...props })}`,
  //       ...getBorderWidth({ right, ...props }),
  //       children: getChildren({ right, hover, ...props }),
  //       onMouseEnter,
  //       onMouseLeave,
  //       ...getSize(props),
  //     }}
  //   />
  // );

  const onLink = () => window.open(link, "_blank");

  return (
    <Container
      pointer
      {...{
        onClick: link ? onLink : null,
        ...props,
        ...getBackground({ hover, color, ...props }),
        transform: `skew(${right ? "-" : ""}30deg, 0deg)`,
        borderRadius: "8px",
        border: `solid ${getBorderColor({ hover, color, ...props })}`,
        ...getBorderWidth({ right, ...props }),
        children: getChildren({ right, hover, ...props }),
        onMouseEnter,
        onMouseLeave,
        all: props.tertiary ? 0 : 0.5,
        height: "fit-content",
        transition: "all 0.2s",
        css: !props.tertiary
          ? css`
              &:hover {
                border-width: 6px;
                padding: 0px;
                border-color: ${getBorderColor({ color, ...props })};
              }
            `
          : "",
        innerProps: {
          borderRadius: "4px",
          ...getSize(props),
          css: css`
            &:hover {
              border-radius: 0px;
            }
          `,
          ...innerProps,
        },
      }}
    />
  );
};

export default memo(Button);

const getBackground = ({ primary, secondary, tertiary, danger, color, hover }) => {
  let background = "transparent";

  // if (primary) background = setAlpha({ hsla: color._primary, alpha: hover ? 0.75 : 0.1 });
  // if (secondary) background = setAlpha({ hsla: color._secondary, alpha: hover ? 0.75 : 0.1 });
  // if (danger) background = setAlpha({ hsla: color._danger, alpha: hover ? 0.75 : 0.1 });

  const white = color._closest;

  if (primary) background = hover ? color._primary : white;
  if (secondary) background = hover ? color._secondary : white;
  if (danger) background = hover ? color._danger : white;

  // default tertiary, transparent
  return { background };
};

const getBorderColor = ({ primary, secondary, tertiary, danger, color, hover }) => {
  if (hover) return tertiary ? color._primary : color._white;

  if (primary) return color._primary;
  if (secondary) return color._secondary;
  if (tertiary) return color._secondary;
  if (danger) return color._danger;

  // default tertiary, secondary
  return color._secondary;
};

const getBorderWidth = ({ right, tertiary }) => {
  // let borderWidth = right ? "0px 2px 2px 0px" : "0px 0px 2px 2px";

  // if (tertiary) borderWidth = "1px";

  return { borderWidth: tertiary ? "1px" : "2px" };
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
      capitalize
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
  if (hover) return { white: true, primary: tertiary };

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
