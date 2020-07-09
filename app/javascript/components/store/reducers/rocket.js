import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";
import { getRandom } from "../../utils/Array";

const NAMES = ["Merry Way", "White Submarine", "Random Name 674", "Nyan Rocket"];

let initialState = {
  name: getRandom(NAMES),
  kineticEnergy: 0,
  kineticEnergyCapacity: 200,
  contactRange: 100,
};

if (debugFlag) {
  initialState = {
    // name: "Going Merry",
    name: getRandom(NAMES),
    kineticEnergy: 0,
    kineticEnergyCapacity: 200,
    contactRange: 100,
  };
}

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const rocketReducer = handleActions(
  {
    SET_NAME: produce((state, { payload }) => {
      state.name = payload;
    }),
    SET_FUEL: produce((state, { payload }) => {
      state.fuel = payload;
    }),
    SET_KINETIC_ENERGY: produce((state, { payload }) => {
      state.kineticEnergy = payload;
    }),
  },
  initialState
);

// export default reduceReducers(rocketReducer, otherReducer, someOtherReducer);
export default reduceReducers(rocketReducer);
