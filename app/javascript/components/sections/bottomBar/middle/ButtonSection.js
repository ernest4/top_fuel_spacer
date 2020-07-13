import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import { css, keyframes } from "styled-components";
import buttonComponents from "./buttons/index";

const ButtonSection = () => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);

  const sectionButtons = useSelector(state => state.antFarm.sections[currentSectionId]?.buttons);

  if (currentSectionId === null) return null;

  const buttons = [...sectionButtons, "Close"];

  return (
    <Spacing
      horizontal
      {...{
        width: "fit-content",
        css: css`
          animation-name: ${keyframes`
              0% { transform: translate(70vw, 0px); }
              100% { transform: translate(0vw, 0px); }
            `};
          animation-duration: 0.25s;
        `,
      }}
    >
      {buttons.map((button, key) => {
        const left = key === buttons.length - 1 ? 4 : 1;

        return <Spacing {...{ all: 1, left, key, children: buttonComponents[button] }} />;
      })}
    </Spacing>
  );
};

export default ButtonSection;
