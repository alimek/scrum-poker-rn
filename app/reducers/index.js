// @flow
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import navigator from './navigator';
import user from './user';
import game from './game';

const rootReducer = combineReducers({
  navigator,
  user,
  game,
  form,
});

export default rootReducer;
