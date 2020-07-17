import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Text from "../../../layout/Text";
import Character from "./characterSections/Character";

const CharacterSection = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const middle = useSelector(state => state.theme.themes[currentThemeId]?.color.middle);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);

  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const name = useSelector(state => state.antFarm.sections[currentSectionId]?.name);

  return (
    <Spacing vertical {...{ width: `33vw` }}>
      <Spacing horizontal>
        <Spacing
          {...{
            background: middle,
            top: 2,
            left: 24,
            transform: `skewX(30deg)`,
            borderRadius: "0px 4px",
            // border: `solid ${secondary}`,
            borderWidth: "3px 8px 0px 0px",
          }}
        />
        {currentSectionId != null && <Character />} {/* 0 is false...kinda annoying */}
      </Spacing>
      <Spacing
        horizontal
        {...{
          background: middle,
          justify: "flex-end",
          all: 1,
          right: 3,
          transform: "skewX(30deg)",
          border: `solid ${closest}`,
          borderRadius: `0px 8px`,
          borderWidth: "8px 16px 0px 0px",
        }}
      >
        <Text large {...{ transform: "skewX(-30deg)", children: name }} />
      </Spacing>
    </Spacing>
  );
};

export default CharacterSection;
