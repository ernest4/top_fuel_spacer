import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const Text = forwardRef(({ ...props }, ref) => {
  const { theme } = useSelector(state => state.theme);

  return <Container {...{ ...props, theme, ref }} />;
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
  if (bold) return 900;

  return 500; // default, medium
};

const getColor = ({ muted, primary, secondary, error, white, theme: { color, font } }) => {
  if (muted) return font.muted;
  if (primary) return color.primary;
  if (secondary) return color.secondary;
  if (white) return color.white;
  if (error) return color.error;

  return color.fontDefault;
};

const Container = styled.span`
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

  color: ${props => getColor(props)};

  ${({ center }) => center && `text-align: center;`}
  ${({ initial }) => initial && `text-transform: initial;`}

  /* ${({ large }) =>
    large &&
    css`
      font-size: 20px;
      line-height: 1.25;
    `}; */
`;
