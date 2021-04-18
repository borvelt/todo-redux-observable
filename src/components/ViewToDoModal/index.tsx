import { Box } from '@material-ui/core'
import Modal from '../CommonModal'
import TodoItem from '../TodoItem'
import { ViewToDoModalProps } from './types'

const ViewToDoModal = ({ handleClose, open, ...todo }: ViewToDoModalProps) => (
  <>
    <Modal
      title={`View TODO`}
      open={open}
      handleClose={handleClose}
      body={
        <Box width={1}>
          <TodoItem item={todo} />
        </Box>
      }
    />
  </>
)

export default ViewToDoModal
