import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import themes from "../../themes";

const initialState = {
  // theme: "lunar_lights", // 'dark_matter', 'martian_maroon', 'sun'?, 'europa'(ice)?
  theme: themes.lunarLights,
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const themeReducer = handleActions(
  {
    SET_THEME: produce((state, { payload }) => {
      state.theme = themes[payload];
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(themeReducer);
