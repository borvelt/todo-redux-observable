import { connect } from 'react-redux'
import { RootState } from '../../../store'
import {
  addTodoDraft as addTodoDraftAction,
  editTodo as editTodoAction,
} from '../actions'
import {
  toDoDraftErrorSelector,
  toDoDraftSelector,
  todoListSelector,
} from '../selectors'
import EditTodoFormComponent from './Edit'

const mapStateToProps = (state: RootState) => ({
  toDoDraft: toDoDraftSelector(state),
  toDoDraftErrors: toDoDraftErrorSelector(state),
  todoList: todoListSelector(state),
})

const mapDispatchToProps = {
  editToDoRequest: editTodoAction.request,
  addToDraft: addTodoDraftAction,
}

export type EditToDoFormComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const EditTodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodoFormComponent)

export default EditTodoFormContainer
