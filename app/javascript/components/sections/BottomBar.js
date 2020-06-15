import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

  const value = 10;

  const range = 10;

  return <ProgressBar discrete {...{ value, range, resolution: 40, background, height: "24px" }} />;
};

const ProgressBar = ({ value, range, resolution, discrete, background, height }) => {
  const progress = value / range;
  const barWidth = 100 / resolution;

  return (
    <Spacing width="100%">
      <Spacing horizontal {...{ height, width: "100%" }}>
        {Array.from(Array(resolution)).map((x, index) => (
          <Spacing {...{ all: barWidth / 10, width: `${barWidth}%` }}>
            <Bar {...{ show: index <= progress, background }} />
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
        borderRadius: "4px",
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
