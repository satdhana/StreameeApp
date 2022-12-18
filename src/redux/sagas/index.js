import {all} from 'redux-saga/effects';
import moviesSaga from './moviesSaga';
import tvSeriesSaga from './tvSeriesSaga';
import nowPlaying from './nowPlaying';
import Popular from './Popular';
import TopRated from './top_Rated';
import DetailMovie from './detailMovie';
import Latest from './Latest';
export default function* rootSaga() {
  yield all([
    moviesSaga(),
    tvSeriesSaga(),
    nowPlaying(),
    Popular(),
    TopRated(),
    DetailMovie(),
    Latest()
  ]);
}
