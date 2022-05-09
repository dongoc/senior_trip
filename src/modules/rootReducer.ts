import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { auth } from './auth/authReducer'
import trip from './trip'

export const rootReducer = (history: History) =>
  combineReducers({
    auth,
    trip,
    history: connectRouter(history),
  })

export type RootState = ReturnType<ReturnType<typeof rootReducer>>
