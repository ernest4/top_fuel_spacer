import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../layout/Text";
import Card from "../layout/Card";
import Line from "../layout/Line";
import SVG from "../svg/SVG";

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
      <Spacing {...{ width: "80%" }}>
        <MoralityBar />
      </Spacing>
    </Spacing>
  );
};

export default BottomBar;

// other suggestions:
// paragon:
// - nobel peace prize winner
// - beacon of hope
// renegade:
// - the feared
// - the dreaded
const MORALITY_LEVEL_TEXT = {
  "0": "Infamous", // final
  "5": "Bad Ass",
  "10": "Scoundrel",
  "15": "Renegade 1",
  "20": "Neutral", // neutral
  "25": "Goody Two Shoes",
  "30": "Paragon 2",
  "35": "Ghandi",
  "40": "Renown", // final
};

// TODO: time to implement the commonly to be used bars component https://codepen.io/xgundam05/pen/ihDep
const MoralityBar = () => {
  const {
    theme: {
      color: { secondary: barBackground, furthest: containerBackground, fontDefault },
    },
  } = useSelector(state => state.theme);

  const { morality: value } = useSelector(state => state.player);

  const isParagon = 20 <= value;

  const hover = (
    <Card
      right
      {...{
        header: (
          <Spacing horizontal>
            <Text small>
              <Text primary medium bold uppercase children="Morality" />
              <Spacing top={0.5} />
              <Text extraSmall light {...{ error: !isParagon, secondary: isParagon }}>
                [{MORALITY_LEVEL_TEXT[value]}:{value}]
              </Text>
            </Text>
            <SVG {...{ name: "GoodAndEvil", size: 6 }} />
          </Spacing>
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
        footer: (
          <Text extraSmall muted italics>
            "somy funny moorality score dependenent remark here - [wip]"
          </Text>
        ),
      }}
    />
  );

  // TODO: https://www.google.com/search?q=sci+fi+ui+font+quote&tbm=isch&ved=2ahUKEwjAoIi39YbqAhXDXhUIHackBoUQ2-cCegQIABAA&oq=sci+fi+ui+font+quote&gs_lcp=CgNpbWcQA1C0M1i5PGC9PWgAcAB4AIABVYgB9AOSAQE4mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=FQnpXoDCNcO91fAPp8mYqAg&bih=789&biw=1440&rlz=1C5CHFA_enIE838IE838#imgrc=Ec9YjAmUpGnlvM
  // implement this style          ///////////////(middle)\\\\\\\\\\\\\\

  return (
    <ProgressBar
      discrete
      // skewRight
      outline
      {...{
        value,
        range: 40,
        resolution: 40,
        barBackground,
        containerBackground,
        height: "24px",
        hover,
      }}
    />
  );
};

const ProgressBar = ({
  value,
  range,
  resolution,
  discrete, // TODO: implement discrete v.s. continuos ? will we ever need continuos?
  barBackground,
  containerBackground,
  height,
  pointer,
  hover,
  outline,
  outlineColor,
  skewRight,
  skewLeft,
}) => {
  const {
    theme: {
      color: { secondary, furthest },
    },
  } = useSelector(state => state.theme);

  const progress = value / range;
  const barWidth = 100 / resolution;

  console.log(`value: ${value}`);
  console.log(`range: ${range}`);
  console.log(`progress: ${progress}`);

  let transform = "";

  if (skewRight) transform = `skew(-30deg, 0deg);`;
  if (skewLeft) transform = `skew(30deg, 0deg);`;

  const outlineProps = outline
    ? { border: `2px solid ${outlineColor || secondary}`, borderRadius: "4px" }
    : {};

  // TODO: implement 'shadow bars' like here https://www.google.com/search?q=sci+fi+futuristic+progress+bar&rlz=1C5CHFA_enIE838IE838&sxsrf=ALeKk03rIJAhvp_WGvvzI4r2Mpdr-uPaBQ:1592346394510&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJu9DJsIfqAhUjQhUIHb5dC3AQ_AUoAXoECAsQAw&biw=1440&bih=789#imgrc=0W5WOpM2i3KeEM
  // i.e. option (3) on sketch!!
  return (
    <Spacing
      {...{
        height: "fit-content",
        width: "100%",
        pointer,
        transform,
        background: containerBackground || "transparent",
        ...outlineProps,
      }}
    >
      <Spacing horizontal {...{ height, width: "100%", hover }}>
        {Array.from(Array(resolution)).map((x, key) => (
          <Spacing {...{ all: barWidth / 10, width: `${barWidth}%`, key }}>
            <Bar {...{ show: key / resolution <= progress, background: barBackground }} />
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
