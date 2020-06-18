import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";

const AntFarm = () => {
  const background = useSelector(state => state.theme.theme.color.background);

  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <Spacing height="34px" />
      <div style={{ height: 5000 }}>AntFarm</div>
    </Spacing>
  );
};

export default AntFarm;
