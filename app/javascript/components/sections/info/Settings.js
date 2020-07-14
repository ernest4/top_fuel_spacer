import React from "react";
import Card from "../../layout/Card";
import { useSelector } from "react-redux";
import { capitalize } from "lodash";
import Text from "../../layout/Text";
import Spacing from "../../layout/Spacing";

const Settings = () => {
  const settings = useSelector(state => state.settings);

  return (
    <Card
      split
      {...{
        header: { title: "Settings" },
        body: Object.entries(settings).map(([category, categorySettings]) => {
          return (
            <Card
              {...{
                header: { subtitles: [capitalize(category)] },
                body: <CategorySettings {...{ categorySettings }} />,
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

const CategorySettings = ({ categorySettings }) => {
  return (
    <>
      {Object.entries(categorySettings).map(([section, sectionSettings]) => {
        return (
          <Spacing top={1}>
            <Text small children={section} />
            <Spacing top={1} />
            <SectionSettings {...{ sectionSettings }} />
          </Spacing>
        );
      })}
    </>
  );
};

const SectionSettings = ({ sectionSettings }) => {
  return (
    <>
      {Object.entries(sectionSettings).map(([setting, value]) => {
        return (
          <Spacing horizontal>
            <Text small children={setting} />
            <Spacing left={1} />
            <Control {...{ value }} />
          </Spacing>
        );
      })}
    </>
  );
};

const Control = ({ value }) => {
  // TODO: auto determine control type from value type

  // typeof true => 'boolean'
  // typeof 5 => 'number'
  // typeof 'gfdgf' => 'string'
  // typeof {} => 'object'
  // typeof (() => {}) => 'function'

  return <div>{`${value}`}</div>;
};

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
