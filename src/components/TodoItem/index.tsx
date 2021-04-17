import { Button, Card, CardContent, Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import PriorityComponent from '../Priority'
import { TodoItemProps } from './types'
const TodoItem = ({ item }: TodoItemProps) => {
  const history = useHistory()
  const location = useLocation()
  return (
    <Card
      onClick={(e) => {
        e.preventDefault()
        history.push({
          pathname: `/view-todo/${item.id}`,
          state: { background: location },
        })
      }}
    >
      <CardContent>
        <Typography> {item.title} </Typography>
        <Typography> {item.description} </Typography>
        <Typography> {item.gift} </Typography>
        <Typography>
          <PriorityComponent number={item.priority} />
        </Typography>
        <Button
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          Edit
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          Done
        </Button>
      </CardContent>
    </Card>
  )
}

export default TodoItem
