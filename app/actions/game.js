export const GAME_LOGIN_REQUESTED = 'GAME_LOGIN_REQUESTED';
export const GAME_LOGIN_FAILED = 'GAME_LOGIN_FAILED';
export const GAME_LOGIN_SUCCEEDED = 'GAME_LOGIN_SUCCEEDED';
export const GAME_SET_ID = 'GAME_SET_ID';
export const GAME_LOGIN_STATUS_ERROR = 'GAME_LOGIN_STATUS_ERROR';

export const gameEnter = payload => ({
  type: GAME_LOGIN_REQUESTED,
  payload,
});
