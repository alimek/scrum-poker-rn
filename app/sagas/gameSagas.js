import { call, put } from 'redux-saga/effects';
import pokerApi from '../utils/pokerApi';
import { GAME_LOGIN_SUCCEEDED, GAME_LOGIN_FAILED, GAME_LOGIN_STATUS_ERROR } from '../actions/game';
import { USER_SET_LOGIN } from '../actions/user';

export function* handleGameLogin(action) {
  try {
    const { gameId, userName } = action.payload;

    const data = yield call(pokerApi.get, `/games/${gameId}`);
    if (data.status === 200) {
      yield put({ type: GAME_LOGIN_SUCCEEDED, data });
      yield put({ type: USER_SET_LOGIN, userName });
    } else {
      yield put({ type: GAME_LOGIN_STATUS_ERROR, error: data.status });
    }
  } catch (error) {
    yield put({ type: GAME_LOGIN_FAILED, error });
  }
}
