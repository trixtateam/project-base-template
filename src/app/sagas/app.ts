import { setupTrixtaSaga } from '@trixtateam/trixta-js-core';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(setupTrixtaSaga);
}
