import { combineReducers } from "redux";
import game from "./game";
import theme from "./theme";
import player from "./player";
import settings from "./settings";

export default combineReducers({ game, theme, player, settings });
