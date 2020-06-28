import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";

let initialState = {
  currentAchievementId: null,
  achievements: [
    {
      id: 0,
      name: "Audiophile",
      description: "Listen to every music track in the game.",
      required: 9,
      completed: 0,
    },
    {
      id: 1,
      name: "3... 2... 1... Liftoff!",
      description: "Launch into the cosmos.",
      required: 1,
      completed: 0,
    },
  ],
};

if (debugFlag) {
  initialState = {
    currentAchievementId: null,
    achievements: [
      {
        id: 0,
        name: "Audiophile",
        description: "Listen to every music track in the game.",
        required: 9,
        completed: 4,
      },
      {
        id: 1,
        name: "3... 2... 1... Liftoff!",
        description: "Launch into the cosmos.",
        required: 1,
        completed: 0,
      },
    ],
  };
}

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const achievementsReducer = handleActions(
  {
    SET_CURRENT_ACHIEVEMENT_ID: produce((state, { payload }) => {
      state.currentAchievementId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(achievementsReducer, otherReducer, someOtherReducer);
export default reduceReducers(achievementsReducer);
