import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";

const Info = () => {
  const background = useSelector(state => state.theme.theme.color.background);

  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <div style={{ height: 5000 }}>Info</div>
    </Spacing>
  );
};

export default Info;
