import { StateShape } from '../../types/StateShape'

export enum Priority {
  LOW,
  MEDIUM,
  HIGH,
}

export type TODO = {
  id: number
  title: string
  description: string
  isDone: boolean
  priority: Priority
  gift: string
}

export type ToDoListStateShape = StateShape<TODO[]>

export type ToDoDraftStateShape = StateShape<TODO>

export type FetchToDoListRequest = undefined

export type AddToDoRequest = Omit<TODO, 'isDone' | 'id'>

export type PersistTodoListRequest = undefined

export type DoneTodoRequest = Pick<TODO, 'id' | 'isDone'>

export type EditToDoRequest = TODO
