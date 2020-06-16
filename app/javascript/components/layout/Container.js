import React from "react";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

const Container = ({ children, items, right, borderColor, fillColor }) => {
  const {
    theme: {
      color: { secondary, furthest },
    },
  } = useSelector(state => state.theme);

  const COMMON_INNER_PROPS = {
    background: fillColor || furthest,
    borderRadius: `${right ? "" : "2px"} 15px 2px 15px ${right ? "2px" : ""}`,
    all: 1,
  };

  const innerContent = items ? (
    items.map((item, key) => (
      <Spacing {...{ key, bottom: key < items.length + 1 ? 1 : 0 }}>
        <Spacing {...{ ...COMMON_INNER_PROPS, children: item }} />
      </Spacing>
    ))
  ) : (
    <Spacing {...{ ...COMMON_INNER_PROPS, children }} />
  );

  return (
    <Spacing
      {...{
        all: 0.5,
        background: "transparent",
        borderRadius: `${right ? "" : "5px"} 20px 5px 20px ${right ? "5px" : ""}`,
        border: `2px solid ${borderColor || secondary}`,
        opacity: "0.9",
      }}
    >
      {innerContent}
    </Spacing>
  );
};

export default Container;

// // outer
// TODO: this skew can be used for the log animation!!!
// transform: rotate3d(-1, 1, 0, 48deg);

//     // inner
