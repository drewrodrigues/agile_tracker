import { combineReducers } from 'redux'
import usersReducer from './entities/usersReducer'
import projectsReducer from './entities/projectsReducer'
import workflowsReducer from './entities/workflowsReducer'
import storiesReducer from './entities/storiesReducer';

const entitiesReducer = combineReducers({
  projects: projectsReducer,
  stories: storiesReducer,
  workflows: workflowsReducer,
  users: usersReducer
})

export default entitiesReducer