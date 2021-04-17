import { Box, Typography } from '@material-ui/core'
import PriorityComponent from '../Priority'
import { TodoItemProps } from './types'
const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <Box component="div" width={1}>
      <Typography> {item.title} </Typography>
      <Typography> {item.description} </Typography>
      <Typography> {item.gift} </Typography>
      <Typography>
        <PriorityComponent number={item.priority} />
      </Typography>
    </Box>
  )
}

export default TodoItem
