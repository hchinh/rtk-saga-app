import { takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {}

export default function* counterSaga() {
  yield takeEvery(increment().type, log);
}
