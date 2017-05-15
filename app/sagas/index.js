import { takeEvery } from 'redux-saga/effects';
import { logIntoGame } from './gameSagas';

export default function* rootSaga() {
  yield takeEvery('GAME_LOG_IN', logIntoGame);
}
