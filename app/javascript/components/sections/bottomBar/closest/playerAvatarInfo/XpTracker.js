import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { getXpRequired } from "../../../../utils/Progression";
import * as playerActions from "../../../../store/actions/player";

const XpTracker = () => {
  const dispatch = useDispatch();
  const distance = useSelector(state => state.score.distance);

  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);
  const level = useSelector(state => state.player.level);

  useEffect(() => {
    if (!dispatch) return;

    if (distance)
      dispatch(
        playerActions.setXp(
          normalizeXp(distance) - getXpRequired({ level: level - 1, levelOneXp: 100 })
        )
      );
  }, [distance, level, dispatch]);

  useEffect(() => {
    if (!dispatch) return;

    if (levelUpXp < xp) {
      const nextLevel = level + 1;

      batch(() => {
        dispatch(playerActions.setLevel(nextLevel));
        dispatch(
          playerActions.setLevelUpXp(
            getXpRequired({ level: nextLevel, levelOneXp: 100 }) -
              getXpRequired({ level, levelOneXp: 100 })
          )
        );
      });
    }
  }, [xp, levelUpXp, level, dispatch]);

  return <div />;
};

export default XpTracker;

const normalizeXp = xp => Math.floor(xp / 10);
