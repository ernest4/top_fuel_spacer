import React from "react";
import Card from "../../layout/Card";
import Button from "../../misc/Button";

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
              header: { subtitles: ["wip2"] },
              body: "some text here wip2",
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["Planned Future Features"] },
              body: "some text here wip",
              footer: (
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
              ),
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["wip2"] },
              body: "some text here wip2",
            }}
          />,
          <Card
            {...{
              header: { subtitles: ["wip2"] },
              body: "some text here wip2",
            }}
          />,
        ],
      }}
    />
  );
};

export default Info;
