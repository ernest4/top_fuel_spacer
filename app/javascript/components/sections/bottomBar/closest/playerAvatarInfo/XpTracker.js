import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import * as playerActions from "../../../../store/actions/player";

const XpTracker = () => {
  const dispatch = useDispatch();
  const distance = useSelector(state => state.score.distance);

  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);
  const level = useSelector(state => state.player.level);

  useEffect(() => {
    if (distance) dispatch(playerActions.setXp(distance / 10));
  }, [distance, dispatch]);

  useEffect(() => {
    if (xp) {
      if (levelUpXp < xp) {
        batch(() => {
          dispatch(playerActions.setLevel(level + 1));
          disptach(
            playerActions.setLevelUpXp(
              getXpRequiredForNextLevel({ currentLevel: level, initialLevelUpXpRequired: 100 })
            )
          );
        });
      }
    }
  }, [xp, levelUpXp, level, dispatch]);

  return <div />;
};

export default XpTracker;

// TODO: need better name for this method and variables !!!
const getXpRequiredForNextLevel = ({ currentLevel, initialLevelUpXpRequired }) => {
  return currentLevel * currentLevel * initialLevelUpXpRequired;
};
