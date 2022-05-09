import { ActionType, Trip } from '@/types'

const initialTripListState: Trip[] = [
  {
    id: 1,
    title: '보령여행',
    start_date: '2022-06-09T15:00:00.000Z',
    end_date: '2022-06-10T15:00:00.000Z',
    members: [
      { name: '나', role: 'manager' },
      { name: '지민', role: 'member' },
    ],
  },
  {
    id: 2,
    title: '강릉여행',
    start_date: '2022-05-08T15:00:00.000Z',
    end_date: '2022-05-15T15:00:00.000Z',
    members: [{ name: '나', role: 'manager' }],
  },
]

export const INITIALIZE_TRIP_LIST = '@@trip/INITIALIZE_TRIP_LIST'
export const initializeTripList = () => ({ type: INITIALIZE_TRIP_LIST })

export const SET_TRIP_LIST = '@@trip/SET_TRIP_LIST'
export const setTripList = (list: Trip[]) => ({
  type: SET_TRIP_LIST,
  payload: { list },
})

export const ADD_TRIP_LIST = '@@trip/ADD_TRIP_LIST'
export const addTripList = (trip: Trip) => ({
  type: ADD_TRIP_LIST,
  payload: { trip },
})

export const UPDATE_TRIP_LIST = '@@trip/UPDATE_TRIP_LIST'
export const updateTripList = (tripId: number, trip: Partial<Trip>) => ({
  type: UPDATE_TRIP_LIST,
  payload: { tripId, trip },
})

export const DELETE_TRIP_LIST = '@@trip/DELETE_TRIP_LIST'
export const deleteTripList = (tripId: number) => ({
  type: DELETE_TRIP_LIST,
  payload: { tripId },
})

type Payload = {
  list: Trip[]
  trip: Trip
  tripId: number
}
export const trip_list = (state = initialTripListState, action: ActionType<Payload>): Trip[] => {
  switch (action.type) {
    case SET_TRIP_LIST:
      return action.payload.list || state
    case ADD_TRIP_LIST:
      // TODO start_date order
      return action.payload.trip ? [action.payload.trip, ...state] : state
    case UPDATE_TRIP_LIST:
      console.log('update')
      const updateIndex = state.findIndex((trip) => trip.id === action.payload.tripId)
      if (updateIndex < 0) return state
      const updated = [...state]
      updated.splice(updateIndex, 1, action.payload.trip)
      return updated
    case DELETE_TRIP_LIST:
      const deleteIndex = state.findIndex((trip) => trip.id === action.payload.tripId)
      if (deleteIndex < 0) return state
      const deleted = [...state]
      deleted.splice(deleteIndex, 1)
      return deleted
    default:
      return state
  }
}
