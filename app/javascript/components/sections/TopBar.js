import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";
import Text from "../layout/Text";

const TopBar = () => {
  const version = useSelector(state => state.game.version);
  const closest = useSelector(state => state.theme.color.closest);

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
        <Text extraSmall>Theme: Lunar Lights</Text>
        <Text extraSmall>Version {version}</Text>
      </Spacing>
    </Spacing>
  );
};

export default TopBar;
