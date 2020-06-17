import React from "react";
import Text from "../../layout/Text";
import Card from "../../layout/Card";
import SVG from "../../svg/SVG";
import Spacing from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";
import { useSelector } from "react-redux";

const Morality = () => {
  const {
    theme: {
      color: {
        error: renegadeBarBackground,
        secondary: paragonBarBackground,
        middle: containerBackground,
        fontDefault,
      },
    },
  } = useSelector(state => state.theme);

  const { morality } = useSelector(state => state.player);

  const isParagon = 20 <= morality;

  const { moralityLevelText, moralityLevelQuote } = getMoralityText(morality);

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
                [{moralityLevelText} : {morality}]
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

  // TODO: https://www.google.com/search?q=sci+fi+ui+font+quote&tbm=isch&ved=2ahUKEwjAoIi39YbqAhXDXhUIHackBoUQ2-cCegQIABAA&oq=sci+fi+ui+font+quote&gs_lcp=CgNpbWcQA1C0M1i5PGC9PWgAcAB4AIABVYgB9AOSAQE4mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=FQnpXoDCNcO91fAPp8mYqAg&bih=789&biw=1440&rlz=1C5CHFA_enIE838IE838#imgrc=Ec9YjAmUpGnlvM
  // implement this style          ///////////////(middle)\\\\\\\\\\\\\\

  const progressBarParams = { outline: true, range: 20, containerBackground, height: "24px" };

  const renegadeMorality = 0 < morality - 20 ? Math.abs(morality - 20) : 0;
  const paragonMorality = 0 < morality - 20 ? 0 : morality - 20;

  return (
    <Spacing horizontal hover={hover}>
      <ProgressBar
        {...{
          transform: `scale(-1) skew(-30deg, 0deg)`, // custom skew here as we want to mirror flip this using scale(-1) trick
          value: renegadeMorality,
          barBackground: renegadeBarBackground,
          outlineColor: renegadeBarBackground,
          ...progressBarParams,
        }}
      />
      <div>middle</div>
      <ProgressBar
        skewLeft
        {...{ value: paragonMorality, barBackground: paragonBarBackground, ...progressBarParams }}
      />
    </Spacing>
  );

  // return (
  //   <ProgressBar
  //     discrete
  //     // skewRight
  //     outline
  //     {...{
  //       value: morality,
  //       range: 40,
  //       resolution: 40,
  //       barBackground,
  //       containerBackground,
  //       height: "24px",
  //       hover,
  //     }}
  //   />
  // );
};

export default Morality;

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
  else if (morality === 20)
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
  else if (morality < 40)
    return {
      moralityLevelText: "Renown",
      moralityLevelQuote: "some funny quote coming soon [WIP]...",
    };
};
