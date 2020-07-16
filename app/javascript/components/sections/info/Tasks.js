import React from "react";
import Card from "../../layout/Card";
import Button from "../../misc/Button";
import Spacing from "../../layout/Spacing";
import { useSelector } from "react-redux";
import { prettyPrintSnake } from "../../utils/String";

// TODO: can probably extract this whole page into a generic component both Tasks, Collectibles, Achievmenets, etc can use
const Tasks = () => {
  const currentSectionId = useSelector(state => state.antFarm.currentSectionId);
  const name = useSelector(state => state.antFarm.sections[currentSectionId].name);

  return (
    <Card
      split
      {...{
        header: { title: "Tasks", subtitles: [prettyPrintSnake(name)] },
        body: [<TasksProgress />, ...getTaskList()],
      }}
    />
  );
};

export default Tasks;

const TasksProgress = () => {
  return (
    <Card
      {...{ header: { subtitles: ["Progress"] }, body: `Progress for all the tasks wip/wip, wip%` }}
    />
  );
};

const getTaskList = () => {
  return [
    <div>card testin1</div>,
    <div>card testin2</div>,
    <div>card testin3</div>,
    <div>card testin4</div>,
  ];
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
