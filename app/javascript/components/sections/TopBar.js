import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import Text from "../layout/Text";
import ThemeSelect from "./topBar/ThemeSelect";

const TopBar = () => {
  const version = useSelector(state => state.game.version);

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  return (
    <Spacing horizontal {...{ background: closest, all: 1, position: "fixed", width: "100%" }}>
      <Spacing horizontal>
        <Text extraSmall>Top Fuel Spacer ©</Text>
        <Spacing left={1} />
        <Text extraSmall>OutlierStudio</Text>
        <Spacing left={1} />
        <Text extraSmall>{new Date().getFullYear()}</Text>
        <Spacing left={1} />
        <Text extraSmall>Twitter</Text>
        <Spacing left={1} />
        <Text extraSmall>Patreon</Text>
        <Spacing left={1} />
        <Text extraSmall>Luminaries</Text>
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
