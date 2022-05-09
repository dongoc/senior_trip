import { combineReducers } from 'redux'
import { trip_list } from './tripListReducer'
import { trip_form } from './tripFormReducer'

export default combineReducers({
  trip_list,
  trip_form,
})
