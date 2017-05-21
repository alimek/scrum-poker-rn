// @flow
import { combineReducers } from 'redux';
import { UserAuthenticated, UserUnauthenticated } from '../screens/Navigator/Navigator';

const authenticated = (state: Object, action: Function) => {
  const newState = UserAuthenticated.router.getStateForAction(action, state);
  return newState || state;
};

const unauthenticated = (state: Object, action: Function) => {
  const newState = UserUnauthenticated.router.getStateForAction(action, state);
  return newState || state;
};

export default combineReducers({ authenticated, unauthenticated });
