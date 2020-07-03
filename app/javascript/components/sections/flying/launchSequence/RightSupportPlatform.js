import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";

// TODO: add 2 talking astronauts
const RightSupportPlatform = () => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  // const stagesLength = useSelector(state => state.launchSequence.stages.length);

  if (3 <= currentStageId) return null;

  const transform = currentStageId === 1 || currentStageId === 2 ? "translate(5vw, 0px)" : "";

  return (
    <Spacing
      {...{
        background: "pink",
        width: "50px",
        height: "16vh",
        position: "absolute",
        // absoluteBottom: "39vh",
        absoluteLeft: "138px",
        absoluteBottom: "0px",
        transform,
        transition: "transform 5s",
      }}
    />
  );
};

export default RightSupportPlatform;
