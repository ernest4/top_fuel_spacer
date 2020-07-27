import React, { useEffect } from "react";
import Card from "../../../layout/Card";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "../../../misc/ProgressBar";
import { setSectionBuildCompletion, setCurrentSectionId } from "../../../store/actions/antFarm";

const Item = ({ sectionId }) => {
  const dispatch = useDispatch();

  const distance = useSelector(state => state.score.distance); // will give periodic ticks
  const speed = useSelector(state => state.score.speed);

  const level = useSelector(state => state.player.level);

  const name = useSelector(state => state.antFarm.sections[sectionId].name);
  const hover = useSelector(state => state.antFarm.sections[sectionId].hover);
  const levelRequired = useSelector(state => state.antFarm.sections[sectionId].levelRequired);
  const buildCompletion = useSelector(state => state.antFarm.sections[sectionId].buildCompletion);
  const buildCompletionRequirement = useSelector(
    state => state.antFarm.sections[sectionId].buildCompletionRequirement
  );

  useEffect(() => {
    if (buildCompletion === 0) return; // havent begun building yet...
    if (buildCompletionRequirement <= buildCompletion) return; // building done, stop update spam

    dispatch(
      setSectionBuildCompletion({ id: sectionId, buildCompletion: buildCompletion + speed })
    );
  }, [distance, dispatch]);

  const onSectionClick = () => dispatch(setCurrentSectionId(sectionId));

  const onBuild = () => {
    if (buildCompletion !== 0) return; // begun building

    dispatch(setSectionBuildCompletion({ id: sectionId, buildCompletion: speed }));
  };

  if (level < levelRequired)
    return (
      <Card
        {...{
          hover: (
            <Card
              border
              {...{
                header: {
                  title: "locked",
                  subtitles: [`Must be level ${levelRequired} to unlock!`],
                },
              }}
            />
          ),
          header: { title: name },
        }}
      />
    );

  if (buildCompletion < buildCompletionRequirement)
    return (
      <Card
        {...{
          hover: (
            <Card
              border
              {...{
                header: {
                  title: buildCompletion === 0 ? "Construction available" : "Constructing",
                  subtitles:
                    buildCompletion === 0
                      ? ["Click to begin construction"]
                      : [
                          "Progress",
                          `${Math.floor(buildCompletion)}/${buildCompletionRequirement}`,
                        ],
                },
              }}
            />
          ),
          onClick: onBuild,
          header: { title: name, subtitles: ["Construction in progress"] },
          body: (
            <ProgressBar
              {...{ value: buildCompletion, range: buildCompletionRequirement, resolution: 10 }}
            />
          ),
        }}
      />
    );

  return (
    <Card
      {...{
        onClick: onSectionClick,
        hover: <Card border {...hover} />,
        header: { title: name, subtitles: [] },
        body: <div>top current task (wip)</div>,
        footer: <div>extra info here (wip)</div>,
      }}
    />
  );
};

export default Item;
