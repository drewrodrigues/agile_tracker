import { connect } from 'react-redux'
import SessionForm from '../shared/sessionForm'
import { createSession, clearErrors } from '../../actions/sessionActions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    email: "",
    errors: state.errors.session,
    formType: "signin",
    password: ""
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(createSession(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm))