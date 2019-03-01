import { combineReducers } from 'redux'
import usersReducer from './entities/usersReducer'
import projectsReducer from './entities/projectsReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer
})

export default entitiesReducer