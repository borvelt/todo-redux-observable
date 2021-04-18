import { EditToDoRequest, TODO } from '../../containers/ToDo/types'
import { Error } from '../../types/StateShape'
import Modal from '../CommonModal/types'

export type AddToDoModalProps = Pick<
  Modal,
  'handleClose' | 'open' | 'title'
> & {
  errors: Error
  draft: TODO | null
  submitTodoForm: (todo: EditToDoRequest) => void
}

export default AddToDoModalProps
