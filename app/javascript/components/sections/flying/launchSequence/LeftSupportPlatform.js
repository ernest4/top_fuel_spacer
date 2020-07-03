import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";

// TODO: add 2 talking astronauts
const LeftSupportPlatform = () => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  // const stagesLength = useSelector(state => state.launchSequence.stages.length);

  if (3 <= currentStageId) return null;

  return (
    <Spacing
      {...{
        z: 1,
        background: "red",
        width: "50px",
        height: "33vh",
        position: "fixed",
        transform: getTransform(currentStageId),
        transformOrigin: "bottom right",
        transition: "transform 7s linear",
      }}
    />
  );
};

export default LeftSupportPlatform;

const getTransform = stageId => {
  if (stageId === 1 || stageId === 2) return "rotate(-90deg)";
  // if (3 <= stageId) return "rotate(-90deg) translate(100vh, 0px)";

  return "rotate(0deg)";
};
