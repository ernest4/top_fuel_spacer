import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentSectionId: null,
  sections: [],
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
