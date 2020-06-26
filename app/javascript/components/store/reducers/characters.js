import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentCharacterId: null,
  characters: [
    {
      id: 0,
      name: "Peterson 0",
    },
    {
      id: 1,
      name: "Peterson 1",
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const charactersReducer = handleActions(
  {
    SET_CURRENT_CHARACTER_ID: produce((state, { payload }) => {
      state.currentCharacterId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(charactersReducer, otherReducer, someOtherReducer);
export default reduceReducers(charactersReducer);
