// @flow

import {
  GAME_SET_ID, GAME_LOGIN_SUCCEEDED,
} from '../actions/game';

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
    case GAME_LOGIN_SUCCEEDED:
      console.log(action);
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default reducer;
