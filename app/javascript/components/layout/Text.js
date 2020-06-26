import React, { forwardRef, memo } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const Text = forwardRef(({ italics, ...props }, ref) => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const _primary = useSelector(state => state.theme.themes[currentThemeId]?.color.primary);
  const _secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);
  const _white = useSelector(state => state.theme.themes[currentThemeId]?.color.white);
  const _error = useSelector(state => state.theme.themes[currentThemeId]?.color.error);
  const _fontDefault = useSelector(state => state.theme.themes[currentThemeId]?.color.fontDefault);
  const _muted = useSelector(state => state.theme.themes[currentThemeId]?.font.muted);

  if (italics)
    return (
      <i>
        <Container
          {...{ ...props, _primary, _secondary, _white, _error, _fontDefault, _muted, ref }}
        />
      </i>
    );

  return (
    <Container {...{ ...props, _primary, _secondary, _white, _error, _fontDefault, _muted, ref }} />
  );
});

export default memo(Text);

const Container = memo(styled.span`
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
  ${({ transform }) => transform && `transform: ${transform};`}

  /* ${({ large }) =>
    large &&
    css`
      font-size: 20px;
      line-height: 1.25;
    `}; */
`);

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

const getColor = ({
  muted,
  primary,
  secondary,
  error,
  white,
  _primary,
  _secondary,
  _white,
  _error,
  _fontDefault,
  _muted,
}) => {
  if (muted) return _muted;
  if (primary) return _primary;
  if (secondary) return _secondary;
  if (white) return _white;
  if (error) return _error;

  return _fontDefault;
};
