import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import ThemeSelect from "./topBar/ThemeSelect";
import Button from "../misc/Button";
import Development from "./topBar/Development";

const TopBar = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  return (
    <Spacing
      horizontal
      {...{ background: closest, all: 1, left: 2, position: "fixed", width: "100%", z: 1 }}
    >
      <Spacing horizontal>
        <Button tertiary small children="Top Fuel Spacer ©" />
        <Spacing left={1} />
        <Button tertiary small children={`OutlierStudio: ${new Date().getFullYear()}`} />
        <Spacing left={1} />
        <Button tertiary small children="Twitter" />
        <Spacing left={1} />
        <Button tertiary small children="Patreon" />
        <Spacing left={1} />
        <Button tertiary small children="Luminaries" />
      </Spacing>
      <Spacing horizontal center>
        <ThemeSelect />
        <Spacing left={1} />
        <Development />
      </Spacing>
    </Spacing>
  );
};

export default TopBar;
