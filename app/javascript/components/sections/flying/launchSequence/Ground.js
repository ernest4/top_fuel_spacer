import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import { css } from "styled-components";
import useTheme from "../../../hooks/useTheme";

const Ground = () => {
  const { black } = useTheme();

  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  // const name = useSelector(state => state.launchSequence.stages[currentStageId].name);
  // const stagesLength = useSelector(state => state.launchSequence.stages.length);

  // if (currentStageId === stagesLength - 1) return null;
  if (3 <= currentStageId) return null;

  return (
    <Spacing
      {...{
        background: `linear-gradient(0deg, ${black}, ${black}, ${black}, ${black}, ${black}, ${black}, ${black}, #b9c8d4)`,
        width: "32vw",
        position: "fixed",
        absoluteTop: "61vh",
        absoluteLeft: "0px",
        height: "100%",
        transition: "transform 32s cubic-bezier(0,1.38,0,.86)",
        // transform: 3 <= currentStageId ? "translate(0px, 100vh)" : "",
        css: css`
          border-top: 4px solid white;
        `,
      }}
    />
  );
};

export default Ground;
