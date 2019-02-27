import { combineReducers } from 'redux'
import entitiesReducer from './entitiesReducer'
import errorsReducer from './errorsReducer'
import sessionsReducer from './sessionsReducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionsReducer
})

export default rootReducer