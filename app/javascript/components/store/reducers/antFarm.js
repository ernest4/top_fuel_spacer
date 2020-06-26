import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentSectionId: null,
  sections: [
    {
      id: 0,
      name: "Comms",
      characterId: 0,
    },
    {
      id: 1,
      name: "Command",
      characterId: 1,
    },
    {
      id: 2,
      name: "Main Entrance",
      characterId: 0,
    },
    {
      id: 3,
      name: "Cargo",
      characterId: 1,
    },
    {
      id: 4,
      name: "Barracks",
      characterId: 0,
    },
    {
      id: 5,
      name: "Life Support",
      characterId: 1,
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
