import React from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Button from "../../../misc/Button";
import { css, keyframes } from "styled-components";
import Chat from "./buttons/Chat";
import Close from "./buttons/Close";

const ButtonSection = () => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);

  if (currentSectionId === null) return null;

  // const buttons = useSelector(state => state.antFarm.sections[currentSectionId]?.buttons);

  // const buttons = [
  //   "chat",
  //   "research", // [optional] -> research / build / hack / grow / fight (pirate) / etc
  //   "tasks", // [optional] -> your missions / quests for this character
  //   "collectibles", // -> [optional] show up on certain characters
  //   "close",
  // ];

  const buttons = [<Chat />];

  // TODO: conditionally assembled buttons
  // buttons.push(...)
  buttons.push(<Button primary children="research" />); // WIP placeholder
  buttons.push(<Button secondary children="tasks" />); // WIP placeholder
  buttons.push(<Button secondary children="collectibles" />); // WIP placeholder

  buttons.push(<Close />);

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
            animation-duration: .25s;
            ${"" /* animation-timing-function: ease; */}
            ${"" /* animation-delay: 0s; */}
            ${"" /* animation-iteration-count: 1; */}
            ${"" /* animation-direction: normal; */}
            ${"" /* animation-fill-mode: forwards; */}
            ${"" /* animation-play-state: running; */}
          `,
      }}
    >
      {buttons.map((button, key) => {
        const left = key === buttons.length - 1 ? 4 : 1;

        return <Spacing {...{ all: 1, left, key, children: button }} />;
      })}
    </Spacing>
  );
};

export default ButtonSection;
