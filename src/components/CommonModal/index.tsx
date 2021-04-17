import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import type ModalProps from './types'

const Modal = ({
  title,
  description,
  body,
  open,
  handleClose,
  action,
}: ModalProps) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="form-dialog-title"
    fullWidth={true}
    maxWidth="md"
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description} </DialogContentText>
      {body}
    </DialogContent>
    <DialogActions>
      <Button onClick={() => handleClose()} color="primary">
        Cancel
      </Button>
      {action}
    </DialogActions>
  </Dialog>
)

export default Modal
