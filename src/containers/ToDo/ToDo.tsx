import AddIcon from '@material-ui/icons/Add'
import { Fab, makeStyles, Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router'
import { ToDoComponentTypes } from './index'
import AddToDoSquareButton from '../../components/AddToDoSquareButton'
import TodoItem from '../../components/TodoItem'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  actionButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const ToDoComponent = ({
  todoList,
  fetchToDoList,
}: ToDoComponentTypes): JSX.Element => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()
  useEffect(() => {
    fetchToDoList()
  }, [fetchToDoList])
  return (
    <>
      <Typography align="center"> hello world </Typography>
      {!!todoList?.length ? (
        <>
          {todoList.map((todo) => (
            <TodoItem item={todo} key={todo.id}></TodoItem>
          ))}
          <Link
            className={classes.actionButton}
            to={{ pathname: '/add-todo', state: { background: location } }}
          >
            <Fab aria-label="add todo" color="primary">
              <AddIcon />
            </Fab>
          </Link>
        </>
      ) : (
        <AddToDoSquareButton
          onClick={() => {
            history.push({
              pathname: '/add-todo',
              state: { background: location },
            })
          }}
        />
      )}
    </>
  )
}

export default ToDoComponent
