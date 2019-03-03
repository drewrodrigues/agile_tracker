import { connect } from 'react-redux'
import ProjectShow from './projectShow'
import { getProject } from '../../actions/projectActions'
import { selectStoriesByProjectId } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.id],
    stories: selectStoriesByProjectId(state, ownProps.match.params.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: (id) => dispatch(getProject(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow)