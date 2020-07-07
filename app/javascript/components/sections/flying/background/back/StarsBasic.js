import React from "react";
import Base from "./Base";
import Stars from "./Stars";

const StarsBasic = () => {
  return (
    <Base>
      <Stars size={1} count={100} />
      <Stars size={2} count={50} randomColor />
      <Stars size={3} count={10} />
    </Base>
  );
};

export default StarsBasic;
