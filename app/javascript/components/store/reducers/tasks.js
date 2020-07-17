import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// Tasks -> a.k.a missions / quests
const initialState = {
  currentTaskId: null,
  doneCount: 0,
  tasks: [
    {
      id: 0,
      name: "Task 0",
      description: "testy description 0",
      sectionId: 2,
      required: ["Step 1", "Step 2", "Step 3"],
      completed: [],
    },
    {
      id: 1,
      name: "Task 1",
      description: "testy description 1",
      sectionId: 2,
      required: ["Step 1", "Step 2", "Step 3", "Step 4"],
      completed: [],
    },
    {
      id: 2,
      name: "Task 2",
      description: "testy description 2",
      sectionId: 2,
      required: ["Step 1", "Step 2"],
      completed: [],
    },
    {
      id: 3,
      name: "Task 3",
      description: "testy description 3",
      sectionId: 2,
      required: ["Step 1", "Step 2", "Step 3"],
      completed: [],
    },
    {
      id: 4,
      name: "Task 4",
      description: "testy description 4",
      sectionId: 3,
      required: ["Step 1", "Step 2", "Step 3"],
      completed: [],
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
