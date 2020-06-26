import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import debugFlag from "../../debugFlag";

let initialState = {
  // TODO: there two places to store this, localStore for guest players and back end DB for logged in
  // users. For players who wish to do guest session only, they will need to be warned that once
  // they wish to join multiplayer, they will have to start from scratch (to prevent cheating)!
  morality: 20, // the renegade (0) / neutral (20) / paragon (40) score
  xp: 0,
  levelUpXp: 100, // TODO: research the scaling formula for level ups here and in general !!
  level: 1,
  prestige: 0,
  name: "",
  avatar: null,
  skills: {
    luck: 0,
    strength: 0,
    charisma: 0,
    intelligence: 0,
  },
};

if (debugFlag) {
  initialState = {
    morality: 5, // the renegade (negative) / paragon (positive) score
    xp: 30,
    levelUpXp: 100,
    level: 1,
    prestige: 1,
    name: "Ernest",
    avatar: null,
    skills: {
      luck: 4,
      strength: 7,
      charisma: 3,
      intelligence: 9,
    },
  };
}

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const playerReducer = handleActions(
  {
    SET_MORALITY: produce((state, { payload }) => {
      state.morality = payload;
    }),
  },
  initialState
);

// export default reduceReducers(playerReducer, otherReducer, someOtherReducer);
export default reduceReducers(playerReducer);
