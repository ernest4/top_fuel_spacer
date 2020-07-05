import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";

// TODO: add 2 talking astronauts
const RightSupportPlatform = () => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  // const stagesLength = useSelector(state => state.launchSequence.stages.length);

  if (3 <= currentStageId) return null;

  const transform = currentStageId === 1 || currentStageId === 2 ? "translate(5vw, 0px)" : "";

  const backgroundGradient =
    "repeating-linear-gradient( -55deg,hsl(207,24%,45%),hsl(207,24%,30%) 5px,transparent 5px,transparent 20px )";

  const foregroundGradient =
    "repeating-linear-gradient( 55deg,hsla(207, 33%, 50%, 1),hsla(207, 33%, 85%, 1) 5px,transparent 5px,transparent 20px )";

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
        borderRadius: "0px 100% 0px 0px",
        border: "4px solid hsl(207,24%,78%)",
        background: backgroundGradient,
      }}
    >
      <Spacing
        {...{
          background: foregroundGradient,
          borderRadius: "0px 100% 0px 0px",
          width: "100%",
          height: "100%",
        }}
      />
    </Spacing>
  );
};

export default RightSupportPlatform;
