import React from "react";
import Text from "../../layout/Text";
import Card from "../../layout/Card";
import SVG from "../../svg/SVG";
import Spacing from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";
import { useSelector } from "react-redux";

const Morality = () => {
  const primary = useSelector(state => state.theme.theme.color.primary);
  const renegadeBarBackground = useSelector(state => state.theme.theme.color.error);
  const paragonBarBackground = useSelector(state => state.theme.theme.color.secondary);

  const morality = useSelector(state => state.player.morality);

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
                [{moralityLevelText} : {normalizedMorality}/{MORALITY_RANGE}]
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
      <Spacing {...{ transform: "scale(1, -1)", height: "fit-content" }}>
        <SVG {...{ name: "TriangleOutlineWithContent", width: 28, height: 24, fill: primary }} />
      </Spacing>
      <ProgressBar
        skewRight
        {...{ value: paragonMorality, barBackground: paragonBarBackground, ...progressBarParams }}
      />
    </Spacing>
  );
};

export default Morality;

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
