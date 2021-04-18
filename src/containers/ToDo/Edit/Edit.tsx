import { find, propEq } from 'ramda'
import { useHistory, useParams } from 'react-router'
import { EditToDoFormComponentTypes } from './index'
import EditToDoModal from '../../../components/AddEditToDoModal'
import { EditToDoRequest, TODO } from '../types'
import { useEffect } from 'react'

const EditTodoFormComponent = ({
  editToDoRequest,
  toDoDraft,
  toDoDraftErrors,
  todoList,
  addToDraft,
}: EditToDoFormComponentTypes): JSX.Element => {
  const history = useHistory()
  const params = useParams<{ todoId: string }>()
  useEffect(() => {
    if (!todoList) {
      return
    }
    const currentTodo = find<TODO>(propEq('id', parseInt(params?.todoId)))(
      todoList
    )
    if (currentTodo) {
      addToDraft(currentTodo)
    }
  }, [todoList, params, addToDraft])
  return (
    <EditToDoModal
      title="Edit TODO"
      open={true}
      handleClose={() => history.goBack()}
      errors={toDoDraftErrors}
      draft={toDoDraft}
      submitTodoForm={({
        description,
        title,
        priority,
        gift,
        isDone,
        id,
      }: EditToDoRequest) => {
        editToDoRequest({ description, title, priority, gift, isDone, id })
      }}
    />
  )
}

export default EditTodoFormComponent
