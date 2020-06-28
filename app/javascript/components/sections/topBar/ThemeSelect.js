import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Spacing from "../../layout/Spacing";
import Text from "../../layout/Text";
import Container from "../../layout/Container";
import Line from "../../layout/Line";
import * as themeActions from "../../store/actions/theme";
import Card from "../../layout/Card";
import Button from "../../misc/Button";

const ThemeSelect = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const name = useSelector(state => state.theme.themes[currentThemeId]?.name);

  return (
    <Button
      right
      small
      {...{
        interactiveHover: <Hover />,
        hoverProps: { placement: "bottom", followCursor: false },
        children: `Theme: ${formatName(name)}`,
      }}
    />
  );
};

export default ThemeSelect;

const Hover = () => {
  const dispatch = useDispatch();

  const prestige = useSelector(state => state.player.prestige);

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const themes = useSelector(state => state.theme.themes);

  const onThemeSelect = nextThemeId => dispatch(themeActions.setCurrentThemeId(nextThemeId));

  return (
    <Container vertical right border>
      {themes.map(({ name, requiredPrestige, wip }, key) => {
        if (currentThemeId === key) return null;

        const unlocked = requiredPrestige <= prestige;
        const available = unlocked && !wip;

        return (
          <Spacing
            vertical
            {...{
              pointer: available,
              onClick: available ? () => onThemeSelect(key) : undefined,
              hover: <ThemePreview {...{ themeId: key }} />,
              hoverProps: { placement: "bottom" },
            }}
          >
            <Text {...{ children: formatName(name), muted: !available }} />
            {/* {key < themes.length - 1 && <Line />} */}
            <Spacing {...{ top: 1, bottom: 1, children: <Line /> }} />
          </Spacing>
        );
      })}
      {/*TODO: ... custom theme creator ...*/}
      <Spacing {...{ hover: <CustomHover />, children: <Text {...{ children: "Custom" }} /> }} />
    </Container>
  );
};

const ThemePreview = ({ themeId }) => {
  const prestige = useSelector(state => state.player.prestige);

  const requiredPrestige = useSelector(state => state.theme.themes[themeId].requiredPrestige);
  const name = useSelector(state => state.theme.themes[themeId].name);
  const blurb = useSelector(state => state.theme.themes[themeId].blurb);
  const wip = useSelector(state => state.theme.themes[themeId].wip);

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
  const muted = useSelector(state => state.theme.themes[themeId].font.muted);

  if (prestige < requiredPrestige || wip)
    return (
      <Card
        right
        border
        {...{
          header: { title: "Locked", subtitles: [`Prestige`, `${prestige}/${requiredPrestige}`] },
          body: (
            <Text extraSmall>
              To unlock this <Text primary extraSmall bold children="theme" /> you need to reach{" "}
              <Text secondary extraSmall bold children={`prestige level ${requiredPrestige}`} />.
              {wip && (
                <>
                  <Spacing top={1} />
                  <Text
                    extraSmall
                    {...{
                      children:
                        "This theme is not yet finished. Once you unlock it, it will be available as soon as it’s ready.",
                    }}
                  />
                </>
              )}
            </Text>
          ),
          footer: <Text extraSmall muted italics children={`"Sorry, no preview..."`} />,
        }}
      />
    );

  return (
    <Container border vertical right {...{ background: closest }}>
      <Text small>
        <Text
          medium
          bold
          uppercase
          {...{ color: primary, children: `${formatName(name)} Sample` }}
        />
        <Spacing top={0.5} />
        <Spacing horizontal justify="flex-start">
          <Text bold extraSmall {...{ color: secondary, children: "Theme" }} />{" "}
          <Text extraSmall light {...{ color: secondary, children: "|" }} />{" "}
          <Text bold extraSmall {...{ color: secondary, children: "Preview" }} />
        </Spacing>
      </Text>
      <Spacing
        {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line background={secondary} /> }}
      />
      <Text extraSmall {...{ color: fontDefault, children: blurb }} />
      <Spacing
        {...{ top: 0.5, bottom: 0.5, width: "100%", children: <Line background={secondary} /> }}
      />
      <Text extraSmall italics {...{ color: muted, children: `"I want it!"` }} />
    </Container>
  );
};

const formatName = name => name.replace(/(^\w|_\w)/g, w => w.toUpperCase()).replace(/_/g, " ");

const CustomHover = () => {
  return (
    <Card
      right
      border
      {...{
        header: { title: "[Work In Progress]", subtitles: ["Create a custom theme"] },
        body: (
          <Text extraSmall>
            You will be able to <Text secondary extraSmall bold children="create" /> your own custom{" "}
            <Text primary extraSmall bold children="themes" /> for{" "}
            <Text italics extraSmall children="Top Fuel Spacer" /> and share them with{" "}
            <Text primary extraSmall bold children="other players" />!
          </Text>
        ),
        footer: (
          <Text
            extraSmall
            muted
            italics
            children={`"My theme brings all the boys to the yard..."`}
          />
        ),
      }}
    />
  );
};
