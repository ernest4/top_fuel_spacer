import React from "react";
import Card from "../../layout/Card";
import Button from "../../misc/Button";
import Spacing from "../../layout/Spacing";

const Credits = () => {
  return (
    <Card
      split
      {...{
        header: { title: "Credits" },
        body: [
          <Card
            {...{
              header: { subtitles: ["Wife"] },
              body: `First and foremost I have to thank my wife for her patience and support during the development.`,
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Nihilore"] },
              body: `This game uses music by Nihilore. His royalty free music is an outstanding resource for developers on a budget.
              <space />
              The soundtrack files in use were compressed. No other modifications were done on them beyond that.`,
              footer: (
                <Spacing top={1}>
                  <Button
                    right
                    small
                    tertiary
                    {...{
                      link: "http://www.nihilore.com/",
                      children: "Nihilore",
                      innerProps: { center: true },
                    }}
                  />
                </Spacing>
              ),
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Patreon"] },
              body: `wip`,
            }}
          />,
        ],
      }}
    />
  );
};

export default Credits;
