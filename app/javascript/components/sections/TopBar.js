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

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const themes = useSelector(state => state.theme.themes);

  const onThemeSelect = nextThemeId => dispatch(themeActions.setCurrentThemeId(nextThemeId));

  return (
    <Container vertical right border>
      {themes.map(({ name, unlocked }, key) => {
        if (currentThemeId === key) return null;

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
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const muted = useSelector(state => state.theme.themes[currentThemeId].font.muted);

  const unlocked = useSelector(state => state.theme.themes[themeId].unlocked);
  const primary = useSelector(state => state.theme.themes[themeId].color.primary);

  if (!unlocked)
    return (
      <Card
        right
        border
        {...{
          header: {
            title: "Locked",
            subtitles: [`[Prestige]`, `required: ${99}`, `current: ${55}`],
          },
          body: (
            <Text extraSmall>
              To unlock this <Text primary extraSmall bold children="theme" /> you need to reach{" "}
              <Text secondary extraSmall bold children={`prestige level ${1000}`} />.
            </Text>
          ),
        }}
      />
    );

  return (
    <Container border vertical right>
      <Text
        {...{
          css: css`
            color: ${primary};
          `,
          children: "Primary",
        }}
      />
    </Container>
  );
};

const formatName = name => name.replace(/(^\w|_\w)/g, w => w.toUpperCase()).replace(/_/g, " ");
