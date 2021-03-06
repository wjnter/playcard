import { combineReducers } from "redux";
import { playerReducer } from "./players/reducer";

export const rootReducer = combineReducers({
  player: playerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
