import { connect } from 'react-redux'
import ProjectIndex from './projectIndex'
import {
  clearErrors,
  getProjects,
  createProject,
  deleteProject,
  updateProject
} from '../../actions/projectActions'

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
    // showModal: Boolean(state.ui.showIndexModal) // TODO: implement
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    getProjects: () => dispatch(getProjects()),
    createProject: project => dispatch(createProject(project)),
    deleteProject: id => dispatch(deleteProject(id)),
    updateProject: project => dispatch(updateProject(project)),
    showProjectFormModal: () => null // TODO: implement
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex)