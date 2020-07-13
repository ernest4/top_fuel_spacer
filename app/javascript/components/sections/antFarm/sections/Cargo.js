import React from "react";
import Spacing from "../../../layout/Spacing";
import { generateHSLA } from "../../../utils/Color";

const Cargo = () => {
  return (
    <Spacing {...{ background: generateHSLA({ alpha: 1 }), width: "100%", height: "100%" }}>
      Cargo
    </Spacing>
  );
};

export default Cargo;
