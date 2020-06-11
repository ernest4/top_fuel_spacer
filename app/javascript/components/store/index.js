import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import gameReducer from "./reducers/game";

export default createStore(gameReducer, applyMiddleware(thunk));
