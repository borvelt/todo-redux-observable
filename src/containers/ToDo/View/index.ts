import { connect } from 'react-redux'
import { RootState } from '../../../store'
import { todoListSelector } from '../selectors'
import ViewToDoComponent from './View'

const mapStateToProps = (state: RootState) => ({
  todoList: todoListSelector(state),
})

const mapDispatchToProps = {}

export type ViewToDoComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const ViewToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewToDoComponent)

export default ViewToDoContainer
