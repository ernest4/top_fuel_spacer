import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  morality: 0, // the renegade (negative) / paragon (positive) score
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const playerReducer = handleActions(
  {
    // SHOW_UI: produce((state, { payload }) => {
    //   state.showUi = payload;
    // }),
  },
  initialState
);

// export default reduceReducers(playerReducer, otherReducer, someOtherReducer);
export default reduceReducers(playerReducer);
