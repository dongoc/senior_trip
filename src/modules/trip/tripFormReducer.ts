import { ActionType, TripForm } from '@/types'

const initialTripFormState: TripForm = {
  id: -1,
  title: '',
  start_date: new Date().toISOString(),
  end_date: new Date().toISOString(),
  members: [{ name: '나', role: 'manager' }],
}

export const UPDATE_TRIP_FORM = '@@trip/UPDATE_TRIP_FORM'
export const updateTripForm = (payload: Partial<TripForm>) => ({
  type: UPDATE_TRIP_FORM,
  payload,
})

export const SUBMIT_TRIP_FORM = '@@trip/SUBMIT_TRIP_FORM'
export const submitTripForm = () => ({
  type: SUBMIT_TRIP_FORM,
})

export const RESET_TRIP_FORM = '@@trip/RESET_TRIP_FORM'
export const resetTripForm = () => ({
  type: RESET_TRIP_FORM,
})

export const trip_form = (state = initialTripFormState, action: ActionType<TripForm>): TripForm => {
  switch (action.type) {
    case UPDATE_TRIP_FORM:
      return { ...state, ...action.payload }
    case RESET_TRIP_FORM:
      return { ...initialTripFormState }
    default:
      return state
  }
}
