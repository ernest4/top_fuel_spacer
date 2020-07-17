import React from "react";
import Card from "../../layout/Card";
import { useSelector } from "react-redux";
import { prettyPrintSnake } from "../../utils/String";
import { isItemDone } from "../../store/reducers/achievements";
import TotalProgress from "./indexPage/TotalProgress";
import Progress from "./indexPage/Progress";

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
          <TotalProgress {...{ reducerName, itemsLength, doneCount }} />,
          ...getItemList({ items, currentSectionId }),
        ],
      }}
    />
  );
};

export default IndexPage;

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
