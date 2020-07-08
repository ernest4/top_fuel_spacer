import React from "react";
import Base from "../Base";
import { getRandomNumber } from "../../../../utils/Array";
import Star from "./Star";

const Stars = () => {
  const absoluteLeft = `${getRandomNumber() * 33}vw`;
  const absoluteTop = `${getRandomNumber() * 100}vh`;

  return (
    <Base>
      <Star {...{ absoluteLeft, absoluteTop }} />
    </Base>
  );
};

export default Stars;
