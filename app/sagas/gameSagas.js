import { call, put } from 'redux-saga/effects';
import pokerApi from '../utils/pokerApi';

export function* handleGameLogin() {
  try {
    const data = yield call(pokerApi.get, '/games/591af9f9bd0cca664ecde7d5');
    yield put({ type: "GAME_LOGIN_SUCCEEDED", data });
  } catch (error) {
    yield put({ type: "GAME_LOGIN_FAILED", error });
  }
}
