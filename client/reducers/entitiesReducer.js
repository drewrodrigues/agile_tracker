import { combineReducers } from 'redux'
import usersReducer from './entities/usersReducer'

const errorsReducer = combineReducers({
  users: usersReducer
})

export default errorsReducer