import React from "react";
import Card from "../../../../layout/Card";
import Text from "../../../../layout/Text";
import Spacing from "../../../../layout/Spacing";
import { useSelector } from "react-redux";

const XpHover = () => {
  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);
  const level = useSelector(state => state.player.level);

  return (
    <Card
      border
      {...{
        header: {
          title: "Level",
          subtitles: ["XP", `${xp}/${levelUpXp}`],
          icon: <Text primary bold uppercase children={level} />,
        },
        body: (
          <Text extraSmall>
            This is your <Text secondary extraSmall bold children="personal experience" />{" "}
            <Text primary extraSmall bold children="level" />. This experience is carried over
            playthroughs and ascensions.
            <Spacing top={1} />
            You gain experience as you cover distance over the cosmos, complete quests, scan / mine
            planets, complete battles with pirates and other players and more.
            <Spacing top={1} />
            As you <Text secondary extraSmall bold children="level up" />, you’ll be able to put
            points towards various <Text primary extraSmall bold children="skills" /> that give game
            wide bonuses.
          </Text>
        ),
        footer: (
          <Text extraSmall>
            - You need <Text secondary extraSmall bold children={`${levelUpXp - xp} more xp`} /> to
            reach the <Text primary extraSmall bold children="next level" />.
            <Spacing top={0.5} />
          </Text>
        ),
      }}
    />
  );
};

export default XpHover;
