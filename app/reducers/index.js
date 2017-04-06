// @flow
import { combineReducers } from 'redux';
import authNav from './authenticatedNavigator';
import unAuthNav from './unauthenticatedNavigator';
import user from './user';
import game from './game';

const rootReducer = combineReducers({
  authNav,
  unAuthNav,
  user,
  game,
});

export default rootReducer;
