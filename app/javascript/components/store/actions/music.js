import { createAction } from "redux-actions";

export const setCurrentSong = createAction("SET_CURRENT_SONG");
export const setDock = createAction("SET_DOCK");
export const setVolume = createAction("SET_VOLUME");
export const setPlaying = createAction("SET_PLAYING");
export const setDuration = createAction("SET_DURATION");
export const setCurrentTime = createAction("SET_CURRENT_TIME");
export const setSkipTime = createAction("SET_SKIP_TIME");
export const setFinished = createAction("SET_FINISHED");
