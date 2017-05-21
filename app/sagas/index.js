import { takeEvery } from 'redux-saga/effects';
import { handleGameLogin } from './gameSagas';
import { GAME_LOGIN_REQUESTED } from '../actions/game';

export default function* rootSaga() {
  yield takeEvery(GAME_LOGIN_REQUESTED, handleGameLogin);
}
