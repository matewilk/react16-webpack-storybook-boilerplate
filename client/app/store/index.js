import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import reducer from './reducers';

export const reducers = combineReducers({
  reducer,
  router: routerReducer
});