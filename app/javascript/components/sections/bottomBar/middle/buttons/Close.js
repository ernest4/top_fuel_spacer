import React from "react";
import Button from "../../../../misc/Button";
import { useDispatch, batch } from "react-redux";
import * as antFarmActions from "../../../../store/actions/antFarm";
import { setCurrentPageId } from "../../../../store/actions/info";

const Close = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    batch(() => {
      dispatch(antFarmActions.setCurrentSectionId(null));
      dispatch(setCurrentPageId(null));
    });
  };

  return <Button right danger {...{ children: "close", onClick: onClose }} />;
};

export default Close;
