import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";

const AntFarm = () => {
  const {
    theme: {
      color: { background },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <Spacing height="34px" />
      <div style={{ height: 5000 }}>AntFarm</div>
    </Spacing>
  );
};

export default AntFarm;
