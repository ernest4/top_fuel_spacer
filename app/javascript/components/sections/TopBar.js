import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import Text from "../layout/Text";
import Container from "../layout/Container";

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
        <ThemeSelect />
        <Text extraSmall children={`Version ${version}`} />
      </Spacing>
    </Spacing>
  );
};

export default TopBar;

const ThemeSelect = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const name = useSelector(state => state.theme.themes[currentThemeId]?.name);

  // TODO: proper fixed hover theme select with hover preview (leave custom theme building as a future feature?)
  return (
    <Spacing
      {...{ interactiveHover: <Hover />, hoverProps: { placement: "bottom", followCursor: false } }}
    >
      <Text extraSmall children={`Theme: ${name}`} />
    </Spacing>
  );
};

const Hover = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const themes = useSelector(state => state.theme.themes);

  return (
    <Container vertical right>
      {themes.map(({ name }, key) => {
        if (currentThemeId === key) return null;

        return <Text {...{ children: name }} />;
      })}
    </Container>
  );
};
