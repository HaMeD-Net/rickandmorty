import { actionTypes } from "./actionTypes";

const initialState = {
  data: [],
};

export const RickMortyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
