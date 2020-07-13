import React from "react";
import { useSelector } from "react-redux";
import Text from "../../layout/Text";

const RocketName = () => {
  const name = useSelector(state => state.rocket.name);

  return <Text children={name} />;
};

export default RocketName;
