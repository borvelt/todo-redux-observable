import { Button, Card, CardContent } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import TodoItem from '../TodoItem'
import { TodoItemProps } from './types'
const TodoItemWithAction = ({ item, setDone }: TodoItemProps) => {
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
        <TodoItem item={item} />
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
            setDone({ id: item.id, isDone: true })
          }}
        >
          Done
        </Button>
      </CardContent>
    </Card>
  )
}

export default TodoItemWithAction
