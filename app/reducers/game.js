// @flow

import {
  GAME_SET_ID,
} from '../actions/action_types';

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
    case 'GAME_LOGIN_SUCCEEDED':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default reducer;
