import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import Section from "./antFarm/Section";

const AntFarm = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const background = useSelector(state => state.theme.themes[currentThemeId]?.color.background);
  const sectionsLength = useSelector(state => state.antFarm.sections.length);

  // TODO: sections will point to section components to render, likely from antFarm/sections/<component name> or something like that
  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <Spacing height="44px" />
      {Array.from(Array(sectionsLength)).map((_, key) => {
        return <Section {...{ key, sectionId: key }} />;
      })}
    </Spacing>
  );
};

export default AntFarm;
