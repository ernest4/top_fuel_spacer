import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentAchievementId: null,
  achievements: [],
};

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
