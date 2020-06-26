import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import { useSelector } from "react-redux";
import Text from "../../layout/Text";

const Middle = () => {
  const controls = [
    "chat",
    "research", // [optional] -> research / build / hack / grow / fight (pirate) / etc
    "tasks", // [optional] -> your missions / quests for this character
    "collectibles", // -> [optional] show up on certain characters
    "close",
  ];

  return (
    <Spacing horizontal>
      <CharacterSection />
      <Spacing horizontal>
        {controls.map(control => {
          return <Spacing>{control}</Spacing>;
        })}
      </Spacing>
    </Spacing>
  );
};

export default Middle;

const CharacterSection = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const middle = useSelector(state => state.theme.themes[currentThemeId]?.color.middle);
  // const secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);
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
        <Character />
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

const Character = () => {
  return (
    <Spacing
      {...{
        width: "150px",
        height: "150px",
        background: "rgba(0, 128, 0, 0.48)",
        position: "absolute",
        absoluteLeft: `${32 * SPACING}px`,
        absoluteBottom: `${6 * SPACING}px`,
        z: "-1",
        hover: <div>Peterson</div>,
      }}
    >
      character
    </Spacing>
  );
};
