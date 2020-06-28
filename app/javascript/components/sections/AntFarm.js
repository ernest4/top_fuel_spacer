import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import * as antFarmActions from "../store/actions/antFarm";

const AntFarm = () => {
  const dispatch = useDispatch();

  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const background = useSelector(state => state.theme.themes[currentThemeId]?.color.background);
  const sections = useSelector(state => state.antFarm.sections);

  // need reducer for sections or just that section reducer ??. Flying reducer, AntFarm reducer and Info reducer
  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <Spacing height="44px" />
      {sections.map((section, key) => {
        return (
          <Spacing pointer onClick={() => dispatch(antFarmActions.setCurrentSectionId(section.id))}>
            {section.name}
          </Spacing>
        );
      })}
      <div style={{ height: 5000 }}>AntFarm</div>
    </Spacing>
  );
};

export default AntFarm;
