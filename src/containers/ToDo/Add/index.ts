import { connect } from 'react-redux'
import { RootState } from '../../../store'
import { addTodo as addTodoAction } from '../actions'
import { toDoDraftErrorSelector, toDoDraftSelector } from '../selectors'
import AddToDoFormComponent from './Add'

const mapStateToProps = (state: RootState) => ({
  toDoDraft: toDoDraftSelector(state),
  toDoDraftErrors: toDoDraftErrorSelector(state),
})

const mapDispatchToProps = {
  addToDoRequest: addTodoAction.request,
}

export type AddToDoFormComponentTypes = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const AddTodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDoFormComponent)

export default AddTodoFormContainer
