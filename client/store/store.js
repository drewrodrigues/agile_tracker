import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import checkAuth from "../middleware/checkAuth"
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  let initialState = {}
  if (window.currentUser) {
    const { currentUser } = window
    const userId = parseInt(Object.keys(window.currentUser)[0])
    initialState = { 
      entities: { users: currentUser },
      session: { id: userId },
      ui: { icebox: true, backlog: true, current: true, done: true }
    }
  } else {
    initialState = {
      ui: { icebox: true, backlog: true, current: true, done: true }
    }
  }

  let middleWare = [thunk, checkAuth]
  if (process.env.NODE_ENV !== 'production') {
    middleWare = [...middleWare, logger];
  }
  return createStore(rootReducer, initialState, applyMiddleware(...middleWare))
}

export default configureStore