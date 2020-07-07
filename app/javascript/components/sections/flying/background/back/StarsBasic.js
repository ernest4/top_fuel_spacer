import React from "react";
import Base from "./Base";
import styled from "styled-components";

const StarsBasic = () => {
  return (
    <Base>
      <Stars size={1} count={10} />
    </Base>
  );
};

export default StarsBasic;

const generateStars = count => {
  return Array.from(Array(count))
    .map(i => `${Math.random() * 33}vw ${Math.random() * 100}vh #fff`)
    .join(",");
};

const Stars = styled.div`
  /* position: absolute; */
  width: ${({ size }) => `${size || 1}px`};
  height: ${({ size }) => `${size || 1}px`};
  box-shadow: ${({ count }) => generateStars(count || 100)};
`;
