import React, { useRef, useState } from "react";
import Spacing from "./layout/Spacing";
import Text from "./layout/Text";
import Draggable from "./layout/Draggable";
import themes from "./themes/index";
import { useSelector, useDispatch } from "react-redux";
import * as themeActions from "./store/actions/theme";
import * as debugActions from "./store/actions/debug";

// TODO: add debug overlay controls
const Debug = () => {
  const state = useSelector(state => state);

  return (
    <Draggable useButton background="#f1f1f1" width="25%">
      <Spacing background="#2196F3">
        <Text>Debug Controls</Text>
      </Spacing>
      <Spacing horizontal justify="flex-start">
        <ThemeSelect />
      </Spacing>
      <Spacing scroll height="300px">
        {buildStateTreeInputs(state)}
      </Spacing>
    </Draggable>
  );
};

export default Debug;

const ThemeSelect = () => {
  const dispatch = useDispatch();

  const {
    theme: { name: currentThemeName },
  } = useSelector(state => state.theme);

  const onThemeSelect = ({ target: { value } }) => dispatch(themeActions.setTheme(value));

  return (
    <>
      <label htmlFor="themes" children="Theme:" />
      <select
        {...{ name: "themes", id: "themes", value: currentThemeName, onChange: onThemeSelect }}
      >
        {Object.keys(themes).map(themeName => (
          <option {...{ value: themeName, children: themeName, key: themeName }} />
        ))}
      </select>
    </>
  );
};

const buildStateTreeInputs = (state, name, path) => {
  // WIP add controls to game state here: expose the entire game state dynamically and generate
  // value fields for it

  if (typeof state == "object") {
    const children = Object.entries(state);

    if (children.length !== 0)
      return children.map(([key, value]) =>
        buildStateTreeInputs(value, key, `${path || "store"}.${key}`)
      );
  } else return <StateTreeInput {...{ value: state, path }} />;
};

const StateTreeInput = ({ value: initialValue, path }) => {
  const dispatch = useDispatch();

  // TODO: broken. abandon. learn to use redux debug tools!
  const onChange = ({ target: { value } }) => {
    console.log(value);
    // dispatch(debugActions.setState({ path, value }));
  };

  return (
    <Spacing horizontal>
      <Text children={path} />
      <input {...{ value: initialValue, type: "text", onChange }} />
    </Spacing>
  );
};
