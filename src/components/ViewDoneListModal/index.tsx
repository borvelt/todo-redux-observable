import { Box, Divider } from '@material-ui/core'
import Modal from '../CommonModal'
import TodoItem from '../TodoItem'
import { ViewDoneListModalProps } from './types'

const ViewToDoModal = ({
  handleClose,
  open,
  doneList,
}: ViewDoneListModalProps) => (
  <>
    <Modal
      title={`View TODO`}
      open={open}
      handleClose={handleClose}
      body={
        <Box width={1}>
          {doneList.map((todo) => (
            <Box component="div" key={todo.id}>
              <TodoItem item={todo} />
              <Divider />
            </Box>
          ))}
        </Box>
      }
    />
  </>
)

export default ViewToDoModal
