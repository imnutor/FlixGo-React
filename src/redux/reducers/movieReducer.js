import * as ActionType from "./../contanst/actionType";

let initialState = {
  listMovie: [],
  listTvSeries: [],
  listCartoon: [],
  movie: [],
  tvSeries: {},
  Cartoon: {},
  keyword: ""
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.listMovie;
      return { ...state };

    case ActionType.GET_LIST_TVSERIES:
      state.listTvSeries = action.listTvSeries;
      return { ...state };

    case ActionType.GET_LIST_CARTOON:
      state.listCartoon = action.listCartoon;
      return { ...state };

    case ActionType.DETAIL_MOVIE:
      state.movie = action.movie;
      return { ...state };

    case ActionType.DETAIL_TVSERIES:
      state.tvSeries = action.tvSeries;
      return { ...state };
    case ActionType.DETAIL_CARTOON:
      state.Cartoon = action.Cartoon;
      return { ...state };

    case ActionType.FILTER:
      state.keyword = action.keyword;
      return { ...state };
    default:
      return { ...state };
  }
};
export default movieReducer;
