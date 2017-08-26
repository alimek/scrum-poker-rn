import { call, put } from 'redux-saga/effects';
import pokerApi from '../utils/pokerApi';
import { GAME_LOGIN_SUCCEEDED, GAME_LOGIN_FAILED, GAME_LOGIN_STATUS_ERROR } from '../actions/game';
import { USER_SET_LOGIN } from '../actions/user';

/**
 * @param {597c4a08bd0cca2e0ecbd64d}
 * gameId with some mocked data
*/

export function* handleGameLogin(action) {
  try {
    const { gameId, userName } = action.payload;
    const response = yield call(pokerApi.get, `/games/${gameId}`);
    if (response.status === 200) {
      yield put({ type: GAME_LOGIN_SUCCEEDED, payload: response.data });
      yield put({ type: USER_SET_LOGIN, userName });
    } else {
      yield put({ type: GAME_LOGIN_STATUS_ERROR, error: response.status });
    }
  } catch (error) {
    yield put({ type: GAME_LOGIN_FAILED, error });
  }
}
