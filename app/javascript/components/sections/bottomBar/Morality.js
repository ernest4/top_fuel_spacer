import React from "react";
import Text from "../../layout/Text";
import Card from "../../layout/Card";
import SVG from "../../svg/SVG";
import Spacing from "../../layout/Spacing";
import ProgressBar from "../../misc/ProgressBar";
import { useSelector } from "react-redux";

// other suggestions:
// paragon:
// - nobel peace prize winner
// - beacon of hope
// renegade:
// - the feared
// - the dreaded
const MORALITY_LEVEL_TEXT = {
  "0": "Infamous", // end of line
  "5": "Bad Ass",
  "10": "Scoundrel",
  "15": "Renegade 1",
  "20": "Neutral", // neutral
  "25": "Goody Two Shoes",
  "30": "Paragon 2",
  "35": "Ghandi",
  "40": "Renown", // end of line
};

const Morality = () => {
  const {
    theme: {
      color: { secondary: barBackground, middle: containerBackground, fontDefault },
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

export default Morality;
