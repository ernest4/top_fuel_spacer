import React from "react";
import Card from "../../layout/Card";
import Button from "../../misc/Button";
import Spacing from "../../layout/Spacing";

const Development = () => {
  return (
    <Card
      split
      {...{
        header: { title: "Development" },
        body: [
          <Card
            {...{
              header: { subtitles: ["Progress"] },
              body: `You may check out Trello for features and general progress.`,
              footer: (
                <Spacing top={1}>
                  <Button
                    right
                    small
                    tertiary
                    {...{
                      link: "https://trello.com/b/lEMbH9W8/top-fuel-spacer",
                      children: "Trello",
                      innerProps: { center: true },
                    }}
                  />
                </Spacing>
              ),
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Devlogs"] },
              body: `If you’re interested in following the development process, check out the links below.`,
              footer: (
                <Spacing vertical>
                  <Spacing top={1}>
                    <Button
                      right
                      small
                      tertiary
                      {...{
                        link: "https://discord.gg/ak3WBJ8",
                        children: "Discord",
                        innerProps: { center: true },
                      }}
                    />
                  </Spacing>
                  <Spacing top={1}>
                    <Button
                      right
                      small
                      tertiary
                      {...{
                        link:
                          "https://forums.tigsource.com/index.php?topic=70506.msg1426374#msg1426374",
                        children: "Tigsource",
                        innerProps: { center: true },
                      }}
                    />
                  </Spacing>
                </Spacing>
              ),
            }}
          />,
        ],
      }}
    />
  );
};

export default Development;
