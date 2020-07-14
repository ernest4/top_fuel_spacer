import React from "react";
import Card from "../../layout/Card";

const Settings = () => {
  return (
    <Card
      split // TODO: more intelligent split option ...
      {...{
        header: {
          title: "Settings",
        },
        body: Array.from(Array(100)).map(i => {
          return (
            <div>
              test {i}
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <br />
            </div>
          );
        }),
        footer: <div>testy</div>,
      }}
    />
  );
};

export default Settings;
