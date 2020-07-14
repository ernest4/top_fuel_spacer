import React, { memo } from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";
// import Line from "./Line";

const Container = ({
  children,
  // items,
  right,
  borderColor,
  background,
  separator,
  split,
  border,
  innerProps,
  ...props
}) => {
  // NOTE: the separator is unlikely to ever be used. But migth be repurposed? so keeping it around.

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);
  // const furthest = useSelector(state => state.theme.themes[currentThemeId]?.color.furthest);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  const COMMON_INNER_PROPS = {
    background: background || closest,
    borderRadius: `${right ? "" : "2px "}15px 2px 15px${right ? " 2px" : ""}`,
    all: 1,
    ...innerProps,
  };

  const innerContent =
    split && typeof children !== "string" && 0 < children.length ? (
      children.map((item, key) => {
        const lastItemIndex = children.length - 1;

        const gap = key < lastItemIndex ? (separator ? 0.5 : 0.25) : 0;

        let borderRadius = "";

        const cssBorderRadiString = COMMON_INNER_PROPS.borderRadius;

        if (key === 0)
          borderRadius = adjustBorderRadius({ section: "header", cssBorderRadiString });
        else if (key === lastItemIndex)
          borderRadius = adjustBorderRadius({ section: "footer", cssBorderRadiString });
        else borderRadius = adjustBorderRadius({ section: "body", cssBorderRadiString });

        return (
          <>
            <Spacing {...{ ...COMMON_INNER_PROPS, borderRadius, children: item }} />
            <Spacing
              {...{ key, bottom: gap, top: gap, children: gap && separator ? <Line /> : null }}
            />
          </>
        );
      })
    ) : (
      <Spacing {...{ ...COMMON_INNER_PROPS, children }} />
    );

  return (
    <Spacing
      all={0.5}
      background="transparent"
      // background: furthest.replace(/, 1\)/, ", 0.5)"), // reduce alpha value
      // background: furthest,
      borderRadius={`${right ? "" : "5px"} 20px 5px 20px ${right ? "5px" : ""}`}
      border={getBorder({ border, borderColor, secondary })}
      // border: border ? `3px solid ${borderColor || background}` : "",
      // border: border ? `3px solid ${borderColor || primary}` : "",
      opacity="0.90"
      children={innerContent}
      // children={<Spacing {...{ ...COMMON_INNER_PROPS, children }} />}
      {...props}
    />
  );
};

export default memo(Container);

const getBorder = ({ border, borderColor, secondary }) => {
  if (!border) return "";

  return typeof border === "string" ? border : `2px solid ${borderColor || secondary}`;
};

const adjustBorderRadius = ({ section, cssBorderRadiString }) => {
  if (section === "body") return "4px 4px 4px 4px";

  const [topLeft, topRight, bottomRight, bottomLeft] = cssBorderRadiString.split(" ");

  if (section === "header") return `${topLeft} ${topRight} 4px 4px`;

  return `4px 4px ${bottomRight} ${bottomLeft}`;
};

// // outer
// TODO: this skew can be used for the log animation!!!
// transform: rotate3d(-1, 1, 0, 48deg);
