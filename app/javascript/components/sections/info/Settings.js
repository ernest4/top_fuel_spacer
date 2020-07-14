import React from "react";
import Card from "../../layout/Card";
import { useSelector, useDispatch } from "react-redux";
import Text from "../../layout/Text";
import Spacing from "../../layout/Spacing";
import { prettyPrintCamel, capitalize } from "../../utils/String";
import Button from "../../misc/Button";
import * as settingsActions from "../../store/actions/settings";

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  const onReset = () => dispatch(settingsActions.resetAll());

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
        footer: (
          <Spacing all={1}>
            <Button
              right
              danger
              small
              {...{ children: "Reset All", onClick: onReset, innerProps: { center: true } }}
            />
          </Spacing>
        ),
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
            <Text bold small children={prettyPrintCamel(section)} />
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
      {Object.entries(sectionSettings).map(([setting, { value, info }]) => {
        return (
          <Spacing horizontal align="center" hover={<Hover {...{ info }} />}>
            <Text
              small
              {...{ transform: "skew(-15deg, 0deg)", children: prettyPrintCamel(setting) }}
            />
            <Spacing left={1} />
            <Control {...{ setting, value }} />
          </Spacing>
        );
      })}
    </>
  );
};

const Hover = ({ info }) => {
  return <Card right border {...{ body: info }} />;
};

const Control = ({ setting, value }) => {
  // TODO: auto determine control type from value type

  // typeof true => 'boolean'
  // typeof 5 => 'number'
  // typeof 'gfdgf' => 'string'
  // typeof {} => 'object'
  // typeof (() => {}) => 'function'

  if (typeof value === "boolean") return <Toggle {...{ setting, value }} />;

  return <div>{`${value}`}</div>; // DEFAULT FOR TESTING
};

const Toggle = ({ setting, value }) => {
  const dispatch = useDispatch();

  const onToggle = () => dispatch(settingsActions[`set${capitalize(setting)}Value`](!value));

  return (
    <Button secondary right small {...{ hover: value, children: `${value}`, onClick: onToggle }} />
  );
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
