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
  onClick: onClickCallback,
  onBarHover,
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

  // TODO: see how much this helps!!  - seems like it makes this 0.5% cpu WORSE XD
  // const dataPointsArray = useMemo(() => Array.from(Array(dataPoints)), [dataPoints]);

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
        borderRadius: "4px",
        ...outlineProps,
      }}
    >
      <Spacing
        horizontal
        // its more efficient to just do this prop by prop instead of spreading!!!
        // TODO: use this method for all critical code !!!
        height={height || `${2 * SPACING}px`}
        width="100%"
        hover={hover}
        pointer={onClickCallback}
      >
        {Array.from(Array(dataPoints)).map((x, key) => (
          <Spacing
            {...{
              key,
              width: "100%",
              all: 0.375,
              left: 0 < key ? "0" : 0.375,
              onClick: onClickCallback ? () => onClickCallback({ index: key }) : undefined,
              onMouseOver: onBarHover ? () => onBarHover({ index: key }) : undefined,
            }}
          >
            <Bar
              {...{
                show: (key + 1) / dataPoints <= progress,
                background: barBackground || secondary,
              }}
            />
          </Spacing>
        ))}
      </Spacing>
    </Spacing>
  );
};

export default ProgressBar;
// export default memo(ProgressBar);

{
  /* <Segment {...{ key, onClickCallback, onBarHover, dataPoints, progress, barBackground }} /> */
}

// const Segment = ({ key, onClickCallback, onBarHover, dataPoints, progress, barBackground }) => {
//   const secondary = useSelector(state => state.theme.theme.color.secondary);

//   return (
//     <Spacing
//       {...{
//         key,
//         width: "100%",
//         all: 0.375,
//         left: 0 < key ? "0" : 0.375,
//         onClick: onClickCallback ? () => onClickCallback({ index: key }) : undefined,
//         onMouseOver: onBarHover ? () => onBarHover({ index: key }) : undefined,
//       }}
//     >
//       <Bar
//         {...{ show: (key + 1) / dataPoints <= progress, background: barBackground || secondary }}
//       />
//     </Spacing>
//   );
// };

const Bar = memo(({ show, background }) => {
  const black = useSelector(state => state.theme.theme.color.black);

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
});
