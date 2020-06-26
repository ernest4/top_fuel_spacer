import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentLocationId: null,
  locations: [],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const locationsReducer = handleActions(
  {
    SET_CURRENT_LOCATION_ID: produce((state, { payload }) => {
      state.currentLocationId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(locationsReducer, otherReducer, someOtherReducer);
export default reduceReducers(locationsReducer);
