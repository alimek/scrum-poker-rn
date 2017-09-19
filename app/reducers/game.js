// @flow
import { normalize } from 'normalizr';
import { gameSchema } from './schemas';
import createReducer from './reducer-utils';

import { game } from '../types/game';

const defaultState = {
  entities: {},
  result: {
    ...game,
  },
};

const gameLoginSucceeded = (state, action) => (
  normalize(action.payload, gameSchema)
);

const gameReducer = createReducer(defaultState, {
  GAME_LOGIN_SUCCEEDED: gameLoginSucceeded,
  USER_LOGOUT: () => ({
    ...defaultState,
  }),
});

export default gameReducer;
