import { combineReducers } from 'redux'
import usersReducer from './entities/usersReducer'

const entitiesReducer = combineReducers({
  users: usersReducer
})

export default entitiesReducer