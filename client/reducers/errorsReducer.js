import { combineReducers } from 'redux'
import projectErrorsReducer from './errors/projectErrorsReducer'
import sessionErrorsReducer from './errors/sessionErrorsReducer'
import userErrorReducer from './errors/userErrorsReducer'

const errorsReducer = combineReducers({
  project: projectErrorsReducer,
  session: sessionErrorsReducer,
  user: userErrorReducer
})

export default errorsReducer