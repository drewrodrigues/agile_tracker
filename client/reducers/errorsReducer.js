import { combineReducers } from 'redux'
import sessionErrorsReducer from './errors/sessionErrorsReducer'
import userErrorReducer from './errors/userErrorsReducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  user: userErrorReducer
})

export default errorsReducer