import { push } from 'react-router-redux'

const checkAuth = ({ dispatch }) => next => action => {
  switch (action.type) {
    case "CHECK_AUTH":
      switch(action.payload.status) {
        case 401:
          dispatch({ type: "SIGN_OUT_USER" })
          push('/sign-in')
          break
      }
      break
    default:
      next(action)
  }
}

export default checkAuth