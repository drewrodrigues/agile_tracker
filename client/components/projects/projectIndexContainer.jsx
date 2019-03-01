import { connect } from 'react-redux'
import ProjectIndex from './projectIndex'
import {
  clearErrors,
  getProjects,
  deleteProject
} from '../../actions/projectActions'
import { showProjectModal } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    getProjects: () => dispatch(getProjects()),
    deleteProject: id => dispatch(deleteProject(id)),
    showModal: data => dispatch(showProjectModal(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex)