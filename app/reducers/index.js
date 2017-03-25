// @flow
import { combineReducers } from 'redux';
import navReducer from './navigator';

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;
