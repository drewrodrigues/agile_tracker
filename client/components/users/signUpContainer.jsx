import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SessionForm from '../shared/sessionForm'
import { createUser } from '../../actions/userActions'
import { clearErrors } from '../../actions/sessionActions'

const mapStateToProps = (state, ownProps) => {
  return {
    email: ownProps.match.params.email || "",
    errors: state.errors.user,
    formType: "signup",
    password: ""
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(createUser(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm))