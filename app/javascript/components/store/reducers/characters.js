import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentCharacterId: null,
  characters: [
    {
      id: 0,
      name: "Dorian",
      qualification: 'Communications Specialist',
      gender: "female",
      race: "african",
      description: "wip",
    },
    {
      id: 1,
      name: "Bill",
      qualification: "Executive Officer",
      gender: "male",
      race: "caucasian",
      description: "wip",
    },
    {
      id: 2,
      name: "Robert",
      qualification: null,
      gender: "male",
      race: "caucasian",
      description: "wip",
    },
    {
      id: 3,
      name: "Jane",
      qualification: null,
      gender: "female",
      race: "caucasian",
      description: "wip",
    },
    {
      id: 4,
      name: "Thom",
      qualification: "Officer",
      gender: "male",
      race: "asian",
      description: "wip",
    },
    {
      id: 5,
      name: "Hannah",
      qualification: "Botanist",
      gender: "female",
      race: "caucasian",
      description: "wip",
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
