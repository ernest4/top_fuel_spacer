import React, { useRef, useState } from "react";
import Spacing from "./layout/Spacing";
import Text from "./layout/Text";
import Draggable from "./layout/Draggable";
import themes from "./themes/index";
import { useSelector, useDispatch } from "react-redux";
import * as themeActions from "./store/actions/theme";

// TODO: add debug overlay controls
const Debug = () => {
  return (
    <Draggable useButton background="#f1f1f1" width="50%">
      <Spacing background="#2196F3">
        <Text>Debug Controls</Text>
      </Spacing>
      <Spacing horizontal justify="flex-start">
        <ThemeSelect />
      </Spacing>
      <Text>WIP (this is a draggable div!)</Text>
      <Text>
        WIP add controls to game state here: expose the entire game state dynamically and generate
        value fields for it
      </Text>
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
      <label for="themes" children="Theme:" />
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
