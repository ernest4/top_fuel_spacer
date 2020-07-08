import React from "react";
import Base from "../Base";
import Dots from "./Dots";

const StarsBasic = () => {
  return (
    <Base>
      <Dots size={1} count={100} />
      <Dots size={2} count={50} randomColor />
      <Dots size={3} count={10} />
    </Base>
  );
};

export default StarsBasic;
