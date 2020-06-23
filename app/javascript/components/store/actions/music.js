import { createAction } from "redux-actions";

export const setSong = createAction("SET_SONG");
export const setDock = createAction("SET_DOCK");
export const setVolume = createAction("SET_VOLUME");
export const setPlaying = createAction("SET_PLAYING");
export const setDuration = createAction("SET_DURATION");
export const setCurrentTime = createAction("SET_CURRENT_TIME");
