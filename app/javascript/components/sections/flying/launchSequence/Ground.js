import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";

const Ground = () => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  // const name = useSelector(state => state.launchSequence.stages[currentStageId].name);
  // const stagesLength = useSelector(state => state.launchSequence.stages.length);

  // if (currentStageId === stagesLength - 1) return null;
  if (3 <= currentStageId) return null;

  return (
    <Spacing
      {...{
        background: "green",
        width: "32vw",
        position: "fixed",
        absoluteTop: "61vh",
        absoluteLeft: "0px",
        height: "100%",
        transition: "transform 32s cubic-bezier(0,1.38,0,.86)",
        // transform: 3 <= currentStageId ? "translate(0px, 100vh)" : "",
      }}
    />
  );
};

export default Ground;
