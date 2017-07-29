// @flow
import createReducer from './reducer-utils';

const defaultState = {
  guid: null,
  name: null,
  pickedCard: null,
  isReady: false,
  isOffline: false,
  loggedIn: false,
};

const userReducer = createReducer(defaultState, {
  GAME_LOGIN_SUCCEEDED: state => ({
    ...state,
    loggedIn: true,
  }),
  USER_SET_LOGIN: (state, action) => ({
    ...state,
    name: action.userName,
  }),
});

export default userReducer;
