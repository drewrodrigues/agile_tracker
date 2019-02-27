import { connect } from 'react-redux'
import SignUp from './signUp'
import { createUser } from '../../actions/userActions'

const mapStateToProps = state => {
  return {
    errors: state.errors.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(createUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)