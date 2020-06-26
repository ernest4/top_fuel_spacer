import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// Tasks -> a.k.a missions / quests
const initialState = {
  currentTaskId: null,
  tasks: [],
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
