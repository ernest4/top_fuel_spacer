import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";
const { initialState: musicInitialState } = require("./music");

// Complete 1 Task: 'Beginner'
// Complete 10 Tasks: 'Multitasker'
// Complete 100 Tasks: 'Taskmaster'
let initialState = {
  currentAchievementId: null,
  doneCount: 0,
  achievements: [
    {
      id: 0,
      name: "Audiophile",
      description: "Listen to every sound track in the game.",
      sectionId: 2,
      required: musicInitialState.songs.map(({ title }) => title),
      completed: [],
    },
    {
      id: 1,
      name: "3... 2... 1... Liftoff!",
      description: "Launch into the cosmos.",
      sectionId: 2,
      required: 1,
      completed: 0,
    },
    // {
    //   id: 2,
    //   name: "Socialite",
    //   description: "Chat to every member of your crew.",
    //   sectionId: 2,
    //   required: ....,
    //   completed: [],
    // },
  ],
};

if (debugFlag) {
  initialState = {
    currentAchievementId: null,
    doneCount: 1,
    achievements: [
      {
        id: 0,
        name: "Audiophile",
        description: "Listen to every sound track in the game.",
        sectionId: 2,
        required: musicInitialState.songs.map(({ title }) => title),
        completed: musicInitialState.songs.map(({ title }) => title).slice(0, 4),
      },
      {
        id: 1,
        name: "3... 2... 1... Liftoff!",
        description: "Launch into the cosmos.",
        sectionId: 2,
        required: 1,
        completed: 1,
      },
      // {
      //   id: 2,
      //   name: "Socialite",
      //   description: "Chat to every member of your crew.",
      //   sectionId: 2,
      //   required: ....,
      //   completed: [],
      // },
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
