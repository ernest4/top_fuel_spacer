import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// TODO: flatten this state! apparently normalized state is faster for redux than nested one\1
const initialState = {
  graphics: {
    hover: {
      followCursor: true, // set to false for improved performance 25% (dynamic)
    },
    musicPlayer: {
      basic: false, // set to false for improved performance 5% (fixed)
    },
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
  },
  initialState
);

const graphicsReducer = handleActions(
  {
    SET_HOVER: produce((state, { payload }) => {
      state.graphics.hover = payload;
    }),
    SET_MUSIC_PLAYER: produce((state, { payload }) => {
      state.graphics.musicPlayer = payload;
    }),
  },
  initialState
);

// export default reduceReducers(settingsReducer, otherReducer, someOtherReducer);
export default reduceReducers(settingsReducer, graphicsReducer);
