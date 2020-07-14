import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";
import pageComponents from "./info/index";

const Info = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const background = useSelector(state => state.theme.themes[currentThemeId]?.color.background);

  const currentPageId = useSelector(state => state.info.currentPageId);
  const name = useSelector(state => state.info.pages[currentPageId]?.name);

  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background, all: 1 }}>
      <Spacing height="44px" />
      {pageComponents[name]}
    </Spacing>
  );
};

export default Info;
