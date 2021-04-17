type Modal = {
  title?: string | JSX.Element
  body?: string | JSX.Element
  action?: JSX.Element
  description?: string | JSX.Element
  open: boolean
  handleClose: () => void
}

export default Modal
