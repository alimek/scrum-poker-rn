import { takeEvery } from 'redux-saga/effects';
import { handleGameLogin } from './gameSagas';

export default function* rootSaga() {
  yield takeEvery('GAME_LOGIN_REQUESTED', handleGameLogin);
}
