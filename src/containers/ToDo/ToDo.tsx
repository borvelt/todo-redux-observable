import AddIcon from '@material-ui/icons/Add'
import DoneIcon from '@material-ui/icons/Done'
import { Fab, makeStyles, Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router'
import { ToDoComponentTypes } from './index'
import AddToDoSquareButton from '../../components/AddToDoSquareButton'
import TodoItemWithAction from '../../components/TodoItemWithAction'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  newTodoActionButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  viewDoneActionButton: {
    position: 'absolute',
    bottom: theme.spacing(11),
    right: theme.spacing(2),
  },
}))

const ToDoComponent = ({
  doingTodoList,
  doneTodoList,
  fetchToDoList,
  setDone,
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
      {!!doingTodoList?.length ? (
        <>
          {doingTodoList.map((todo) => (
            <TodoItemWithAction item={todo} key={todo.id} setDone={setDone} />
          ))}
          <Link
            className={classes.newTodoActionButton}
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
      {!!doneTodoList.length && (
        <Link
          to={{ pathname: '/done-todos', state: { background: location } }}
          className={classes.viewDoneActionButton}
        >
          <Fab aria-label="done todos" color="secondary">
            <DoneIcon />
          </Fab>
        </Link>
      )}
    </>
  )
}

export default ToDoComponent
