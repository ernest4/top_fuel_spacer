import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Spacing from "../layout/Spacing";
import Text from "../layout/Text";
import Container from "../layout/Container";
import Line from "../layout/Line";
import * as themeActions from "../store/actions/theme";
import { css } from "styled-components";
import Card from "../layout/Card";

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
      <Text extraSmall children={`Theme: ${formatName(name)}`} />
    </Spacing>
  );
};

const Hover = () => {
  const dispatch = useDispatch();

  const prestige = useSelector(state => state.player.prestige);

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const themes = useSelector(state => state.theme.themes);

  const onThemeSelect = nextThemeId => dispatch(themeActions.setCurrentThemeId(nextThemeId));

  return (
    <Container vertical right border>
      {themes.map(({ name, requiredPrestige }, key) => {
        if (currentThemeId === key) return null;

        const unlocked = requiredPrestige <= prestige;

        return (
          <Spacing
            vertical
            {...{
              pointer: unlocked,
              onClick: unlocked ? () => onThemeSelect(key) : undefined,
              hover: <ThemePreview {...{ themeId: key }} />,
              hoverProps: { placement: "bottom" },
            }}
          >
            <Text {...{ children: formatName(name), muted: !unlocked }} />
            {/* {key < themes.length - 1 && <Line />} */}
            <Line />
          </Spacing>
        );
      })}
      <div>custom</div>
    </Container>
  );
};

const ThemePreview = ({ themeId }) => {
  const prestige = useSelector(state => state.player.prestige);

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const requiredPrestige = useSelector(
    state => state.theme.themes[currentThemeId].requiredPrestige
  );

  const name = useSelector(state => state.theme.themes[themeId].name);
  const blurb = useSelector(state => state.theme.themes[themeId].blurb);

  // preview colors
  const primary = useSelector(state => state.theme.themes[themeId].color.primary);
  const secondary = useSelector(state => state.theme.themes[themeId].color.secondary);
  // const background = useSelector(state => state.theme.themes[themeId].color.background);
  // const furthest = useSelector(state => state.theme.themes[themeId].color.furthest);
  // const middle = useSelector(state => state.theme.themes[themeId].color.middle);
  const closest = useSelector(state => state.theme.themes[themeId].color.closest);
  // const black = useSelector(state => state.theme.themes[themeId].color.black);
  // const white = useSelector(state => state.theme.themes[themeId].color.white);
  const fontDefault = useSelector(state => state.theme.themes[themeId].color.fontDefault);
  // const error = useSelector(state => state.theme.themes[themeId].color.error);
  // const warning = useSelector(state => state.theme.themes[themeId].color.warning);
  // const muted = useSelector(state => state.theme.themes[themeId].font.muted);

  if (prestige < requiredPrestige)
    return (
      <Card
        right
        border
        {...{
          header: { title: "Locked", subtitles: [`Prestige`, prestige] },
          body: (
            <Text extraSmall>
              To unlock this <Text primary extraSmall bold children="theme" /> you need to reach{" "}
              <Text secondary extraSmall bold children={`prestige level ${requiredPrestige}`} />.
            </Text>
          ),
        }}
      />
    );

  return (
    <Container border vertical right {...{ background: closest }}>
      <Text small>
        <Text
          primary
          medium
          bold
          uppercase
          {...{ color: primary, children: `Example ${formatName(name)}` }}
        />
        <Spacing top={0.5} />
        <Spacing horizontal justify="flex-start">
          <Text bold extraSmall {...{ color: secondary, children: "Theme" }} />{" "}
          <Text extraSmall light {...{ color: secondary, children: "|" }} />{" "}
          <Text bold extraSmall {...{ color: secondary, children: "Preview" }} />
        </Spacing>
      </Text>
      <Spacing {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line /> }} />
      <Text extraSmall {...{ color: fontDefault, children: blurb }} />
      <Spacing {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line /> }} />
      <Text extraSmall muted italics children={`"I want it!"`} />
    </Container>
  );
};

const formatName = name => name.replace(/(^\w|_\w)/g, w => w.toUpperCase()).replace(/_/g, " ");
