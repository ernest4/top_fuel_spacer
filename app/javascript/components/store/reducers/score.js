import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";

let initialState = {
  distance: 0,
  speed: 0,
};

if (debugFlag) {
  initialState = {
    distance: 0,
    speed: 0,
  };
}

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const scoreReducer = handleActions(
  {
    SET_DISTANCE: produce((state, { payload }) => {
      state.distance = payload;
    }),
    SET_SPEED: produce((state, { payload }) => {
      state.speed = payload;
    }),
  },
  initialState
);

// export default reduceReducers(scoreReducer, otherReducer, someOtherReducer);
export default reduceReducers(scoreReducer);
