// @flow
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigator from './navigator';
import user from './user';
import game from './game';
import task from './task';

const rootReducer = combineReducers({
  navigator,
  user,
  game,
  form,
  task,
});

export default rootReducer;
