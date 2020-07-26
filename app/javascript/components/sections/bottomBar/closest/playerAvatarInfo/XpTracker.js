import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { getXpRequired } from "../../../../utils/Progression";
import * as playerActions from "../../../../store/actions/player";

const XpTracker = () => {
  const dispatch = useDispatch();
  const distance = useSelector(state => state.score.distance);
  const speed = useSelector(state => state.score.speed);

  const kineticEnergy = useSelector(state => state.rocket.kineticEnergy);

  const xp = useSelector(state => state.player.xp);
  const levelUpXp = useSelector(state => state.player.levelUpXp);
  const level = useSelector(state => state.player.level);

  useEffect(() => {
    if (!dispatch) return;

    if (distance) dispatch(playerActions.setXp(Math.floor(xp + speed + kineticEnergy)));
  }, [distance, dispatch]);

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
        dispatch(playerActions.setXp(0));
      });
    }
  }, [xp, levelUpXp, level, dispatch]);

  return <div />;
};

export default XpTracker;

const normalizeXp = xp => Math.floor(xp / 10);
