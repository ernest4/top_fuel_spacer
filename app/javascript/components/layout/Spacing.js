import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";
import Tippy from "@tippyjs/react";
import Hover from "./Hover";

const Spacing = forwardRef(({ hover, ...props }, ref) => {
  if (hover) {
    return (
      <Tippy
        interactive
        placement="top"
        trigger="mouseenter" // 'for more options: https://atomiks.github.io/tippyjs/v6/all-props/#trigger'
        // followCursor="horizontal" // doesnt work...
        duration={0}
        // className="sv-navbar-menu"
        arrow={false}
        // distance={33}
        // offset={100}
        // maxWidth={1000}
        appendTo={window.document.body}
        content={<Hover {...hover} />}
      >
        <Container {...{ ...props, ref }} />
      </Tippy>
    );
  }

  return <Container {...{ ...props, ref }} />;
});

export default memo(Spacing);

const SPACING = 8;

const Container = styled.div`
  display: ${({ scroll, overflow }) => (scroll || overflow ? "block" : "flex")};
  ${({ scroll }) => scroll && `overflow-y: scroll;`}
  ${({ position }) => position && `position: ${position};`}
  justify-content: ${({ justify, center }) => justify || (center ? "center" : "space-between")};
  ${({ align }) => align && `align-items: ${align};`}
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  ${({ background }) => background && `background: ${background};`}
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}
  ${({ z }) => z && `z-index: ${z};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}

  ${({ top, right, bottom, left, all }) =>
    css`
      ${all && `padding: ${all * SPACING}px;`}
      ${top && `padding-top: ${top * SPACING}px;`}
      ${right && `padding-right: ${right * SPACING}px;`}
      ${bottom && `padding-bottom: ${bottom * SPACING}px;`}
      ${left && `padding-left: ${left * SPACING}px;`}
    `};

  ${({ absoluteTop, absoluteRight, absoluteBottom, absoluteLeft }) =>
    css`
      ${absoluteTop && `top: ${absoluteTop};`}
      ${absoluteRight && `right: ${absoluteRight};`}
      ${absoluteBottom && `bottom: ${absoluteBottom};`}
      ${absoluteLeft && `left: ${absoluteLeft};`}
    `};

  ${({ pointer }) =>
    pointer &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};
`;
