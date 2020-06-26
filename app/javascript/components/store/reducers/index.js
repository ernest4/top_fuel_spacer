import { combineReducers } from "redux";
import game from "./game";
import theme from "./theme";
import player from "./player";
import settings from "./settings";
import music from "./music";
import antFarm from "./antFarm";
import tasks from "./tasks";
import characters from "./characters";
import locations from "./locations";
import achievements from "./achievements";

export default combineReducers({
  game,
  theme,
  player,
  settings,
  music,
  antFarm,
  tasks,
  characters,
  locations,
  achievements,
});
