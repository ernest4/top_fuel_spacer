import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentCollectibleId: null,
  doneCount: 0,
  collectibles: [
    {
      id: 0,
      name: "Collectible 0",
      description: "testy description - 0",
      sectionId: 2,
      required: 10,
      completed: 0,
    },
    {
      id: 1,
      name: "Collectible 1",
      description: "testy description - 1",
      sectionId: 2,
      required: 10,
      completed: 0,
    },
    {
      id: 2,
      name: "Collectible 2",
      description: "testy description - 2",
      sectionId: 2,
      required: 10,
      completed: 0,
    },
    {
      id: 3,
      name: "Collectible 3",
      description: "testy description - 3",
      sectionId: 2,
      required: 10,
      completed: 0,
    },
    {
      id: 4,
      name: "Collectible 4",
      description: "testy description - 4",
      sectionId: 3,
      required: 10,
      completed: 0,
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const collectiblesReducer = handleActions(
  {
    SET_CURRENT_TASK_ID: produce((state, { payload }) => {
      state.currentCollectibleId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(collectiblesReducer, otherReducer, someOtherReducer);
export default reduceReducers(collectiblesReducer);
