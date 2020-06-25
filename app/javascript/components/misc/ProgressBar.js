import React, { memo, useMemo } from "react";
import Spacing, { SPACING } from "../layout/Spacing";
import { useSelector } from "react-redux";

const ProgressBar = ({
  value, // current value
  range, // max possible value
  resolution, // how many data points to split the bar into, if not defined, use range
  continuos, // TODO: implement discrete v.s. continuos ? will we ever need continuos?
  barBackground,
  containerBackground,
  height,
  pointer,
  hover,
  outline,
  outlineColor,
  skewRight,
  skewLeft,
  onClick,
  onBarClick: onClickCallback,
  barHover: BarHoverComponent, // This component needs to be able to accept 'index' prop for bar index !!!
  transform: transformOverride, // used in one specific case so far in morality rengedate bar...
}) => {
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const middle = useSelector(state => state.theme.theme.color.middle);

  const progress = value / range;

  let transform = "";

  if (skewRight) transform = `skew(-30deg, 0deg);`;
  if (skewLeft) transform = `skew(30deg, 0deg);`;

  const outlineProps = outline
    ? { border: `2px solid ${outlineColor || secondary}`, borderRadius: "4px" }
    : {};

  const dataPoints = resolution || range;

  const callbacksArray = useMemo(
    () =>
      Array.from(Array(dataPoints)).map((x, index) => {
        return [
          onClickCallback ? () => onClickCallback({ index }) : undefined,
          BarHoverComponent ? <BarHoverComponent index={index} /> : null,
        ];
      }),
    [dataPoints, onClickCallback, BarHoverComponent]
  );

  // NOTE: bizzare way react works on line 176. I want to send the value 0, but react treats that as
  // no argument. Thus need to send string "0" event though the value will be used in a calculation,
  // so it's less than ideal.
  return (
    <Spacing
      // Its more efficient to just do this prop by prop instead of spreading!!!
      // TODO: use this method for all critical code !!!
      height="fit-content"
      width="100%"
      pointer={pointer}
      transform={transformOverride || transform}
      // background={containerBackground || "transparent"}
      background={containerBackground || middle}
      borderRadius="4px"
      {...outlineProps}
    >
      <Spacing
        horizontal
        height={height || `${2 * SPACING}px`}
        width="100%"
        hover={hover}
        onClick={onClick}
        pointer={onClickCallback}
      >
        {callbacksArray.map(([onClickCallbackMemo, BarHoverComponentMemo], key) => (
          <Spacing
            key={key}
            width="100%"
            all={0.375}
            left={0 < key ? "0" : 0.375}
            onClick={onClickCallbackMemo}
            hover={BarHoverComponentMemo}
          >
            <Bar
              show={(key + 1) / dataPoints <= progress}
              background={barBackground || secondary}
            />
          </Spacing>
        ))}
      </Spacing>
    </Spacing>
  );
};

const customPropCheck = (prevProps, nextProps) => {
  const dataPoints = nextProps.resolution || nextProps.range;

  const prevProgressPercent = prevProps.value / prevProps.range;
  const nextProgressPercent = nextProps.value / nextProps.range;

  // If the difference between the progress values is higher than resolution, return false.
  // This means that there is sufficient progress made to necesitate a render of new progress Bar.
  // Any progress difference less than resolution wont render any new information and is thus
  // wasteful and inefficient for a component that has potentially large number of Bars to render!!

  // if (progressPercentResolution < ABS(nextProgressPercent - prevProgressPercent)) rerender;
  if (1 / dataPoints < Math.abs(nextProgressPercent - prevProgressPercent)) return false;

  for (const key in prevProps) {
    if (key === "value") continue; // The value was already checked
    if (prevProps[key] !== nextProps[key]) return false;
  }

  return true;
};

export default memo(ProgressBar, customPropCheck);

const Bar = memo(({ show, background }) => {
  const black = useSelector(state => state.theme.theme.color.black);

  return (
    <Spacing
      opacity={show ? "1" : "0.3"}
      width="100%"
      height="100%"
      borderRadius="2px"
      background={show ? background : black}
    />
  );
});
