const initialState = {
  isLoading: false,
  dataAiringToday: [],
  dataOnAir: [],
  dataPopular: [],
  dataTopRated: [],
  error: [],
};

const tvSeries = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TV_POPULAR':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_TV_POPULAR_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataPopular: action.data,
      };
    case 'GET_TV_POPULAR_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default tvSeries;
