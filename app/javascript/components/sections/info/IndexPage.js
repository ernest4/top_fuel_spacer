import React from "react";
import Card from "../../layout/Card";
import Button from "../../misc/Button";
import Spacing from "../../layout/Spacing";
import { useSelector } from "react-redux";
import { prettyPrintSnake } from "../../utils/String";

// TODO: can probably extract this whole page into a generic component both Tasks, Collectibles, Achievmenets, etc can use
const IndexPage = ({ reducerName }) => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const name = useSelector(state => state.antFarm.sections[currentSectionId].name);
  const sectionsLength = useSelector(state => state.antFarm.sections.length);

  const items = useSelector(state => state[reducerName][reducerName]);

  if (currentSectionId === 0 || currentSectionId === sectionsLength - 1) return null;

  return (
    <Card
      split
      {...{
        header: { title: reducerName, subtitles: [prettyPrintSnake(name)] },
        body: [<ItemsProgress {...{ reducerName }} />, ...getItemList({ items, currentSectionId })],
      }}
    />
  );
};

export default IndexPage;

const ItemsProgress = ({ reducerName }) => {
  return (
    <Card
      {...{
        header: { subtitles: ["Progress"] },
        body: `Progress for all the ${reducerName} wip/wip, wip%`,
      }}
    />
  );
};

// TODO: locked tasks are muted, greyed out.
// TODO: done tasks are primary color and say 'completed'.
const getItemList = ({ items, currentSectionId }) => {
  return items
    .filter(({ sectionId }) => sectionId === currentSectionId)
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

{
  /* <Card
            {...{
              header: { subtitles: ["Nihilore"] },
              body: `This game uses music by Nihilore. His royalty free music is an outstanding resource for developers on a budget.
              <space />
              The soundtrack files in use were compressed. No other modifications were done on them beyond that.`,
              footer: (
                <Spacing top={1}>
                  <Button
                    right
                    small
                    tertiary
                    {...{
                      link: "http://www.nihilore.com/",
                      children: "Nihilore",
                      innerProps: { center: true },
                    }}
                  />
                </Spacing>
              ),
            }}
          /> */
}
