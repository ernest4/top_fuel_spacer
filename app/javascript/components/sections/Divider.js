import React from "react";
import { useSelector } from "react-redux";
import Spacing from "../layout/Spacing";

const CONSTRUCTION_YELLOW = "#f8c602";

const Divider = () => {
  const black = useSelector(state => state.theme.color.black);

  const background = `repeating-linear-gradient(
    -55deg,
    ${black},
    ${black} 10px,
    ${CONSTRUCTION_YELLOW} 10px,
    ${CONSTRUCTION_YELLOW} 20px
  )`;

  return <Spacing {...{ width: "5%", height: "100vh", background }} />;
};

export default Divider;
