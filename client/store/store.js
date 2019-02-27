import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  let initialState = {}
  if (window.currentUser) {
    initialState = { session: window.currentUser }
  }
  return createStore(rootReducer, initialState, applyMiddleware(logger, thunk))
}

export default configureStore