// @flow
import { normalize } from 'normalizr';
import { gameSchema } from './schemas';
import createReducer from './reducer-utils';

const defaultState = {
  entities: {},
  result: {
    id: null,
    name: null,
    status: null,
    current_task_id: null,
    tasks: [],
    players: [],
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
