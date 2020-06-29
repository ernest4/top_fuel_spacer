import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import Text from "../layout/Text";
import ThemeSelect from "./topBar/ThemeSelect";
import Button from "../misc/Button";

const TopBar = () => {
  const version = useSelector(state => state.game.version);

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
      <Spacing horizontal>
        <ThemeSelect />
        <Spacing left={1} />
        <Text extraSmall children={`Version ${version}`} />
      </Spacing>
    </Spacing>
  );
};

export default TopBar;
