// @flow

import {
  GAME_SET_ID,
  GAME_LOGIN,
} from '../actions/types';

const defaultState = {
  name: null,
  id: null,
  tasks: [],
  players: [],
  status: null,
};

const reducer = (state: Object = defaultState, action: Function) => {
  switch (action.type) {
    case GAME_SET_ID:
      return {
        ...state,
        id: action.id,
      };
    case GAME_LOGIN:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
