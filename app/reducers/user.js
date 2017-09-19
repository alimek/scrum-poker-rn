// @flow
import createReducer from './reducer-utils';

import { user } from '../types/user';

const defaultState = {
  ...user,
};

const userReducer = createReducer(defaultState, {
  GAME_LOGIN_REQUESTED: state => ({
    ...state,
    hasLoginError: false,
  }),
  GAME_LOGIN_FAILED: state => ({
    ...state,
    hasLoginError: true,
  }),
  GAME_LOGIN_STATUS_ERROR: state => ({
    ...state,
    hasLoginError: true,
  }),
  GAME_LOGIN_SUCCEEDED: state => ({
    ...state,
    loggedIn: true,
  }),
  USER_SET_LOGIN: (state, action) => ({
    ...state,
    name: action.userName,
  }),
  USER_LOGOUT: () => ({
    ...defaultState,
  }),
});

export default userReducer;
