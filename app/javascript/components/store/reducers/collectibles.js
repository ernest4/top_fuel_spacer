import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentCollectibleId: null,
  collectibles: [
    {
      id: 0,
      name: "Collectible 0",
      description: "testy description - 0",
      unlocked: true,
      sectionId: 2,
      done: false,
    },
    {
      id: 1,
      name: "Collectible 1",
      description: "testy description - 1",
      unlocked: true,
      sectionId: 2,
      done: false,
    },
    {
      id: 2,
      name: "Collectible 2",
      description: "testy description - 2",
      unlocked: false,
      sectionId: 2,
      done: false,
    },
    {
      id: 3,
      name: "Collectible 3",
      description: "testy description - 3",
      unlocked: false,
      sectionId: 2,
      done: false,
    },
    {
      id: 4,
      name: "Collectible 4",
      description: "testy description - 4",
      unlocked: true,
      sectionId: 3,
      done: false,
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
