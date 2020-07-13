import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentSectionId: null,
  sections: [
    {
      id: 0,
      name: "head",
      characterId: null,
      unlocked: true,
    },
    {
      id: 1,
      name: "comms",
      characterId: 0,
      unlocked: true,
    },
    {
      id: 2,
      name: "command",
      characterId: 1,
      unlocked: true
    },
    {
      id: 3,
      name: "main_entrance",
      characterId: 0,
      // unlocked: true
    },
    {
      id: 4,
      name: "cargo",
      characterId: 1,
      // unlocked: true
    },
    {
      id: 5,
      name: "barracks",
      characterId: 0,
      // unlocked: true
    },
    {
      id: 6,
      name: "life_support",
      characterId: 1,
      // unlocked: true
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const antFarmReducer = handleActions(
  {
    SET_CURRENT_SECTION_ID: produce((state, { payload }) => {
      state.currentSectionId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(antFarmReducer, otherReducer, someOtherReducer);
export default reduceReducers(antFarmReducer);
