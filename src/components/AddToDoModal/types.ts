import { AddToDoRequest, TODO } from '../../containers/ToDo/types'
import { Error } from '../../types/StateShape'
import Modal from '../CommonModal/types'

export type AddToDoModalProps = Pick<Modal, 'handleClose' | 'open'> & {
  errors: Error
  draft: TODO | null
  submitTodoForm: (todo: AddToDoRequest) => void
}

export default AddToDoModalProps
