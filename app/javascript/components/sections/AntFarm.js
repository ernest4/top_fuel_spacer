import React from "react";
import Spacing from "../layout/Spacing";

const AntFarm = () => {
  return (
    <Spacing scroll {...{ height: "100vh", width: "100%" }}>
      <Spacing height="34px" />
      <div style={{ background: "green", height: 5000 }}>AntFarm</div>
    </Spacing>
  );
};

export default AntFarm;
