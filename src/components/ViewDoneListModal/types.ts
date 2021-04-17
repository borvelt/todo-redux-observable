import { TODO } from '../../containers/ToDo/types'
import Modal from '../CommonModal/types'

export type ViewDoneListModalProps = { doneList: TODO[] } & Pick<
  Modal,
  'handleClose' | 'open'
>
