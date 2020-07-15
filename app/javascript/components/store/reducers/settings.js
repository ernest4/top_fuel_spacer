import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// TODO: flatten this state! apparently normalized state is faster for redux than nested one\1
const initialState = {
  graphics: {
    hover: {
      followCursor: {
        value: true,
        info: "Set to <p>false</p> for <s>25% performance</s> improvement.",
      },
    },
    musicPlayer: {
      basic: { value: false, info: "Set to <p>true</p> for <s>5% performance</s> improvement." },
    },
  },
  audio: {
    wip: {},
  },
  progress: {
    wip: {},
  },
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const settingsReducer = handleActions(
  {
    SET_GRAPHICS: produce((state, { payload }) => {
      state.graphics = payload;
    }),
    RESET_ALL: produce((state, { payload }) => {
      return initialState;
    }),
  },
  initialState
);

const graphicsReducer = handleActions(
  {
    SET_HOVER: produce((state, { payload }) => {
      state.graphics.hover = payload;
    }),
    SET_FOLLOW_CURSOR: produce((state, { payload }) => {
      state.graphics.hover.followCursor = payload;
    }),
    SET_FOLLOW_CURSOR_VALUE: produce((state, { payload }) => {
      state.graphics.hover.followCursor.value = payload;
    }),
    SET_MUSIC_PLAYER: produce((state, { payload }) => {
      state.graphics.musicPlayer = payload;
    }),
    SET_BASIC: produce((state, { payload }) => {
      state.graphics.musicPlayer.basic = payload;
    }),
    SET_BASIC_VALUE: produce((state, { payload }) => {
      state.graphics.musicPlayer.basic.value = payload;
    }),
  },
  initialState
);

// export default reduceReducers(settingsReducer, otherReducer, someOtherReducer);
export default reduceReducers(settingsReducer, graphicsReducer);
