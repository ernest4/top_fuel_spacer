import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentPageId: null,
  pages: [
    {
      id: 0,
      name: "Settings",
    },
    {
      id: 1,
      name: "Info",
    },
    {
      id: 2,
      name: "Credits",
    },
    {
      id: 3,
      name: "Development",
    },
    {
      id: 4,
      name: "Tasks",
    },
    {
      id: 5,
      name: "Collectibles",
    },
    {
      id: 6,
      name: "Achievements",
    },
    {
      id: 7,
      name: "Build",
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const infoReducer = handleActions(
  {
    SET_CURRENT_PAGE_ID: produce((state, { payload }) => {
      state.currentPageId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(infoReducer, otherReducer, someOtherReducer);
export default reduceReducers(infoReducer);
