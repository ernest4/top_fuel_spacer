import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";

const VERSION = "0.2.0";

let initialState = {
  version: VERSION, // keep this value up to date as features and patches come !!
  running: false,
};

if (debugFlag) {
  initialState = {
    version: VERSION, // keep this value up to date as features and patches come !!
    running: true,
  };
}
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
