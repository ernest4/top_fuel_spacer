import React from "react";
import Card from "../../layout/Card";
import Button from "../../misc/Button";
import Spacing from "../../layout/Spacing";

const Info = () => {
  return (
    <Card
      split
      {...{
        header: { title: "Info" },
        body: [
          <Card
            {...{
              header: { subtitles: ["Contact"] },
              body: `For any <s>feature requests</s>, <s>bug reports</s>, <s>queries</s> or <s>other reasons</s>, please contact the email below.
              <space />
              Email: <p>developer.ernest@gmail.com</p>`,
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Planned Future Features"] },
              body: `There is a laundry list of things I'd love to add to this game. To get some idea there’s a link to my <p>Trello</p> board below (can also be found on the <s>top nav bar</s> under <p>version</p> button!).
              <space />
              One of the significant features will be <p>multiplayer</p> mode where you can <s>chat</s>, <p>trade</p> and <d>raid</d> with other player <p>players</p>.`,
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
              header: { subtitles: ["Free Status"] },
              body: `My intent is to keep this game <p>free forever</p>. I’ll be keeping server costs to minimum initially, but once some support starts coming in from <s>Patreon</s>, I’ll be first putting that towards increasing <s>server</s> and <s>database</s> capabilities.`,
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Support / Patreon"] },
              body: `If you guys like this project and want to help <s>support the development</s> of this game, you’ll be able to do so under one of the <p>Patreon tiers</p>.
              <space />
              Let me know what you’d like to see in the tiers by email. Some initial ideas are listed in the <s>Trello</s> link below.`,
              footer: (
                <Spacing top={1}>
                  <Button
                    right
                    small
                    tertiary
                    {...{
                      link: "https://trello.com/c/8nFRnKJP/43-patreon-tiers",
                      children: "Trello - Patreon Tiers",
                      innerProps: { center: true },
                    }}
                  />
                </Spacing>
              ),
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Development Style / Tech"] },
              body: "some text here wip2",
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Goals / Personal"] },
              body: "some text here wip2",
            }}
          />,
        ],
      }}
    />
  );
};

export default Info;
