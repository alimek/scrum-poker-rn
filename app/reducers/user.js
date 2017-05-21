// @flow

import { GAME_LOGIN_SUCCEEDED } from '../actions/game';

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
    default:
      return state;
  }
};

export default reducer;
