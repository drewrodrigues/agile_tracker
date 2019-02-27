import { connect } from 'react-redux'
import SignIn from './signIn'
import { createSession } from '../../actions/sessionActions'

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSession: user => dispatch(createSession(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)