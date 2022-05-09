import { spawn } from 'redux-saga/effects'
import authSaga from './auth/authSaga'
import tripDetailSaga from './trip/tripDetailSaga'

function* rootSaga() {
  yield spawn(authSaga)
  yield spawn(tripDetailSaga)
}

export default rootSaga
