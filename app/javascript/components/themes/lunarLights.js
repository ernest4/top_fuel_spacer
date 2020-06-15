export default {
  name: "lunarLights",
  color: {
    primary: "hsl(20, 75%, 58%)", // main actions
    secondary: "hsl(200, 75%, 58%)", // everywhere else (accents)
    background: "hsl(207, 24%, 84%)", // global background, darkest
    furthest: "hsl(216, 35%, 92%)", // darkest ui container
    middle: "hsl(200, 27%, 98%)", // main ui container
    closest: "hsl(0, 0%, 100%)", // top ui container (main controls)
    black: "hsl(0, 0%, 29%)", // darkest color
    white: "hsl(0, 0%, 100%)", // lightest color
    fontDefault: "hsl(0, 0%, 29%)", // default text color
    error: "hsl(5, 75%, 58%)", // general red
    warning: "hsl(35, 75%, 58%)", // general orange
  },
  font: {
    muted: "hsl(208, 7%, 46%)", // for tertiary text
  },
};
