import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../layout/Text";
import Card from "../layout/Card";
import Line from "../layout/Line";

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

const ProgressBar = ({ value, range, resolution, discrete, background, height, pointer }) => {
  const progress = value / range;
  const barWidth = 100 / resolution;

  console.log(`value: ${value}`);
  console.log(`range: ${range}`);
  console.log(`progress: ${progress}`);

  const hover = (
    <Card
      right
      {...{
        header: (
          <Text small>
            <Text primary small bold children="Morality" /> bar
          </Text>
        ),
        body: (
          <Text extraSmall>
            You accumulate <Text error extraSmall bold children="renegade points" /> when
            interacting with others in a threatening, apathetic, ruthless way. Infamy will make the
            smaller pirates fear you. However, larger sharks will have you on their radar!
            <Spacing top={1} />
            You accumulate <Text secondary extraSmall bold children="paragon points" /> when helping
            others, being sympathetic and keeping your nose clean. Renown will make you a target to
            all pirates who want to make a name for themselves. However, trading outpost will give
            you more favourable rates!
          </Text>
        ),
        footer: <Text extraSmall>- [somy funny remark here - wip]</Text>,
      }}
    />
  );

  // const hover = (
  //   <Card
  //     right
  //     {...{
  //       headerItems: [],
  //       bodyItems: [
  //         <Text>
  //           <Text small>
  //             <Text primary small bold children="Morality" /> bar
  //           </Text>
  //           <Spacing top={2} bottom={2}>
  //             <Line />
  //           </Spacing>
  //           <Text extraSmall>
  //             You accumulate <Text error extraSmall bold children="renegade points" /> when
  //             interacting with others in a threatening, apathetic, ruthless way. Infamy will make
  //             the smaller pirates fear you. However, larger sharks will have you on their radar!
  //             <Spacing top={1} />
  //             You accumulate <Text secondary extraSmall bold children="paragon points" /> when
  //             helping others, being sympathetic and keeping your nose clean. Renown will make you a
  //             target to all pirates who want to make a name for themselves. However, trading outpost
  //             will give you more favourable rates!
  //           </Text>
  //           <Spacing top={2} bottom={2}>
  //             <Line />
  //           </Spacing>
  //           <Text extraSmall>- [somy funny remark here - wip]</Text>
  //         </Text>,
  //       ],
  //       footerItems: [],
  //     }}
  //   />
  // );

  return (
    <Spacing {...{ width: "100%", pointer }}>
      <Spacing horizontal {...{ height, width: "100%", hover }}>
        {Array.from(Array(resolution)).map((x, key) => (
          <Spacing {...{ all: barWidth / 10, width: `${barWidth}%`, key }}>
            <Bar {...{ show: key / resolution <= progress, background }} />
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
