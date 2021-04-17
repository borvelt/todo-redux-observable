import { TODO } from '../../containers/ToDo/types'
import Modal from '../CommonModal/types'

export type ViewToDoModalProps = Partial<TODO> &
  Pick<Modal, 'handleClose' | 'open'>
