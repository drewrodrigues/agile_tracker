import { connect } from 'react-redux'
import AppNavbar from './appNavbar'
import { deleteSession } from '../../actions/sessionActions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteSession: () => dispatch(deleteSession())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavbar))