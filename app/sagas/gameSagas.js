import { call, put } from 'redux-saga/effects';
import pokerApi from '../utils/pokerApi';
import { GAME_LOGIN_SUCCEEDED, GAME_LOGIN_FAILED } from '../actions/game';

export function* handleGameLogin(gameId) {  
  try {
    const data = yield call(pokerApi.get, '/games/591af9f9bd0cca664ecde7d5');
    // const data = yield call(pokerApi.get, `/games/${gameId}`);
    yield put({ type: GAME_LOGIN_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: GAME_LOGIN_FAILED, error });
  }
}
