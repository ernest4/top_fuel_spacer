import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import { useSelector } from "react-redux";

const plugins = [followCursor];

const Spacing = forwardRef(({ hover, interactiveHover, hoverProps, ...props }, ref) => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const primary = useSelector(state => state.theme.themes[currentThemeId]?.color.primary);
  const canFollowCursor = useSelector(state => state.settings.graphics.hover.followCursor);

  if (hover || interactiveHover) {
    return (
      <Tippy
        // interactiveBorder: 30,
        // className="sv-navbar-menu"
        // distance={33}
        // offset={100}
        // maxWidth={1000}
        plugins={plugins}
        interactive={!!interactiveHover}
        placement={"top"}
        trigger={"mouseenter"} // 'for more options: https://atomiks.github.io/tippyjs/v6/all-props/#trigger'
        duration={0}
        arrow={false}
        appendTo={window.document.body}
        content={hover || interactiveHover}
        children={<Container primary={primary} {...props} ref={ref} />}
        {...hoverProps}
        followCursor={canFollowCursor ? checkHoverProps(hoverProps) : false}
      />
    );
  }

  return <Container {...props} ref={ref} />;
});

export default memo(Spacing);

const checkHoverProps = hoverProps => {
  if (hoverProps && hoverProps.hasOwnProperty("followCursor")) return hoverProps.followCursor;

  return true;
};

export const SPACING = 8;

const Container = memo(styled.div`
  display: ${({ scroll, overflow }) => (scroll || overflow ? "block" : "flex")};
  ${({ scroll }) => scroll && `overflow-y: scroll;`}
  ${({ position }) => position && `position: ${position};`}
  justify-content: ${({ justify, center }) => justify || (center ? "center" : "space-between")};
  ${({ align, center }) => (align || center) && `align-items: ${center ? "center" : align};`}
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  ${({ background }) => background && `background: ${background};`}
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}
  ${({ z }) => z && `z-index: ${z};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ transform }) => transform && `transform: ${transform};`}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ filter }) => filter && `filter: ${filter};`}

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

  ${({ pointer, primary }) =>
    pointer &&
    css`
      &:hover {
        cursor: pointer;
        /* ${
          primary && `box-shadow: 0px 0px 0px 4px ${primary};`
        } decided against this for now, pointer should be enough... */
      }
    `};
`);
