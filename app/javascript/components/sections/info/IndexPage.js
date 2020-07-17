import React from "react";
import Card from "../../layout/Card";
import { useSelector } from "react-redux";
import { prettyPrintSnake } from "../../utils/String";
import ProgressBar from "../../misc/ProgressBar";
import useTheme from "../../hooks/useTheme";

const IndexPage = ({ reducerName }) => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const name = useSelector(state => state.antFarm.sections[currentSectionId].name);
  const sectionsLength = useSelector(state => state.antFarm.sections.length);

  const items = useSelector(state => state[reducerName][reducerName]);
  const itemsLength = useSelector(state => state[reducerName][reducerName].length);
  const doneCount = useSelector(state => state[reducerName].doneCount);

  if (currentSectionId === 0 || currentSectionId === sectionsLength - 1) return null;

  return (
    <Card
      split
      {...{
        header: { title: reducerName, subtitles: [prettyPrintSnake(name)] },
        body: [
          <ItemsProgress {...{ reducerName, itemsLength, doneCount }} />,
          ...getItemList({ items, currentSectionId }),
        ],
      }}
    />
  );
};

export default IndexPage;

const ItemsProgress = ({ reducerName, itemsLength: required, doneCount: completed }) => {
  return (
    <Card
      {...{
        header: {
          subtitles: [
            "Total Progress",
            `${completed}/${required}`,
            `${Math.round((completed / required) * 100)}%`,
          ],
        },
        body: `Progress for all the ${reducerName}.`,
        footer: <Progress {...{ required, completed }} />,
      }}
    />
  );
};

const getItemList = ({ items, currentSectionId }) => {
  return items
    .filter(({ sectionId }) => sectionId === currentSectionId)
    .map(({ name, description, required, completed }, index) => {
      const done = isItemDone({ required, completed });

      let subtitles = [name];
      if (done) subtitles.push("DONE");

      return (
        <Card
          {...{
            primary: done,
            header: { subtitles },
            body: description,
            footer: <Progress {...{ required, completed }} />,
          }}
        />
      );
    });
};

const Progress = ({ required, completed }) => {
  const { required: range, completed: value } = normalizeRequiredCompleted({ required, completed });

  const { primary } = useTheme();

  const barBackground = range === value ? primary : null;

  return <ProgressBar {...{ barBackground, value, range }} />;
};

const normalizeRequiredCompleted = ({ required, completed }) => {
  let range = typeof required === "number" ? required : required.length;
  let value = typeof completed === "number" ? completed : completed.length;

  return { required: range, completed: value };
};

const isItemDone = ({ required, completed }) => {
  const { required: range, completed: value } = normalizeRequiredCompleted({ required, completed });

  return value === range;
};
