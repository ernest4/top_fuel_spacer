import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";

const Spacing = forwardRef(({ children, ...props }, ref) => {
  return <Container {...{ children, ...props, ref }} />;
});

export default memo(Spacing);

const SPACING = 8;

const Container = styled.div`
  display: flex;
  justify-content: ${({ justify, center }) => (justify || center ? "center" : "space-between")};
  align-items: ${({ align }) => align || "center"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  ${({ background }) => background && `background: ${background};`}
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}
  ${({ z }) => z && `z-index: ${z};`}

  ${({ top, right, bottom, left, all }) =>
    css`
      ${top && `padding-top: ${top * SPACING}px;`}
      ${right && `padding-right: ${right * SPACING}px;`}
      ${bottom && `padding-bottom: ${bottom * SPACING}px;`}
      ${left && `padding-left: ${left * SPACING}px;`}
      ${all && `padding: ${all * SPACING}px;`}
    `};

  ${({ pointer }) =>
    pointer &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};
`;
