import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";

const Spacing = forwardRef(({ ...props }, ref) => {
  return <Container {...{ ...props, ref }} />;
});

export default memo(Spacing);

const SPACING = 8;

const Container = styled.div`
  display: flex;
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

  ${({ top, right, bottom, left, all }) =>
    css`
      ${top && `padding-top: ${top * SPACING}px;`}
      ${right && `padding-right: ${right * SPACING}px;`}
      ${bottom && `padding-bottom: ${bottom * SPACING}px;`}
      ${left && `padding-left: ${left * SPACING}px;`}
      ${all && `padding: ${all * SPACING}px;`}
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
