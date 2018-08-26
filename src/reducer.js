import { combineReducers } from 'redux';
import homeReducer from './reducers/homeReducer';
import detailReducer from './reducers/detailReducer';

export default combineReducers({
  home: homeReducer,
  detail: detailReducer,
});
