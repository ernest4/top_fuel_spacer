import React from "react";
import Spacing from "../../../../layout/Spacing";

import { generateRGB } from "../../../../utils/Color";
import { parseNumberUnit } from "../../../../utils/Props";

const Planet = ({ maxSize, width, height, ...props }) => {
  const seed = Math.random();

  const { number: maxSizeNumber, unit: maxSizeUnit } = parseNumberUnit(maxSize || "50px");

  return (
    <Spacing
      {...{
        background: generateRGB(),
        position: "absolute",
        borderRadius: "100%",
        width: width || `${maxSizeNumber * seed}${maxSizeUnit}`,
        height: height || `${maxSizeNumber * seed}${maxSizeUnit}`,
        ...props,
      }}
    />
  );
};

export default Planet;
