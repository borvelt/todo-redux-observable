import { Box, Typography } from '@material-ui/core'
import Modal from '../CommonModal'
import Priority from '../Priority'
import { ViewToDoModalProps } from './types'

const ViewToDoModal = ({
  description,
  title,
  isDone,
  priority,
  handleClose,
  id,
  open,
}: ViewToDoModalProps) => (
  <>
    <Modal
      title={`View TODO`}
      open={open}
      handleClose={handleClose}
      body={
        <Box width={1}>
          <Typography align="left"> {title} </Typography>
          <Typography align="left"> {description} </Typography>
          <Typography align="left">
            <Priority number={priority || 0} />
          </Typography>
          <Typography align="left"> {isDone ? 'Done' : 'Doing'} </Typography>
        </Box>
      }
    />
  </>
)

export default ViewToDoModal
