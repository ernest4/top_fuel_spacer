import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../layout/Text";

const BottomBar = () => {
  const {
    theme: {
      color: { closest, furthest, secondary },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing
      horizontal
      {...{ background: closest, all: 1, position: "fixed", absoluteBottom: "0px", width: "100%" }}
    >
      <div>player avatar info</div>
      <Spacing
        {...{
          width: "80%",
          height: "fit-content",
          border: `2px solid ${secondary}`,
          borderRadius: "4px",
          background: furthest,
        }}
      >
        <MoralityBar />
      </Spacing>
    </Spacing>
  );
};

export default BottomBar;

// TODO: time to implement the commonly to be used bars component https://codepen.io/xgundam05/pen/ihDep
const MoralityBar = () => {
  // const { morality: value } = useSelector(state => state.player);
  const {
    theme: {
      color: { secondary: background },
    },
  } = useSelector(state => state.theme);

  const { morality: value } = useSelector(state => state.player);

  const range = 40;

  return <ProgressBar discrete {...{ value, range, resolution: 40, background, height: "24px" }} />;
};

const ProgressBar = ({ value, range, resolution, discrete, background, height, hover }) => {
  const progress = value / range;
  const barWidth = 100 / resolution;

  console.log(`value: ${value}`);
  console.log(`range: ${range}`);
  console.log(`progress: ${progress}`);

  return (
    <Spacing width="100%">
      <Spacing
        horizontal
        {...{
          height,
          width: "100%",
          hover: {
            header: <div>testy header</div>,
            body: (
              <Text extraSmall>
                This is your 'morality' bar. Red indicates leaning towards 'renegade'. Blue
                indicates leaning towards 'paragon'.
              </Text>
            ),
            footer: <div>footer testy</div>,
          },
        }}
      >
        {Array.from(Array(resolution)).map((x, index) => (
          <Spacing {...{ all: barWidth / 10, width: `${barWidth}%` }}>
            <Bar {...{ show: index / resolution <= progress, background }} />
          </Spacing>
        ))}
      </Spacing>
    </Spacing>
  );
};

const Bar = ({ show, background }) => {
  return (
    <Spacing
      {...{
        opacity: show ? "1" : "0",
        width: "100%",
        height: "100%",
        borderRadius: "2px",
        background,
      }}
    />
  );
};

// const Bar = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #00ffff;
//   position: relative;
//   border-radius: 2px;
//   /* box-shadow: 0px 0px 5px #00ffff; */
//   margin-left: 2px;
//   margin-right: 2px;
//   margin-bottom: 100px;
//   /* top: 3px; */
//   float: left;
//   clear: top;
// `;
