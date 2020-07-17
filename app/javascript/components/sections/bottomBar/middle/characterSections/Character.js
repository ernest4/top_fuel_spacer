import React from "react";
import ChatBubble from "./ChatBubble";
import Card from "../../../../layout/Card";
import { getRandom } from "../../../../utils/Array";
import { useSelector } from "react-redux";
import Spacing, { SPACING } from "../../../../layout/Spacing";

const Character = () => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const characterId = useSelector(state => state.antFarm.sections[currentSectionId]?.characterId);

  if (characterId === null || characterId === undefined) return null;

  return (
    <>
      <Spacing
        {...{
          width: "150px",
          height: "150px",
          background: "rgba(0, 128, 0, 0.48)",
          position: "absolute",
          absoluteLeft: `${32 * SPACING}px`,
          absoluteBottom: `${6 * SPACING}px`,
          z: "-1",
          hover: <Hover />,
        }}
      >
        character
      </Spacing>
      <ChatBubble />
    </>
  );
};

export default Character;

const GREETINGS = [
  "What can I do for you, Commander?",
  "Lovely day isn't it, Commander?",
  "Greetings, Commander!",
  "Yes, Commander?",
  "Sir?",
];

const Hover = () => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const characterId = useSelector(state => state.antFarm.sections[currentSectionId]?.characterId);
  const { name, qualification, description } = useSelector(
    state => state.characters.characters[characterId]
  );

  return (
    <Card
      border
      {...{
        header: { title: name, subtitles: [qualification] },
        body: description,
        footer: getRandom(GREETINGS),
      }}
    />
  );
};
