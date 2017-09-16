// @flow
import createReducer from './reducer-utils';

const defaultState = {
  guid: null,
  name: null,
  pickedCard: null,
  isReady: false,
  isOffline: false,
  loggedIn: false,
  hasLoginError: false,
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
