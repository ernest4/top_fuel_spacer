import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  // TODO: there two places to store this, localStore for guest players and back end DB for logged in
  // users. For players who wish to do guest session only, they will need to be warned that once
  // they wish to join multiplayer, they will have to start from scratch (to prevent cheating)!
  // morality: 0, // the renegade (negative) / paragon (positive) score
  morality: 5, // the renegade (negative) / paragon (positive) score
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const playerReducer = handleActions(
  {
    SET_MORALITY: produce((state, { payload }) => {
      state.morality = payload;
    }),
  },
  initialState
);

// export default reduceReducers(playerReducer, otherReducer, someOtherReducer);
export default reduceReducers(playerReducer);
