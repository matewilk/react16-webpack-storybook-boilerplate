import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import steps from './steps';

export const reducers = combineReducers({
  steps,
  router: routerReducer
});