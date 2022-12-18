import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

const API_KEY = '0509af2e406157c3aa3a308588127192';

function* getTvPopular(action) {
  try {
    const resTvPopular = yield axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${action.page}`,
    });
    if (resTvPopular && resTvPopular.data) {
      yield put({
        type: 'GET_TV_UPCOMING_SUCCESS',
        data: resTvPopular.data.results,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_TV_UPCOMING_FAILED',
      error: err.response.data.status_message,
    });
  }
}

function* tvSeriesSaga() {
  yield takeLatest('GET_TV_UPCOMING', getTvPopular);
}

export default tvSeriesSaga;
