import { connect } from 'react-redux'
import ToDoComponent from './ToDo'
import { ToDoDraftStateShape, ToDoListStateShape } from './types'
import {
  addTodo as addTodoAction,
  fetchToDoList as fetchToDoListAction,
} from './actions'
import AddToDoFormContainer from './Add/index'
import ViewToDoContainer from './View/index'
import { RootState } from '../../store'
import { todoListSelector } from './selectors'

export const toDoListInitialState: ToDoListStateShape = {
  error: null,
  message: '',
  payload: null,
}

export const toDoDraftInitialState: ToDoDraftStateShape = {
  error: null,
  message: '',
  payload: null,
}

const mapStateToProps = (state: RootState) => ({
  todoList: todoListSelector(state),
})

const mapDispatchToProps = {
  addToDoRequest: addTodoAction.request,
  fetchToDoList: fetchToDoListAction.request,
}

export type ToDoComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoComponent)

export { ToDoContainer, AddToDoFormContainer, ViewToDoContainer }
