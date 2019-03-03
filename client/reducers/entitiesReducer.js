import { combineReducers } from 'redux'
import usersReducer from './entities/usersReducer'
import projectsReducer from './entities/projectsReducer'
import storiesReducer from './entities/storiesReducer';

const entitiesReducer = combineReducers({
  projects: projectsReducer,
  stories: storiesReducer,
  users: usersReducer
})

export default entitiesReducer