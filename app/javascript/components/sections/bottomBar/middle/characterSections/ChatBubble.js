import React from "react";
import Spacing from "../../../../layout/Spacing";
import Draggable from "../../../../layout/Draggable";
import { setAlpha } from "../../../../utils/Color";
import useTheme from "../../../../hooks/useTheme";
import Card from "../../../../layout/Card";
import { useSelector } from "react-redux";

const ChatBubble = () => {
  const { closest } = useTheme();

  const conversationsShow = useSelector(state => state.conversations.show);
  const conversations = useSelector(state => state.conversations.conversations);
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const characterId = useSelector(state => state.antFarm.sections[currentSectionId]?.characterId);

  if (!conversationsShow) return null;

  return (
    <Draggable
      useButton
      {...{
        all: 2,
        background: setAlpha({ hsla: closest, alpha: 0.95 }),
        borderRadius: "24px",
        // position: "absolute",
        absoluteLeft: "29vw",
        // absoluteTop: "-68vh",
        absoluteTop: "16vh",
        width: "41vw",
        height: "50vh",
      }}
    >
      <Spacing
        scroll
        {...{ children: getConversationsList({ conversations, currentCharacterId: characterId }) }}
      />
    </Draggable>
  );
};

export default ChatBubble;

const getConversationsList = ({ conversations, currentCharacterId }) => {
  return conversations
    .filter(({ characterId }) => characterId === currentCharacterId)
    .map(({ name, description }, index) => {
      return (
        <Card
          {...{
            header: { subtitles: [name] },
            body: description,
          }}
        />
      );
    });
};
