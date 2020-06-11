import reduceReducers from "reduce-reducers";
import game from "./game";
import theme from "./theme";

export default reduceReducers(game, theme);
