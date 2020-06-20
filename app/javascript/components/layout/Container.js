import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";
import Line from "./Line";

// TODO: react memo?
const Container = ({ children, items, right, borderColor, fillColor, separator, ...props }) => {
  // NOTE: the separator is unlikely to ever be used. But migth be repurposed? so keeping it around.

  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const furthest = useSelector(state => state.theme.theme.color.furthest);

  const COMMON_INNER_PROPS = {
    background: fillColor || furthest,
    borderRadius: `${right ? "" : "2px "}15px 2px 15px${right ? " 2px" : ""}`,
    all: 1,
  };

  const innerContent = children.length ? (
    children.map((item, key) => {
      const lastItemIndex = children.length - 1;

      const gap = key < lastItemIndex ? (separator ? 0.5 : 0.25) : 0;

      let borderRadius = "";

      const cssBorderRadiString = COMMON_INNER_PROPS.borderRadius;

      if (key === 0) borderRadius = adjustBorderRadius({ section: "header", cssBorderRadiString });
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

  // TODO: make border optional!! then can use this for content in the info section
  return (
    <Spacing
      {...{
        all: 0.5,
        background: "transparent",
        borderRadius: `${right ? "" : "5px"} 20px 5px 20px ${right ? "5px" : ""}`,
        border: `2px solid ${borderColor || secondary}`,
        opacity: "0.95",
        children: innerContent,
        ...props,
      }}
    />
  );
};

export default Container;

const adjustBorderRadius = ({ section, cssBorderRadiString }) => {
  if (section === "body") return "4px 4px 4px 4px";

  const [topLeft, topRight, bottomRight, bottomLeft] = cssBorderRadiString.split(" ");

  if (section === "header") return `${topLeft} ${topRight} 4px 4px`;

  return `4px 4px ${bottomRight} ${bottomLeft}`;
};

// // outer
// TODO: this skew can be used for the log animation!!!
// transform: rotate3d(-1, 1, 0, 48deg);
