import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* sayHello() {
  console.log('Hello saga');
}

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([sayHello(), counterSaga()]);
}