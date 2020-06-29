import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";
import { getRandom } from "../../utils/Array";

const NAMES = ["Merry Way", "White Submarine", "Random Name 674"];

let initialState = {
  name: getRandom(NAMES),
  fuel: 100,
  kineticEnergy: 0,
};

if (debugFlag) {
  initialState = {
    // name: "Going Merry",
    name: getRandom(NAMES),
    fuel: 100,
    kineticEnergy: 0,
  };
}

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const shipReducer = handleActions(
  {
    SET_NAME: produce((state, { payload }) => {
      state.name = payload;
    }),
  },
  initialState
);

// export default reduceReducers(shipReducer, otherReducer, someOtherReducer);
export default reduceReducers(shipReducer);
