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
  currentSkillId: null,
  skills: [
    { id: 0, name: "luck", value: 0 },
    { id: 1, name: "strength", value: 0 },
    { id: 2, name: "charisma", value: 0 },
    { id: 3, name: "intelligence", value: 0 },
  ],
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
    currentSkillId: null,
    skills: [
      { id: 0, name: "luck", value: 4 },
      { id: 1, name: "strength", value: 7 },
      { id: 2, name: "charisma", value: 3 },
      { id: 3, name: "intelligence", value: 9 },
    ],
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
    SET_XP: produce((state, { payload }) => {
      state.xp = payload;
    }),
    SET_LEVEL_UP_XP: produce((state, { payload }) => {
      state.levelUpXp = payload;
    }),
    SET_LEVEL: produce((state, { payload }) => {
      state.level = payload;
    }),
    SET_PRESTIGE: produce((state, { payload }) => {
      state.prestige = payload;
    }),
    SET_NAME: produce((state, { payload }) => {
      state.name = payload;
    }),
    SET_XP: produce((state, { payload }) => {
      state.xp = payload;
    }),
    SET_CURRENT_SKILL_ID: produce((state, { payload }) => {
      state.currentSkillId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(playerReducer, otherReducer, someOtherReducer);
export default reduceReducers(playerReducer);
