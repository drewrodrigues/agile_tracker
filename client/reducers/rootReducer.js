import { combineReducers } from 'redux'
import entitiesReducer from './entitiesReducer'
import errorsReducer from './errorsReducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
})

export default rootReducer