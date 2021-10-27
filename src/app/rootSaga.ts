import authSaga from 'features/auth/authSaga';
import citySaga from 'features/city/citySaga';
import counterSaga from 'features/counter/counterSaga';
import dashboardSaga from 'features/dashboard/dashboardSaga';
import studentSaga from 'features/students/studentSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([counterSaga(), authSaga(), dashboardSaga(), studentSaga(), citySaga()]);
}
