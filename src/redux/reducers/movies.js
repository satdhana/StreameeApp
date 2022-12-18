const initialState = {
  isLoading: false,
  dataUpcoming: [],
  dataNowPlaying: [],
  dataPopular: [],
  dataTopRated: [],
  error: [],
  detailMovie: [],
  dataLatest:[]
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_UPCOMING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIES_UPCOMING_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataUpcoming: action.data,
      };
    case 'GET_MOVIES_UPCOMING_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_MOVIES':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataNowPlaying: action.data,
      };
    case 'GET_MOVIES_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_MOVIES_POPULAR':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIES_POPULAR_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataPopular: action.data,
      };
    case 'GET_MOVIES_POPULAR_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_MOVIES_TOP':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIES_TOP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataTopRated: action.data,
      };
    case 'GET_MOVIES_TOP_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_MOVIES_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIES_DETAIL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        detailMovie: action.data,
      };
    case 'GET_MOVIES_DETAIL_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      case 'GET_MOVIES_LATEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIES_LATEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataLatest: action.data,
      };
    case 'GET_MOVIES_LATEST_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default movies;
