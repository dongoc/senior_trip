import { takeEvery, put, select } from 'redux-saga/effects'
import { useMatch } from 'react-router-dom'
import { push } from 'connected-react-router'
import { INITIALIZE_TRIP_DETAIL } from '@/modules/trip/tripDetailReducer'
import { SUBMIT_TRIP_FORM } from '@/modules/trip/tripFormReducer'
import { updateTripList } from '@/modules/trip/tripListReducer'

function* initializeTripDetailSaga() {
  const match = useMatch('/trip/:trip_id')
  const tripId = match?.params?.trip_id
  yield console.log(match)
  yield console.log(tripId)
}

function* submitTripFormSaga() {
  const { trip_form } = yield select((state) => state.trip)
  console.log(trip_form)
  yield put(updateTripList(trip_form.id, trip_form))
  yield put(push('/trip'))
}

function* tripSaga() {
  takeEvery(INITIALIZE_TRIP_DETAIL, initializeTripDetailSaga)
  takeEvery(SUBMIT_TRIP_FORM, submitTripFormSaga)
}

export default tripSaga
