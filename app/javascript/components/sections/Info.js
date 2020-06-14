import React from "react";
import Spacing from "../layout/Spacing";
import { useSelector } from "react-redux";

const Info = () => {
  const {
    theme: {
      color: { background },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing scroll {...{ height: "100vh", width: "100%", background }}>
      <div style={{ height: 5000 }}>Info</div>
    </Spacing>
  );
};

export default Info;
