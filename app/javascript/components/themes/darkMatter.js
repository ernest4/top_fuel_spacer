export default {
  name: "darkMatter",
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
};
