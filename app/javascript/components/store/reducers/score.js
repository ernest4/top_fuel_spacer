import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";

let initialState = {
  distance: 0, // m
  speed: 100, // m/s
  acceleration: 0, // m/s^2 // TODO: set this to initial value, fuel permitting
};

if (debugFlag) {
  initialState = {
    distance: 1000,
    speed: 100,
    acceleration: 10, // TODO: experiment with the initial acceleration
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
      // console.log(payload);
    }),
    SET_SPEED: produce((state, { payload }) => {
      state.speed = payload;
    }),
  },
  initialState
);

// export default reduceReducers(scoreReducer, otherReducer, someOtherReducer);
export default reduceReducers(scoreReducer);
