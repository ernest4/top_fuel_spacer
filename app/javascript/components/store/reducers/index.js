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
import score from "./score";
import rocket from "./rocket";
import launchSequence from "./launchSequence";
import sounds from "./sounds";
import info from "./info";
import collectibles from "./collectibles";
import conversations from "./conversations";
import items from "./items";

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
  score,
  rocket,
  launchSequence,
  sounds,
  info,
  collectibles, // TODO: ... items counts?
  conversations,
  items, // TODO: ... items under construction / production form enginereing, life support etc ?
  // TODO: think about further data structures below
  // research, // TODO: ... research tech tree. progress on items. completed items.
  // cargo, // TODO: ... all items and their counts
});
