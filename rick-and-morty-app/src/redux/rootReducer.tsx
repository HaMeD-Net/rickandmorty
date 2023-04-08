import { combineReducers } from "redux";
import { RickMortyReducer } from "./rickMortyReducer";

export interface RootState {
  RickMortyReducer: {
    data: any[];
    loading: boolean;
  };
}

export const rootReducer = combineReducers({
  RickMortyReducer,
});
