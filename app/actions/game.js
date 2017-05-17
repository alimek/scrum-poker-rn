import { GAME_LOG_IN, GAME_SET_ID } from './action_types';

export const gameLogin = id => ({
  type: 'GAME_LOGIN_REQUESTED',
  id,
});

export const setGameId = id => ({
  type: GAME_SET_ID,
  id,
});
