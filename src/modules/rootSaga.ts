import { spawn } from 'redux-saga/effects'
import authSaga from './auth/authSaga'

function* rootSaga() {
  yield spawn(authSaga)
}

export default rootSaga
