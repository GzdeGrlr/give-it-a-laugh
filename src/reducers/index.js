import { FETCH_JOKE } from "../actions/jokesActions";
import { ADD_FAVORITE } from "../actions/jokesActions";
import { REMOVE_FAVORITE } from "../actions/jokesActions";
import { FETCH_USER_START } from "../actions/jokesActions";

const initialState = {
  jokes: [],
  favorites: [],
  isFetching: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return { ...state, jokes: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
