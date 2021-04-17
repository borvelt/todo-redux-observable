import { Button } from '@material-ui/core'
import type { ButtonProps } from '@material-ui/core'
const AddToDoSquareButton = (props: ButtonProps) => {
  return (
    <Button color="secondary" {...props} variant="contained">
      Create Your First Task ;)
    </Button>
  )
}

export default AddToDoSquareButton
