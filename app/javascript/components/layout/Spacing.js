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
  justify-content: ${({ justify, center }) => (justify || center ? "center" : "space-between")};
  align-items: ${({ align }) => align || "center"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  ${({ background }) => background && `background: ${background};`}

  /* ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `}; */
`;
