import { combineReducers } from 'redux'
import entitiesReducer from './entitiesReducer'
import errorsReducer from './errorsReducer'
import sessionsReducer from './sessionsReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionsReducer,
  ui: uiReducer
})

export default rootReducer