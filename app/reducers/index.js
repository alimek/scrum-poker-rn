// @flow
import { combineReducers } from 'redux';
import navigator from './navigator';
import user from './user';
import game from './game';

const rootReducer = combineReducers({
  navigator,
  user,
  game,
});

export default rootReducer;
