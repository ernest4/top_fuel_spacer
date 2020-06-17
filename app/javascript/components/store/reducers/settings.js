import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  graphics: { hover: { followCursor: true } }, // set to false for improved performance
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
      state.hover = payload;
    }),
  },
  initialState
);

// export default reduceReducers(settingsReducer, otherReducer, someOtherReducer);
export default reduceReducers(settingsReducer, graphicsReducer);
