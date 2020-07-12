import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import ThemeSelect from "./topBar/ThemeSelect";
import Button from "../misc/Button";
import Development from "./topBar/Development";
import Patreon from "./topBar/Patreon";
import Luminaries from "./topBar/Luminaries";
import Line from "../layout/Line";
import Text from "../layout/Text";

const TopBar = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  return (
    <Spacing
      horizontal
      {...{ background: closest, all: 1, left: 2, position: "fixed", width: "100%", z: 1 }}
    >
      <Spacing horizontal align="center">
        <Text extraSmall children="Top Fuel Spacer ©" />
        <Spacing left={1} />
        <Line vertical height="100%" transform="rotate(-30deg)" />
        <Spacing left={1} />
        <Text extraSmall children={`OutlierStudio: ${new Date().getFullYear()}`} />
        <Spacing left={1} />
        <Line vertical height="100%" transform="rotate(-30deg)" />
        <Spacing left={1} />
        <Button tertiary small link="https://twitter.com/StudioOutlier" children="Twitter" />
        <Spacing left={1} />
        <Button
          tertiary
          small
          link="https://www.youtube.com/channel/UCg25zE5F4u1i8gGlr7CFa6w"
          children="YouTube"
        />
        <Spacing left={1} />
        <Patreon />
        <Spacing left={1} />
        <Luminaries />
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
