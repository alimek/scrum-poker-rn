// @flow
import { normalize } from 'normalizr';
import { playerSchema, taskSchema } from './schemas';
import createReducer from './reducer-utils';

const defaultState = {
  id: null,
  name: null,
  status: null,
  current_task_id: null,
  tasks: [],
  players: [],
};

const gameLoginSucceeded = (state, action) => {
  const {
    id,
    name,
    status,
    current_task_id,
    tasks,
    players,
  } = action.payload;

  return {
    ...state,
    id,
    name,
    status,
    current_task_id,
    tasks: normalize(tasks, taskSchema),
    players: normalize(players, playerSchema),
  };
};

const gameReducer = createReducer(defaultState, {
  GAME_LOGIN_SUCCEEDED: gameLoginSucceeded,
});

export default gameReducer;
