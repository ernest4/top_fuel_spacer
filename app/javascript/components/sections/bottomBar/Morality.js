import React from "react";
import Text from "../../layout/Text";
import Card from "../../layout/Card";
import SVG from "../../svg/SVG";
import Spacing from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Morality = () => {
  const {
    theme: {
      color: {
        primary,
        error: renegadeBarBackground,
        secondary: paragonBarBackground,
        middle: containerBackground,
        fontDefault,
      },
    },
  } = useSelector(state => state.theme);

  const { morality } = useSelector(state => state.player);

  const isParagon = MORALITY_RANGE <= morality;

  const { moralityLevelText, moralityLevelQuote } = getMoralityText(morality);

  const normalizedMorality = morality - MORALITY_RANGE;
  const renegadeMorality = 0 < normalizedMorality ? 0 : Math.abs(normalizedMorality);
  const paragonMorality = 0 < normalizedMorality ? normalizedMorality : 0;

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
                [{moralityLevelText} : {Math.abs(normalizedMorality)}]
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
        footer: <Text extraSmall muted italics children={`"${moralityLevelQuote}"`} />,
      }}
    />
  );

  const progressBarParams = {
    outline: true,
    range: MORALITY_RANGE,
    containerBackground,
    height: "24px",
  };

  return (
    <Spacing horizontal hover={hover}>
      <ProgressBar
        {...{
          transform: `scale(-1) skew(30deg, 0deg)`, // custom skew here as we want to mirror flip this using scale(-1) trick
          value: renegadeMorality,
          barBackground: renegadeBarBackground,
          outlineColor: renegadeBarBackground,
          ...progressBarParams,
        }}
      />
      <Triangle background={primary} />
      <ProgressBar
        skewRight
        {...{ value: paragonMorality, barBackground: paragonBarBackground, ...progressBarParams }}
      />
    </Spacing>
  );
};

export default Morality;

const Triangle = ({ background }) => {
  return <Container {...{ background }} />;
};

const Container = styled.div`
  width: 0px;
  height: 0px;

  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-top: 25px solid ${({ background }) => background || "purple"};

  transform: scale(0.6, 1);
`;

// TODO: figure out if you can have rounded corner triangle like below  https://dabblet.com/gist/4592062

// const Container = styled.div`
//   /* position: relative; */
//   background-color: orange;
//   /* text-align: left; */

//   :before,
//   :after {
//     content: "";
//     position: absolute;
//     background-color: inherit;
//   }

//   width: 40px;
//   height: 40px;
//   border-top-right-radius: 30%;

//   :before,
//   :after {
//     width: 40px;
//     height: 40px;
//     border-top-right-radius: 30%;
//   }

//   transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);

//   :before {
//     transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
//   }
//   :after {
//     transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
//   }
// `;

const MORALITY_RANGE = 20;

// const getMoralityQuote = morality => {
//   const moralityQoutes = MORALITY_QOUTES[morality];

//   return moralityQoutes[Math.round(Math.random() * (moralityQoutes.length - 1))];
// };

// other suggestions:
// paragon:
// - nobel peace prize winner
// - beacon of hope
// renegade:
// - the feared
// - the dreaded
const getMoralityText = morality => {
  if (morality === 0)
    return {
      moralityLevelText: "Infamous",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
  else if (morality < 5)
    return {
      moralityLevelText: "Bad Ass",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
  else if (morality < 10)
    return {
      moralityLevelText: "Scoundrel",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
  else if (morality < 15)
    return {
      moralityLevelText: "Renegade 1",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
  else if (morality === MORALITY_RANGE)
    return {
      moralityLevelText: "Neutral",
      moralityLevelQuote: "I used to be indecisive, now I'm not so sure.",
    };
  else if (morality < 25)
    return {
      moralityLevelText: "Goody Two Shoes",
      moralityLevelQuote: "I saved a Nyan Cat stuck in a space tree yesterday.",
    };
  else if (morality < 30)
    return {
      moralityLevelText: "Paragon 2",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
  else if (morality < 35)
    return {
      moralityLevelText: "Ghandi",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
  else if (morality <= 40)
    return {
      moralityLevelText: "Renown",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
};
