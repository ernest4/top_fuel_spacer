import React, { useEffect } from "react";
import Spacing from "../../../layout/Spacing";
import { useSelector, useDispatch, batch } from "react-redux";
import { setRunning } from "../../../store/actions/game";
import useSound from "../../../hooks/useSound";
import { setPlaying } from "../../../store/actions/music";
import { setCurrentStageId } from "../../../store/actions/launchSequence";

const LaunchOrchestrator = () => {
  const dispatch = useDispatch();

  const src = useSelector(state => state.sounds.sounds[0].src);
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  const stagesLength = useSelector(state => state.launchSequence.stages.length);

  const { playing, toggle: toggleLaunchSound, currentTime } = useSound({ src, debugTime: true });

  useEffect(() => {
    if (!src || !toggleLaunchSound) return;

    if (currentStageId === 1) toggleLaunchSound();
  }, [currentStageId, src]);

  useEffect(() => {
    if (currentTime === 7) dispatch(setCurrentStageId(2));
    if (currentTime === 20) dispatch(setCurrentStageId(3));
    if (currentTime === 27) dispatch(setCurrentStageId(4));
    if (currentTime === 29) dispatch(setCurrentStageId(5));
  }, [currentTime, dispatch]);

  useEffect(() => {
    if (!dispatch) return;
    if (stagesLength == null || stagesLength == undefined) return;

    if (!playing && currentStageId === stagesLength - 1) {
      batch(() => {
        dispatch(setRunning(true));
        dispatch(setPlaying(true));
      });
    }
  }, [playing, dispatch, currentStageId, stagesLength]);

  return <Spacing position="fixed" />;
};

export default LaunchOrchestrator;
