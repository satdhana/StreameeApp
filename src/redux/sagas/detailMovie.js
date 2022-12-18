import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

const API_KEY = '0509af2e406157c3aa3a308588127192';


function* getMoviesUpcoming(action) {
  console.warn('MASUK',action.movieId)
  try {
    const resMoviesUpcoming = yield axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${action.movieId}?api_key=${API_KEY}&language=en-US`,
    });
    if (resMoviesUpcoming && resMoviesUpcoming.data) {
      yield put({
        type: 'GET_MOVIES_DETAIL_SUCCESS',
        data: resMoviesUpcoming.data,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_MOVIES_DETAIL_FAILED',
      error: err.response.data.status_message,
    });
  }
}

function* moviesSaga() {
  yield takeLatest('GET_MOVIES_DETAIL', getMoviesUpcoming);
}

export default moviesSaga;
