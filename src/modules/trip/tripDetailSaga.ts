import { setAuthLevel } from '@/modules/auth/authReducer'
import { INITIALIZE_TRIP_DETAIL } from '@/modules/trip/tripDetailReducer'
import { useMatch } from 'react-router-dom'
import { getContext, put, takeEvery } from 'redux-saga/effects'

function* initializeTripDetailSaga() {
  const match = useMatch('/trip/:trip_id')
  const tripId = match?.params?.trip_id
  yield console.log(match)
  yield console.log(tripId)
}

function* tripDetailSaga() {
  takeEvery(INITIALIZE_TRIP_DETAIL, initializeTripDetailSaga)
}

export default tripDetailSaga
