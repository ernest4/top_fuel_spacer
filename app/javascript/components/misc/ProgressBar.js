import React from "react";
import Spacing from "../layout/Spacing";
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
  transform: transformOverride, // used in one specific case so far in morality rengedate bar...
}) => {
  const {
    theme: {
      color: { secondary, middle },
    },
  } = useSelector(state => state.theme);

  const progress = value / range;

  let transform = "";

  if (skewRight) transform = `skew(-30deg, 0deg);`;
  if (skewLeft) transform = `skew(30deg, 0deg);`;

  const outlineProps = outline
    ? { border: `2px solid ${outlineColor || secondary}`, borderRadius: "4px" }
    : {};

  const dataPoints = resolution || range;

  // NOTE: bizzare way react works on line 176. I want to send the value 0, but react treats that as
  // no argument. Thus need to send string "0" event though the value will be used in a calculation,
  // so it's less than ideal.
  return (
    <Spacing
      {...{
        height: "fit-content",
        width: "100%",
        pointer,
        transform: transformOverride || transform,
        // background: containerBackground || "transparent",
        background: containerBackground || middle,
        ...outlineProps,
      }}
    >
      <Spacing horizontal {...{ height, width: "100%", hover }}>
        {Array.from(Array(dataPoints)).map((x, key) => (
          <Spacing {...{ key, width: `100%`, all: 0.375, left: 0 < key ? "0" : 0.375 }}>
            <Bar
              {...{
                show: progress !== 0 && key / dataPoints <= progress,
                background: barBackground,
              }}
            />
          </Spacing>
        ))}
      </Spacing>
    </Spacing>
  );
};

export default ProgressBar;

const Bar = ({ show, background }) => {
  const {
    theme: {
      color: { black },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing
      {...{
        opacity: show ? "1" : "0.3",
        width: "100%",
        height: "100%",
        borderRadius: "2px",
        background: show ? background : black,
      }}
    />
  );
};
