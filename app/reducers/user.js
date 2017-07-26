// @flow

import { GAME_LOGIN_SUCCEEDED } from '../actions/game';
import { USER_SET_LOGIN } from '../actions/user';

const defaultState = {
  guid: null,
  name: null,
  pickedCard: null,
  isReady: false,
  isOffline: false,
  loggedIn: false,
};

const reducer = (state: Object = defaultState, action: Function) => {
  switch (action.type) {
    case GAME_LOGIN_SUCCEEDED:
      return {
        ...state,
        loggedIn: true,
      };
    case USER_SET_LOGIN:
      return {
        ...state,
        name: action.userName,
      };
    default:
      return state;
  }
};

export default reducer;
