import { StateShape } from '../../types/StateShape'

export enum Priority {
  HIGH,
  LOW,
  MEDIUM,
}

export type TODO = {
  title: string
  description: string
  isDone: boolean
  priority: Priority
}

export type ToDoListStateShape = StateShape<TODO[]>

export type FetchToDoListRequest = undefined
