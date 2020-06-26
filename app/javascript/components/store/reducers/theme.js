import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// themes: "lunarLights", 'darkMatter', 'martianMaroon', 'sun'?, 'europa'(ice)?, "Custom 1", "Custom 2" etc.
const initialState = {
  currentThemeId: 0,
  // TODO: add ability to create custom themes. These can then be pushed into themes array!
  themes: [
    {
      id: 0,
      requiredPrestige: 0,
      name: "lunar_lights",
      color: {
        primary: "hsla(20, 75%, 58%, 1)", // main actions
        secondary: "hsla(200, 75%, 58%, 1)", // everywhere else (accents, 1)
        background: "hsla(207, 24%, 78%, 1)", // global background, darkest
        furthest: "hsla(216, 35%, 86%, 1)", // darkest ui container
        middle: "hsla(200, 27%, 92%, 1)", // main ui container
        closest: "hsla(0, 0%, 100%, 1)", // top ui container (main controls, 1)
        black: "hsla(0, 0%, 29%, 1)", // darkest color
        white: "hsla(0, 0%, 100%, 1)", // lightest color
        fontDefault: "hsla(0, 0%, 29%, 1)", // default text color
        error: "hsla(5, 75%, 58%, 1)", // general red
        warning: "hsla(35, 75%, 58%, 1)", // general orange
      },
      font: {
        muted: "hsla(208, 7%, 46%, 1)", // for tertiary text
      },
    },
    {
      id: 1,
      requiredPrestige: 0,
      name: "dark_matter",
      color: {
        primary: "hsla(20, 75%, 58%, 1)", // main actions
        secondary: "hsla(200, 75%, 58%, 1)", // everywhere else (accents, 1)
        background: "hsla(0, 0%, 14%, 1)", // global background, darkest
        furthest: "hsla(216, 23%, 23%, 1)", // darkest ui container
        middle: "hsla(213, 19%, 28%, 1)", // main ui container
        closest: "hsla(212, 17%, 35%, 1)", // top ui container (main controls, 1)
        black: "hsla(0, 0%, 14%, 1)", // darkest color
        white: "hsla(0, 0%, 100%, 1)", // lightest color
        fontDefault: "hsla(0, 0%, 100%, 1)", // default text color
        error: "hsla(5, 75%, 58%, 1)", // general red
        warning: "hsla(35, 75%, 58%, 1)", // general orange
      },
      font: {
        muted: "hsla(208, 7%, 56%, 1)", // for tertiary text
      },
    },
    {
      id: 2,
      requiredPrestige: 1,
      name: "martian_maroon", // WIP
      color: {
        // primary: "hsla(20, 75%, 58%, 1)", // main actions
        // secondary: "hsla(200, 75%, 58%, 1)", // everywhere else (accents, 1)
        // background: "hsla(0, 0%, 14%, 1)", // global background, darkest
        // furthest: "hsla(216, 23%, 23%, 1)", // darkest ui container
        // middle: "hsla(213, 19%, 28%, 1)", // main ui container
        // closest: "hsla(212, 17%, 35%, 1)", // top ui container (main controls, 1)
        // black: "hsla(0, 0%, 14%, 1)", // darkest color
        // white: "hsla(0, 0%, 100%, 1)", // lightest color
        // fontDefault: "hsla(0, 0%, 100%, 1)", // default text color
        // error: "hsla(5, 75%, 58%, 1)", // general red
        // warning: "hsla(35, 75%, 58%, 1)", // general orange
      },
      font: {
        // muted: "hsla(208, 7%, 56%, 1)", // for tertiary text
      },
    },
    {
      id: 3,
      requiredPrestige: 2,
      name: "sun_spot", // WIP
      color: {
        // primary: "hsla(20, 75%, 58%, 1)", // main actions
        // secondary: "hsla(200, 75%, 58%, 1)", // everywhere else (accents, 1)
        // background: "hsla(0, 0%, 14%, 1)", // global background, darkest
        // furthest: "hsla(216, 23%, 23%, 1)", // darkest ui container
        // middle: "hsla(213, 19%, 28%, 1)", // main ui container
        // closest: "hsla(212, 17%, 35%, 1)", // top ui container (main controls, 1)
        // black: "hsla(0, 0%, 14%, 1)", // darkest color
        // white: "hsla(0, 0%, 100%, 1)", // lightest color
        // fontDefault: "hsla(0, 0%, 100%, 1)", // default text color
        // error: "hsla(5, 75%, 58%, 1)", // general red
        // warning: "hsla(35, 75%, 58%, 1)", // general orange
      },
      font: {
        // muted: "hsla(208, 7%, 56%, 1)", // for tertiary text
      },
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const themeReducer = handleActions(
  {
    SET_CURRENT_THEME_ID: produce((state, { payload }) => {
      state.currentThemeId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(themeReducer);
