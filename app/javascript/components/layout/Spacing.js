import React, { forwardRef, useState, useEffect, memo } from "react";
import styled, { css } from "styled-components";

const Spacing = forwardRef(
  (
    {
      // vertical,
      // horizontal,
      // left,
      // top,
      // right,
      // bottom,
      // all,
      // full,                  <-- ...props
      // half,
      // fitContent,
      // maxContent,
      // center,
      // wrap,
      // overflow,
      // width,
      // fixed,
      // pointer,
      // z,
      // className,
      // breakpoint: initialBreakpoint,   <-- unused for now??
      children,
      ...props
    },
    ref
  ) => {
    // const [className, setClassName] = useState();
    // const breakpoint = useBreakpoint(initialBreakpoint);

    // old style stuff was here

    // useEffect(() => {
    //   if (!breakpoint) return;

    //   if (typeof vertical == "string" && vertical != breakpoint)
    //     setClassName(`${className} sv-horizontal`.replace("sv-vertical", ""));

    //   if (typeof horizontal == "string" && horizontal != breakpoint)
    //     setClassName(`${className} sv-vertical`.replace("sv-horizontal", ""));
    // }, [breakpoint]);

    return <Container {...{ children, ...props, ref }} />;
  }
);

export default memo(Spacing);

// const classNameFor = (type, value) => {
//   if (value === true) return `sv-spacing-${type}`;
//   return `sv-spacing-${type}-${value}`;
// };

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.horizontal ? "row" : "column")}

  /* ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `}; */
`;

/* // old style stuff */
/* const style = { overflow, width }; */

/* useEffect(() => {
  const classNames = []; */

  /* if (vertical) classNames.push("sv-vertical");    */
  /* if (horizontal) classNames.push("sv-horizontal"); */

  /* if (left) classNames.push(`sv-spacing-left-${left}`); */
  /* if (top) classNames.push(`sv-spacing-top-${top}`); */
  /* if (right) classNames.push(`sv-spacing-right-${right}`); */
  /* if (bottom) classNames.push(`sv-spacing-bottom-${bottom}`); */

  /* if (full) classNames.push(classNameFor("full", full)); */
  /* if (half) classNames.push(classNameFor("half", half)); */
  /* if (fitContent) classNames.push(classNameFor("fit-content", fitContent)); */
  /* if (maxContent) classNames.push(classNameFor("max-content", maxContent)); */

  /* if (center) {
    if (center === true) classNames.push("sv-center");
    else classNames.push(`sv-center-${center}`);
  } */
/* 
  if (wrap) classNames.push("sv-wrap");

  if (all) classNames.push(`sv-spacing-${all}`);

  // if (fixed) classNames.push(`sv-spacing-fixed-height`);
  if (fixed) classNames.push(classNameFor("fixed", fixed));

  if (z) classNames.push(classNameFor("z-index", z)); */
/* 
  if (pointer) classNames.push("sv-pointer");

  if (initialClassName) classNames.push(initialClassName);

  setClassName(classNames.join(" "));
}, [ */
  /* vertical,
  horizontal, */
  /* left,
  top,
  right,
  bottom,
  all,
  full,
  half,
  fitContent,
  maxContent,
  center,
  wrap,
  overflow,
  width,
  fixed,
  pointer,
  initialClassName,
  z,
]); */
