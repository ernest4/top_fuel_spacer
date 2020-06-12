import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";

// TODO: need to pick font for the game, just get boldness for 400,500,600
const Text = forwardRef(({ ...props }, ref) => {
  return <Container {...{ ...props, ref }} />;
});

export default memo(Text);

const getSizeAndLineHeight = ({
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
  megaLarge,
  jumbotron,
}) => {
  if (extraSmall) return { size: 12, lineHeight: 1.5 };
  if (small) return { size: 14, lineHeight: 1.5 };
  if (medium) return { size: 16, lineHeight: 1.25 };
  if (large) return { size: 20, lineHeight: 1.25 };
  if (extraLarge) return { size: 24, lineHeight: 1.25 };
  if (megaLarge) return { size: 30, lineHeight: 1.25 };
  if (jumbotron) return { size: 36, lineHeight: 1.125 };

  return { size: 16, lineHeight: 1.25 }; // default, medium
};

const getFontWeight = ({ light, bold }) => {
  if (light) return 400;
  if (bold) return 600;

  return 500; // default, medium
};

const Container = styled.div`
  margin: 0px;
  padding: 0px;

  ${({ uppercase }) => uppercase && `text-transform: uppercase;`}

  ${props => {
    const { size, lineHeight } = getSizeAndLineHeight(props);
    return css`
      font-size: ${size}px;
      line-height: ${lineHeight};
    `;
  }}

  ${props => {
    const fontWeight = getFontWeight(props);
    return css`
      font-weight: ${fontWeight};

      * {
        font-weight: ${fontWeight};
      }
    `;
  }};



  /* ${({ large }) =>
    large &&
    css`
      font-size: 20px;
      line-height: 1.25;
    `}; */
`;

//   if (error) classNames.push("sv-text-error");

//   if (muted) classNames.push("sv-text-muted");

//   if (primary) classNames.push("sv-text-primary");
//   if (secondary) classNames.push("sv-text-secondary");
//   if (white) classNames.push("sv-text-white");

//   if (center) classNames.push("sv-text-center");
//   if (initial) classNames.push("sv-text-initial");
