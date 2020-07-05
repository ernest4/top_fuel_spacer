import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";

// TODO: add 2 talking astronauts
const LeftSupportPlatform = () => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  // const stagesLength = useSelector(state => state.launchSequence.stages.length);

  if (3 <= currentStageId) return null;

  const backgroundGradient =
    "repeating-linear-gradient( -55deg, hsl(207, 24%, 45%), hsl(207, 24%, 30%) 5px, transparent 5px, transparent 20px )";

  const foregroundGradient =
    "repeating-linear-gradient( 55deg,hsla(207, 33%, 50%, 1),hsla(207, 33%, 85%, 1) 5px,transparent 5px,transparent 20px )";

  return (
    <Spacing
      {...{
        z: 1,
        background: backgroundGradient,
        border: "4px solid #b9c8d4",
        width: "50px",
        height: "33vh",
        position: "fixed",
        transform: getTransform(currentStageId),
        transformOrigin: "bottom right",
        transition: "transform 7s linear",
        borderRadius: "4px 4px 0px 0px",
      }}
    >
      <Spacing {...{ background: foregroundGradient, width: "100%", height: "100%" }} />
    </Spacing>
  );
};

export default LeftSupportPlatform;

const getTransform = stageId => {
  if (stageId === 1 || stageId === 2) return "rotate(-90deg)";
  // if (3 <= stageId) return "rotate(-90deg) translate(100vh, 0px)";

  return "rotate(0deg)";
};
