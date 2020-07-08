import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import Star from "./Star";

const Stars = () => {
  const absoluteLeft = getRandomNumber() * 33;

  return (
    <Base>
      <Star
        {...{
          maxSize: `${33 - absoluteLeft}vw`,
          absoluteLeft: `${absoluteLeft}vw`,
          absoluteTop: `${getRandomNumber() * 100}vh`,
        }}
      />
    </Base>
  );
};

export default Stars;
