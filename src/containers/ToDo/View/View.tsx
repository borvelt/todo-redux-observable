import { find, propEq } from 'ramda'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import ViewToDoModal from '../../../components/ViewToDoModal'
import { TODO } from '../types'
import { ViewToDoComponentTypes } from './index'

const ViewToDoComponent = ({ todoList }: ViewToDoComponentTypes) => {
  const history = useHistory()
  const [todo, setTodo] = useState<TODO>()
  const params = useParams<{ todoId: string }>()
  useEffect(() => {
    if (!todoList) {
      return
    }
    setTodo(find<TODO>(propEq('id', parseInt(params?.todoId)))(todoList))
  }, [todoList, params])
  return (
    <>
      <ViewToDoModal
        open={true}
        handleClose={() => history.goBack()}
        {...todo}
      />
    </>
  )
}

export default ViewToDoComponent
