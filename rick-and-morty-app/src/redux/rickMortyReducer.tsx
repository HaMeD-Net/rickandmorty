import { actionTypes } from "./actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export const RickMortyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
