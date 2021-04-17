import { connect } from 'react-redux'
import ToDoComponent from './ToDo'
import { ToDoDraftStateShape, ToDoListStateShape } from './types'
import {
  addTodo as addTodoAction,
  doneTodo as doneTodoAction,
  fetchToDoList as fetchToDoListAction,
} from './actions'
import AddToDoFormContainer from './Add/index'
import ViewToDoContainer from './View/index'
import ViewDoneToDoListContainer from './ViewDoneList/index'
import { RootState } from '../../store'
import { doingTodosSelector, doneTodoSelector } from './selectors'

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
  doingTodoList: doingTodosSelector(state),
  doneTodoList: doneTodoSelector(state),
})

const mapDispatchToProps = {
  addToDoRequest: addTodoAction.request,
  fetchToDoList: fetchToDoListAction.request,
  setDone: doneTodoAction,
}

export type ToDoComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoComponent)

export {
  ToDoContainer,
  AddToDoFormContainer,
  ViewToDoContainer,
  ViewDoneToDoListContainer,
}
