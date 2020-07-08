import React from "react";
import Spacing from "../../../../layout/Spacing";
import { getRandomNumber } from "../../../../utils/Array";
import { generateColor } from "../../../../utils/Color";
import { parseNumberUnit } from "../../../../utils/Props";

const Planet = ({ maxSize, width, height, ...props }) => {
  const seed = getRandomNumber();

  const { number: maxSizeNumber, unit: maxSizeUnit } = parseNumberUnit(maxSize || "50px");

  return (
    <Spacing
      {...{
        background: generateColor(),
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
