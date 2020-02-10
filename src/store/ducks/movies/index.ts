import {Reducer} from "redux";
// import producer from 'immer'
import {MoviesState, MoviesTypes} from "./types";

const INITIAL_STATE: MoviesState = {
  data: [{
    type: '',
    title: '',
    items: []
  },
    {
      type: '',
      items: []
    },
    {
      type: '',
      title: '',
      movies: []
    }],
  loading: false,
  error: false
};

const reducer: Reducer<MoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.GET_LIST_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case MoviesTypes.GET_LIST_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case MoviesTypes.GET_LIST_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
