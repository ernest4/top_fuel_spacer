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
