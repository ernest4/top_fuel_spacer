import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";

// TODO: need local state persistance !!
// probs have a save game component that periodicaly backs up the state. mayeb use score component
// to track time and send signal to save game component.
let initialState = {
  currentStageId: 0,
  stages: [
    { id: 0, name: "docked" }, // audio 0s
    { id: 1, name: "detaching" },
    { id: 2, name: "engine power up" }, // audio 7s
    { name: "lift off" }, // audio 20s
    { name: "boosters detach" }, // audio 27s -  end
    { name: "flying, play music" },
  ],
};

if (debugFlag) {
  initialState = {
    currentStageId: 0,
    stages: [{ id: 0, name: "docked" }],
  };
}

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const launchSequenceReducer = handleActions(
  {
    SET_CURRENT_STAGE_ID: produce((state, { payload }) => {
      state.currentStageId = payload;
      // console.log(payload);
    }),
  },
  initialState
);

// export default reduceReducers(launchSequenceReducer, otherReducer, someOtherReducer);
export default reduceReducers(launchSequenceReducer);
