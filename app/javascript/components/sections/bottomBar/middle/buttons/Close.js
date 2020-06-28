import React from "react";
import Button from "../../../../misc/Button";
import { useDispatch } from "react-redux";
import * as antFarmActions from "../../../../store/actions/antFarm";

const Close = () => {
  const dispatch = useDispatch();

  const onClose = () => dispatch(antFarmActions.setCurrentSectionId(null));

  return <Button right danger {...{ children: "close", onClick: onClose }} />;
};

export default Close;
