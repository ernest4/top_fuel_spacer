import { combineReducers } from "redux";
import game from "./game";
import theme from "./theme";
import player from "./player";

export default combineReducers({ game, theme, player });
