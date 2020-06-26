import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import Text from "../layout/Text";

const TopBar = () => {
  const version = useSelector(state => state.game.version);

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  return (
    <Spacing horizontal {...{ background: closest, all: 1, position: "fixed", width: "100%" }}>
      <Spacing horizontal>
        <Text extraSmall>Top Fuel Spacer ©</Text>
        <Text extraSmall>OutlierStudio</Text>
        <Text extraSmall>{new Date().getFullYear()}</Text>
        <Text extraSmall>Twitter</Text>
        <Text extraSmall>Patreon</Text>
        <Text extraSmall>Luminaries</Text>
      </Spacing>
      <Spacing horizontal>
        <Text extraSmall>Theme: Lunar Lights</Text> // TODO: proper fixed hover theme select with hover preview (leave custom theme building as a future feature?)
        <Text extraSmall>Version {version}</Text>
      </Spacing>
    </Spacing>
  );
};

export default TopBar;
