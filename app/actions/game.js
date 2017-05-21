export const GAME_LOGIN_REQUESTED = 'GAME_LOGIN_REQUESTED';
export const GAME_LOGIN_FAILED = 'GAME_LOGIN_FAILED';
export const GAME_LOGIN_SUCCEEDED = 'GAME_LOGIN_SUCCEEDED';
export const GAME_SET_ID = 'GAME_SET_ID';

export const gameEnter = gameId => ({
  type: GAME_LOGIN_REQUESTED,
  gameId,
});

export const setGameId = id => ({
  type: GAME_SET_ID,
  id,
});
