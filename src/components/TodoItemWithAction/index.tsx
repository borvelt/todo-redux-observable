import { Box, Button, Card, CardContent, makeStyles } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import TodoItem from '../TodoItem'
import { TodoItemProps } from './types'
const useStyle = makeStyles(() => ({
  cardActionBody: {
    width: '50vw',
  },
}))
const TodoItemWithAction = ({ item, setDone }: TodoItemProps) => {
  const classes = useStyle()
  const history = useHistory()
  const location = useLocation()
  return (
    <Card
      className={classes.cardActionBody}
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
        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              history.push({
                pathname: `/edit-todo/${item.id}`,
                state: { background: location },
              })
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
        </Box>
      </CardContent>
    </Card>
  )
}

export default TodoItemWithAction
