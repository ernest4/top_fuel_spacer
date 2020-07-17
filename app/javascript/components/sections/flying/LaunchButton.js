import React from "react";
import Button from "../../misc/Button";
import Text from "../../layout/Text";
import { useDispatch, useSelector, batch } from "react-redux";
import useTheme from "../../hooks/useTheme";
// import * as gameActions from "../../store/actions/game";
import { setCurrentStageId } from "../../store/actions/launchSequence";
import { setAchievementById } from "../../store/actions/achievements";

// TODO: add stripes animation to draw more attention!
const LaunchButton = () => {
  const dispatch = useDispatch();

  const currentStageId = useSelector(state => state.launchSequence.currentStageId);

  const { primary } = useTheme();

  if (1 <= currentStageId) return null;

  const background = `repeating-linear-gradient(
    -35deg, hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0) 10px,
    ${primary} 10px,
    ${primary} 20px )`;

  // const onLaunch = () => dispatch(gameActions.setRunning(true));
  const onLaunch = () =>
    batch(() => {
      dispatch(setCurrentStageId(1));
      dispatch(setAchievementById({ id: 1, completed: 1 }));
    });

  return (
    <Button
      primary
      large
      {...{
        children: (
          <Text
            capitalize
            white
            bold
            extraLarge
            {...{ transform: `skew(-30deg, 0deg)`, children: "Launch" }}
          />
        ),
        innerProps: { background },
        onClick: onLaunch,
      }}
    />
  );
};

export default LaunchButton;
