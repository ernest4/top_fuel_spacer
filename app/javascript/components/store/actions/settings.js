import { createAction } from "redux-actions";

export const setGraphics = createAction("SET_GRAPHICS");
export const setHover = createAction("SET_HOVER");
export const setMusicPlayer = createAction("SET_MUSIC_PLAYER");
export const setFollowCursor = createAction("SET_FOLLOW_CURSOR");
export const setFollowCursorValue = createAction("SET_FOLLOW_CURSOR_VALUE");
export const setBasic = createAction("SET_BASIC");
export const setBasicValue = createAction("SET_BASIC_VALUE");
export const resetAll = createAction("RESET_ALL");
