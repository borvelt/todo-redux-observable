import { useHistory } from 'react-router'
import { AddToDoFormComponentTypes } from '.'
import AddToDoModal from '../../../components/AddToDoModal'
import { AddToDoRequest } from '../types'

const AddToDoFormComponent = ({
  addToDoRequest,
  toDoDraft,
  toDoDraftErrors,
}: AddToDoFormComponentTypes): JSX.Element => {
  const history = useHistory()
  return (
    <AddToDoModal
      open={true}
      handleClose={() => history.goBack()}
      errors={toDoDraftErrors}
      draft={toDoDraft}
      submitTodoForm={({
        description,
        title,
        priority,
        gift,
      }: AddToDoRequest) => {
        addToDoRequest({ description, title, priority, gift })
      }}
    />
  )
}

export default AddToDoFormComponent
