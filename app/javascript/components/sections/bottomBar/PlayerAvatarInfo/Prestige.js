import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Card from "../../../layout/Card";
import Text from "../../../layout/Text";

const Prestige = () => {
  const background = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const prestige = useSelector(state => state.player.prestige);

  // TODO: onclick, take to prestige upgrades when time is right

  return (
    <Spacing
      center
      {...{
        width: `${8 * SPACING}px`,
        height: `${8 * SPACING}px`,
        borderRadius: "100%",
        background,
        position: "absolute",
        absoluteLeft: `-${SPACING}px`,
        absoluteBottom: `${12 * SPACING}px`,
      }}
    >
      <Spacing
        center
        {...{
          width: `${6 * SPACING}px`,
          height: `${6 * SPACING}px`,
          borderRadius: "100%",
          background: "aqua",
          border: `4px solid ${secondary}`,
          z: "1",
          children: <div>{prestige}</div>, // TODO: prestige icon wip
          hover: <Hover {...{ prestige }} />,
        }}
      />
    </Spacing>
  );
};

export default Prestige;

const Hover = ({ prestige }) => {
  const { levelText, quote } = prestigeTexts[prestige];

  return (
    <Card
      {...{
        header: (
          <Spacing horizontal>
            <Text small>
              <Text primary medium bold uppercase children="Prestige" />
              <Spacing top={0.5} />
              <Text bold extraSmall secondary children={levelText} />{" "}
              <Text extraSmall light secondary children="|" />{" "}
              <Text bold extraSmall secondary children={`${prestige}/${PRESTIGE_RANGE}`} />
            </Text>
            <div>wip</div> {/* TODO: prestige icon wip */}
            {/* <SVG {...{ name: "GoodAndEvil", size: 6 }} /> */}
          </Spacing>
        ),
        body: (
          <Text extraSmall>
            Prestige a.k.a ascension is a step in evolution once you reach a certain level towards
            end game.
            <Spacing top={1} />
            Prestige grants you special <Text secondary extraSmall bold children="ranking" /> and
            recognition for choosing to do it. Each prestige ranking also grants you a{" "}
            <Text secondary extraSmall bold children="permanent upgrade" /> of your choosing for the
            next playthrough. Finally, you can unlock new{" "}
            <Text primary extraSmall bold children="themes" /> as you ascend the prestige ladder.
            <Spacing top={1} />
            Once you ascend, you will keep your player{" "}
            <Text primary extraSmall bold children="xp" /> and{" "}
            <Text primary extraSmall bold children="level" />. However all other{" "}
            <Text error extraSmall bold children="progress, upgrades, collectibles" /> etc. will be{" "}
            <Text error extraSmall bold children="reset to 0." />
          </Text>
        ),
        footer: <Text extraSmall muted italics children={`"${quote}"`} />,
      }}
    />
  );
};

const PRESTIGE_RANGE = 10;

const prestigeTexts = {
  0: { levelText: "No Prestige", quote: "Not yet worthy." },
  1: { levelText: "Prestige 1", quote: "some funny quote coming soon [WIP]..." },
  2: { levelText: "Prestige 2", quote: "some funny quote coming soon [WIP]..." },
  3: { levelText: "Prestige 3", quote: "some funny quote coming soon [WIP]..." },
  4: { levelText: "Prestige 4", quote: "some funny quote coming soon [WIP]..." },
  5: { levelText: "Prestige 5", quote: "some funny quote coming soon [WIP]..." },
  6: { levelText: "Prestige 6", quote: "some funny quote coming soon [WIP]..." },
  7: { levelText: "Prestige 7", quote: "some funny quote coming soon [WIP]..." },
  8: { levelText: "Prestige 8", quote: "some funny quote coming soon [WIP]..." },
  9: { levelText: "Prestige 9", quote: "some funny quote coming soon [WIP]..." },
};
