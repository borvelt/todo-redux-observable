import { connect } from 'react-redux'
import ToDoComponent from './ToDo'
import { ToDoListStateShape } from './types'

export const toDoListInitialState: ToDoListStateShape = {
  error: false,
  message: '',
  payload: null,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export type ToDoComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoComponent)

export default ToDoContainer
