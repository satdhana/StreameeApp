import {combineReducers} from 'redux';
import movies from './movies';
import tvSeries from './tvSeries';

export default combineReducers({movies, tvSeries});
