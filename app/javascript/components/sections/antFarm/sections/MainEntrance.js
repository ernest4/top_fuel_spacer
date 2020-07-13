import React from "react";
import Spacing from "../../../layout/Spacing";
import { generateHSLA } from "../../../utils/Color";

const MainEntrance = () => {
  return (
    <Spacing {...{ background: generateHSLA({ alpha: 1 }), width: "100%", height: "100%" }}>
      MainEntrance
    </Spacing>
  );
};

export default MainEntrance;
