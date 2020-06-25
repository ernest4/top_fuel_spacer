import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";

const AntFarm = () => {
  const background = useSelector(state => state.theme.theme.color.background);

  // need reducer for sections or just that section reducer ??. Flying reducer, AntFarm reducer and Info reducer
  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <Spacing height="34px" />
      {/* <Spacing onClick={() => dispatch(... some switch section actiion to AntFarm reducer)}>Test section click</Spacing> */}
      <div style={{ height: 5000 }}>AntFarm</div>
    </Spacing>
  );
};

export default AntFarm;
