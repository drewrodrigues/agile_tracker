import { connect } from 'react-redux'
import MainNavbar from './mainNavbar'
import { deleteSession } from '../../actions/sessionActions'

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavbar)