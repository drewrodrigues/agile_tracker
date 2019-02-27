import { connect } from 'react-redux'
import Nav from './nav'
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
)(Nav)