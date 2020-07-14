import React from "react";
import Card from "../../layout/Card";
import { useSelector } from "react-redux";
import { capitalize } from "lodash";

const Settings = () => {
  const settings = useSelector(state => state.settings);

  return (
    <Card
      split // TODO: more intelligent split option ...
      {...{
        header: { title: "Settings" },
        body: Object.entries(settings).map(([category, categorySettings]) => {
          return (
            <Card
              {...{
                header: { subtitles: [capitalize(category)] },
                body: <div>{`${JSON.stringify(categorySettings)}`}</div>,
              }}
            />
          );
        }),
        footer: <div>testy</div>,
      }}
    />
  );
};

export default Settings;

// const initialState = {
//   graphics: {
//     hover: {
//       followCursor: true, // set to false for improved performance 25% (dynamic)
//     },
//     musicPlayer: {
//       basic: false, // set to false for improved performance 5% (fixed)
//     },
//   },
//   audio: {},
//   progress: {},
// };
