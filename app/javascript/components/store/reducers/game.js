import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  version: "0.1.0", // keep this value up to date as features and patches come !!
  running: false,
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const gameReducer = handleActions(
  {
    SET_RUNNING: produce((state, { payload }) => {
      state.running = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(gameReducer);
