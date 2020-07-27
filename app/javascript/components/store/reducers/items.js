import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// TODO : for each items specify what it will improve and how much. then some logic needs to apply that!
// TODO : implement cargo to keep track of item coun and limit capacity. (capacity can be improved of coruse)
// TODO : specify research prerequisites that need to be completed.
// TODO : spedify build prerequisites that need to be comppleted (i.e. production of item X will consume Y and Z)

const initialState = {
  currentItemId: null,
  doneCount: 0,
  items: [
    {
      id: 0,
      name: "Energy condenser 1",
      description: "wip wip wip",
      sectionId: 4,
      required: 10000,
      completed: 0, // distance requirement
    },
    {
      id: 1,
      name: "Chassis upgrade 1",
      description: "wip wip wip",
      sectionId: 4,
      required: 20000,
      completed: 0, // distance requirement
    },
  ],
};

const itemsReducer = handleActions(
  {
    SET_CURRENT_ITEM_ID: produce((state, { payload }) => {
      state.currentItemId = payload;
    }),
    SET_ITEM_BUILD_COMPLETION: produce((state, { payload: { id, buildCompletion } }) => {
      state.items[id].buildCompletion = buildCompletion;
    }),
  },
  initialState
);

// export default reduceReducers(itemsReducer, otherReducer, someOtherReducer);
export default reduceReducers(itemsReducer);
