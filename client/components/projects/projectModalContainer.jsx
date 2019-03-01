import { connect } from 'react-redux'
import ProjectModal from './projectModal'
import { hideModals } from '../../actions/uiActions'
import { createProject, updateProject } from '../../actions/projectActions'
import { clearErrors } from '../../actions/sessionActions'

const mapStateToProps = state => {
  if (!state.ui.projectModal) return {}

  return {
    buttonText: state.ui.projectModal.buttonText,
    data: state.ui.projectModal.data,
    errors: state.errors.project,
    show: state.ui.projectModal,
    title: state.ui.projectModal.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors:   () => dispatch(clearErrors()),
    createProject: project => dispatch(createProject(project)),
    hide:          () => dispatch(hideModals()),
    updateProject: project => dispatch(updateProject(project))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectModal)