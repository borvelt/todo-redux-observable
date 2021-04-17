import { DoneTodoRequest, TODO } from '../../containers/ToDo/types'

export type TodoItemProps = {
  item: TODO
  setDone: (payload: DoneTodoRequest) => void
}
