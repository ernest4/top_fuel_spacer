import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// Tasks -> a.k.a missions / quests
const initialState = {
  currentTaskId: null,
  tasks: [
    {
      id: 0,
      name: "Task 0",
      description: "testy description 0",
      unlocked: true,
      sectionId: 2,
      done: false,
    },
    {
      id: 1,
      name: "Task 1",
      description: "testy description 1",
      unlocked: true,
      sectionId: 2,
      done: false,
    },
    {
      id: 2,
      name: "Task 2",
      description: "testy description 2",
      unlocked: false,
      sectionId: 2,
      done: false,
    },
    {
      id: 3,
      name: "Task 3",
      description: "testy description 3",
      unlocked: false,
      sectionId: 2,
      done: false,
    },
    {
      id: 4,
      name: "Task 4",
      description: "testy description 4",
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

const tasksReducer = handleActions(
  {
    SET_CURRENT_TASK_ID: produce((state, { payload }) => {
      state.currentTaskId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(tasksReducer, otherReducer, someOtherReducer);
export default reduceReducers(tasksReducer);
