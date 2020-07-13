import React, { useRef, useEffect } from "react";
import Spacing from "../Spacing";
import { keyframes, css } from "styled-components";
import { parseNumberUnit } from "../../utils/Props";

const BubbleContainer = ({
  bubbleTrigger,
  onBubbleAnimationEnd: onBubbleAnimationEndCallback,
  bubbleAbsoluteTop,
  bubbleAbsoluteRight,
  bubbleAbsoluteBottom,
  bubbleAbsoluteLeft,
  bubbleMaxHorizontal: bubbleMaxHorizontalOverride,
  bubbleMaxVertical: bubbleMaxVerticalOverride,
  duration,
  children,
}) => {
  const bubblesRef = useRef([]);

  useEffect(() => {
    bubblesRef.current = [...bubblesRef.current, bubbleTrigger];
  }, [bubbleTrigger]);

  const onDisappear = index => {
    if (index === bubblesRef.current.length - 1) {
      bubblesRef.current = bubblesRef.current.splice(index, 1);
    }

    // console.log(bubblesRef.current);
    if (onBubbleAnimationEndCallback) onBubbleAnimationEndCallback();
  };

  return (
    <>
      {bubblesRef.current.map((bubbleTrigger, index) => {
        const seed = Math.random();

        const { bubbleMaxHorizontalNumber, bubbleMaxHorizontalUnit } = parseNumberUnit(
          bubbleMaxHorizontalOverride || "8vw"
        );

        const { bubbleMaxVerticalNumber, bubbleMaxVerticalUnit } = parseNumberUnit(
          bubbleMaxVerticalOverride || "15vh"
        );

        {
          /* let bubbleMaxHorizontal = bubbleMaxHorizontalNumber || seed * 10;
        let bubbleMaxVertical = bubbleMaxVerticalNumber || seed * 30; */
        }

        return (
          <Spacing
            {...{
              key: index,
              position: "absolute",
              // margin: "100% 0%",
              absoluteTop: bubbleAbsoluteTop,
              absoluteRight: bubbleAbsoluteRight,
              absoluteBottom: bubbleAbsoluteBottom,
              absoluteLeft: bubbleAbsoluteLeft,
              children: children || bubbleTrigger,
              css: css`
                animation-name: ${keyframes`
                0% { transform: scale(0) translate(0vw, 0vh); }
                10% { transform: scale(0.25) translate(1vw, 0vh); }
                20% { transform: scale(0.5) translate(8vw, 0vh); }
                99%  { transform: scale(1) translate(8vw, -15vh); }
                100%  { transform: scale(0) translate(8vw, -15vw); }
              `};

                ${"" /* animation-timing-function: cubic-bezier(0.74, 0.07, 1, -0.19); */}
                animation-timing-function: linear;
                animation-iteration-count: 1;
                animation-fill-mode: both;
                animation-duration: ${duration || 3}s;
              `,
              // css: css`
              //   animation-name: ${keyframes`
              //   0% { transform: scale(0) translate(0vw, 0vh); }
              //   10% { transform: scale(0.25) translate(1vw, 0vh); }
              //   20% { transform: scale(0.5) translate(${bubbleMaxHorizontalNumber}${bubbleMaxHorizontalUnit}, 0vh); }
              //   99%  { transform: scale(1) translate(${bubbleMaxHorizontalNumber}${bubbleMaxHorizontalUnit}, -${bubbleMaxVerticalNumber}${bubbleMaxVerticalUnit}); }
              //   100%  { transform: scale(0) translate(${bubbleMaxHorizontalNumber}${bubbleMaxHorizontalUnit}, -${bubbleMaxVerticalNumber}${bubbleMaxVerticalUnit}); }
              // `};

              //   ${"" /* animation-timing-function: cubic-bezier(0.74, 0.07, 1, -0.19); */}
              //   animation-timing-function: linear;
              //   animation-iteration-count: 1;
              //   animation-fill-mode: both;
              //   animation-duration: ${duration || 3}s;
              // `,
              onAnimationEnd: () => onDisappear(index),
            }}
          />
        );
      })}
    </>
  );
};

export default BubbleContainer;
