import { spawn } from 'redux-saga/effects'
import authSaga from './auth/authSaga'
import tripSaga from './trip/tripSaga'

function* rootSaga() {
  yield spawn(authSaga)
  yield spawn(tripSaga)
}

export default rootSaga
