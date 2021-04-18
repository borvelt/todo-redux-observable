import { Box, Typography } from '@material-ui/core'
import PriorityComponent from '../Priority'
import { TodoItemProps } from './types'
const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <Box component="div" width={1}>
      <Typography align="right">
        <PriorityComponent number={item.priority || 0} />
      </Typography>

      <Typography>
        <strong>Title:</strong> {item.title}
      </Typography>
      <Typography>
        <strong>Description:</strong> {item.description}
      </Typography>
      <Typography>
        <strong>KPIs:</strong> {item.gift}
      </Typography>
    </Box>
  )
}

export default TodoItem
